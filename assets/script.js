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