// Mobile Menu Toggler
function menuToggler() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const overlay = document.querySelector(".overlay");
  window.addEventListener("load", function () {
    navbarToggler.addEventListener("click", function () {
      if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        overlay.classList.remove("open");
      } else {
        mobileMenu.classList.add("open");
        overlay.classList.add("open");
      }
    });
  });
}
menuToggler();
