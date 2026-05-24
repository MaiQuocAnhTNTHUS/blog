const SITE_DATA = {
  tags: {
    "basics": {
      name: "Kiến thức cơ bản",
      description: "Những kiến thức sau đây là không thể thiếu đối với các bạn theo đuổi Toán học:"
    },
    "planar_geometry": {
      name: "Hình học phẳng",
      description: "Mục này dành cho các bạn học sinh chuyên Toán ôn thi Olympic và các bạn sinh viên ngành Toán đang học Hình học Giải tích (Hình học tuyến tính).<br>Tài liệu tham khảo:<ol><li>Geometric Algebra - Emil Artin.</li><li>Geometry I - Marcel Berger.</li></ol>"
    },
    "calculus_on_manifolds": {
      name: "Giải tích trên đa tạp",
      description: "Đôi khi làm việc với các không gian tôpô, chỉ có các ánh xạ liên tục là không đủ. Từ đó người ta đặt ra câu hỏi: <b>Làm thế nào để trang bị thêm các cấu trúc giải tích cho một không gian tôpô?</b><br><br>Giáo trình: Introduction to Smooth Manifolds - John M.Lee, Second Edition"
    }
  },
  posts: [
    // Kiến thức cơ bản
    {
      title: "Nguồn gốc của các con số. Phần 1: Làm thế nào để đếm?",
      url: "posts/N.html",
      tags: ["basics"]
    },
    {
      title: "Nguồn gốc của các con số. Phần 2: Dấu âm",
      url: "posts/Z.html",
      tags: ["basics"]
    },
    {
      title: "Nguồn gốc của các con số. Phần 3: Chia quẩy",
      url: "posts/Q.html",
      tags: ["basics"]
    },
    
    // Hình học phẳng
    {
      title: "Hình học affine. Phần 1: Trực giác hình học",
      url: "posts/affine1.html",
      tags: ["planar_geometry"]
    },
    {
      title: "Hình học affine. Phần 2: Trực giác đại số",
      url: "posts/affine2.html",
      tags: ["planar_geometry"]
    },
    {
      title: "Hình học xạ ảnh. Phần 1: Trực giác hình học",
      url: "posts/projective1.html",
      tags: ["planar_geometry"]
    },
    {
      title: "Hình học xạ ảnh. Phần 2: Trực giác đại số",
      url: "posts/projective2.html",
      tags: ["planar_geometry"]
    },
    {
      title: "Hình học xạ ảnh. Phần 3: Đối ngẫu xạ ảnh",
      url: "posts/projective3.html",
      tags: ["planar_geometry"]
    },
    
    // Giải tích trên đa tạp
    {
      title: "Đa tạp tôpô",
      url: "posts/topological_manifolds.html",
      tags: ["calculus_on_manifolds"]
    },
    {
      title: "Cấu trúc trơn",
      url: "posts/smooth_structures.html",
      tags: ["calculus_on_manifolds"]
    },
    {
      title: "Đa tạp với biên",
      url: "posts/manifolds_with_boundary.html",
      tags: ["calculus_on_manifolds"]
    }
  ]
};
