const navMenu = document.getElementById("nav_menu");
const navLinks = document.querySelectorAll(".nav-link");
const humburger = document.getElementById("humburger");

humburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  humburger.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("left-[0]");
    humburger.classList.remove("ri-close-large-line");
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});