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