function updateButton() {
  const btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀"; // đang tối → hiện mặt trời
  } else {
    btn.textContent = "🌙"; // đang sáng → hiện mặt trăng
  }
}

// Load trạng thái đã lưu
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Cập nhật icon ngay khi load
updateButton();

function toggleDark() {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );

  updateButton(); // cập nhật icon sau khi toggle
}

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const content = document.querySelector(".content");

  sidebar.classList.toggle("closed");
  content.classList.toggle("full");
}

function renderSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;
  
  const isPost = window.location.pathname.includes("/posts/");
  const prefix = isPost ? "../" : "./";
  
  let html = `<a href="${prefix}index.html">🏠 Trang chính</a>\n`;
  html += `<h2>Tags</h2>\n`;
  
  if (typeof SITE_DATA !== 'undefined' && SITE_DATA.tags) {
    for (const [tagId, tagInfo] of Object.entries(SITE_DATA.tags)) {
      html += `<a href="${prefix}tag.html?id=${tagId}">${tagInfo.name}</a>\n`;
    }
  }
  
  sidebar.innerHTML = html;
}

function renderTagPage() {
  if (!window.location.pathname.endsWith("tag.html")) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const tagId = urlParams.get("id");
  
  const titleEl = document.getElementById("tag-title");
  const descEl = document.getElementById("tag-description");
  const listEl = document.getElementById("post-list");
  
  if (!titleEl || !descEl || !listEl) return;
  
  if (!SITE_DATA.tags[tagId]) {
    titleEl.textContent = "Không tìm thấy Tag";
    descEl.textContent = "Tag bạn tìm kiếm không tồn tại.";
    return;
  }
  
  const tagInfo = SITE_DATA.tags[tagId];
  titleEl.textContent = tagInfo.name;
  descEl.innerHTML = tagInfo.description || "";
  
  let listHtml = "";
  for (const post of SITE_DATA.posts) {
    if (post.tags && post.tags.includes(tagId)) {
      listHtml += `<a href="${post.url}">${post.title}</a><br>\n`;
    }
  }
  
  if (listHtml === "") {
    listHtml = "<p>Chưa có bài viết nào trong thẻ này.</p>";
  }
  
  listEl.innerHTML = listHtml;
}

function renderPostTags() {
  const isPost = window.location.pathname.includes("/posts/");
  if (!isPost) return;
  
  const currentPath = window.location.pathname;
  let currentPost = null;
  
  for (const post of SITE_DATA.posts) {
    if (currentPath.endsWith(post.url)) {
      currentPost = post;
      break;
    }
  }
  
  if (!currentPost || !currentPost.tags) return;
  
  const tagsContainer = document.createElement("div");
  tagsContainer.className = "post-tags";
  tagsContainer.style.marginBottom = "20px";
  tagsContainer.style.marginTop = "10px";
  
  let tagsHtml = "<b>Tags:</b> ";
  currentPost.tags.forEach(tagId => {
    const tagInfo = SITE_DATA.tags[tagId];
    if (tagInfo) {
      tagsHtml += `<a href="../tag.html?id=${tagId}" class="tag-badge">${tagInfo.name}</a> `;
    }
  });
  
  tagsContainer.innerHTML = tagsHtml;
  
  const h1 = document.querySelector(".content h1");
  if (h1) {
    h1.parentNode.insertBefore(tagsContainer, h1.nextSibling);
  }
}

function renderSearchPanel() {
  if (typeof SITE_DATA === "undefined") return;

  const isPost = window.location.pathname.includes("/posts/");
  const prefix = isPost ? "../" : "./";

  const panel = document.createElement("div");
  panel.className = "right-sidebar";
  panel.innerHTML = `
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Tìm bài viết, tags..." autocomplete="off" />
      <div id="searchResults" class="search-results"></div>
    </div>
  `;
  document.body.appendChild(panel);

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => handleSearch(e.target.value, prefix));
}

function handleSearch(query, prefix) {
  const resultsContainer = document.getElementById("searchResults");
  resultsContainer.innerHTML = "";
  query = query.toLowerCase().trim();

  if (!query) return;

  let html = "";

  // Search Tags
  for (const [tagId, tagInfo] of Object.entries(SITE_DATA.tags)) {
    if (
      tagInfo.name.toLowerCase().includes(query) ||
      (tagInfo.description && tagInfo.description.toLowerCase().includes(query))
    ) {
      html += `
        <div class="search-result-item">
          <span class="result-type">Tag</span>
          <a href="${prefix}tag.html?id=${tagId}">${tagInfo.name}</a>
        </div>
      `;
    }
  }

  // Search Posts
  for (const post of SITE_DATA.posts) {
    if (post.title.toLowerCase().includes(query)) {
      html += `
        <div class="search-result-item">
          <span class="result-type">Bài viết</span>
          <a href="${prefix}${post.url}">${post.title}</a>
        </div>
      `;
    }
  }

  if (html === "") {
    html = "<p style='font-size: 0.9em; opacity: 0.8;'>Không tìm thấy kết quả.</p>";
  }

  resultsContainer.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderTagPage();
  renderPostTags();
  renderSearchPanel();
});
