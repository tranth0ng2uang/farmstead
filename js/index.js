window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  var navbar = this.document.querySelector(".navbar-brand");
  var material__symbols__outlined = this.document.querySelector(
    ".material-symbols-outlined"
  );
  var screenWidth = window.innerWidth;
  var bars = this.document.querySelector(".fa-bars");
  if (window.scrollY > 100) {
    header.classList.add("nav-fixed");
    material__symbols__outlined.style.color = "#060606";
    bars.classList.add("scrolled");
    if (screenWidth <= 768) {
      navbar.style.color = "#fb811e";
    } else {
      navbar.style.color = "#060606";
    }
  } else {
    header.classList.remove("nav-fixed");
    material__symbols__outlined.style.color = "#fff";
    bars.classList.remove("scrolled");
    if (screenWidth <= 768) {
      navbar.style.color = "#fff";
    } else {
      navbar.style.color = "#fb811e";
    }
  }
});

// switch__ChangedTheme
document.querySelector("#switch__ChangedTheme").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
  document.querySelector("#myBody").classList.toggle("dark");
};
