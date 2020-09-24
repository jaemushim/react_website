window.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(max-width: 1200px)").matches) {
    /* 뷰포트 너비가 1200 픽셀 이하 */
    // Mobile Menu Toggler
    const mobileMenu = document.querySelector(".mobile-menu");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const overlay = document.querySelector(".overlay");
    function menuToggler() {
      //Menu Icon Toggle
      window.addEventListener("load", function () {
        navbarToggler.addEventListener("click", function () {
          if (!mobileMenu.classList.contains("open")) {
            mobileMenu.classList.add("open");
            overlay.classList.add("open");
          }
          document.addEventListener("click", function (e) {
            if (e.target.classList.contains("overlay")) {
              mobileMenu.classList.remove("open");
              overlay.classList.remove("open");
            }
          });
        });
      });
      // If MobileMenuX Clicked
      const mobileMenuX = document.querySelector(".mobile-menu-x");
      mobileMenuX.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        overlay.classList.remove("open");
      });

      //If Outside Area Clicked
    }
    menuToggler();
    // Mobile Sub Menu Toggler
    function mobileSubmenuToggler() {
      const parent = document.querySelector(".navbar-nav");
      parent.addEventListener("click", function (e) {
        if (e.target.parentElement.classList.contains("nav-item")) {
          var sibling = e.target.nextElementSibling;
          if (sibling != null) {
            if (!sibling.classList.contains("open")) {
              sibling.classList.add("open");
            } else {
              sibling.classList.remove("open");
            }
          }
        }
      });
    }
    mobileSubmenuToggler();
  }
});

// Navbar Scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
// Navbar Shrink
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0.1rem 0.2rem";
    console.log("ok");
  } else {
    document.getElementById("navbar").style.padding = "0.5rem 1rem";
  }
}
