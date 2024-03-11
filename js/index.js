function updateUI(isDarkMode) {
  var header = document.querySelector("header");
  var navbar = document.querySelector(".navbar-brand");
  var material__symbols__outlined = document.querySelector(
    ".material-symbols-outlined"
  );
  var bars = document.querySelector(".fa-bars");
  var screenWidth = window.innerWidth;

  if (window.scrollY > 100) {
    header.classList.add("nav-fixed");
    if (isDarkMode) {
      material__symbols__outlined.style.color = "#fff";
      bars.style.color = "#fff";
      if (screenWidth <= 768) {
        navbar.style.color = "#fb811e";
      } else {
        navbar.style.color = "#fff";
      }
    } else {
      material__symbols__outlined.style.color = "#060606";
      bars.style.color = "#060606";
      if (screenWidth <= 768) {
        navbar.style.color = "#fb811e";
      } else {
        navbar.style.color = "#060606";
      }
    }
  } else {
    header.classList.remove("nav-fixed");
    material__symbols__outlined.style.color = "#fff";
    bars.style.color = "#fff";
    if (screenWidth <= 768) {
      navbar.style.color = "#fff";
    } else {
      navbar.style.color = "#fb811e";
    }
  }
}

// Hàm xử lý sự kiện click chuyển đổi giữa chế độ dark/light mode
document.querySelector("#switch__ChangedTheme").onclick = function () {
  // Đảo ngược chế độ dark/light mode bằng cách thêm/xóa class "dark" cho body
  document.querySelector("#myBody").classList.toggle("dark");
  var isDarkMode = document.querySelector("#myBody").classList.contains("dark");
  // Cập nhật giao diện dựa trên chế độ mới
  updateUI(isDarkMode);
  // Thay đổi nội dung của nút chuyển đổi chế độ
  var switchButton = document.querySelector("#switch__ChangedTheme");
  switchButton.textContent = isDarkMode ? "light_mode" : "dark_mode";
};

// Gọi hàm updateUI() khi trang được tải và khi có sự kiện cuộn trang để đồng bộ giao diện với chế độ hiện tại và scrollY
window.onload = function () {
  var isDarkMode = document.querySelector("#myBody").classList.contains("dark");
  updateUI(isDarkMode);
};

window.addEventListener("scroll", function () {
  var isDarkMode = document.querySelector("#myBody").classList.contains("dark");
  updateUI(isDarkMode);
});

// back to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top-btn").fadeIn();
    } else {
      $("#back-to-top-btn").fadeOut();
    }
  });

  $("#back-to-top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
