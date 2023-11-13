const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  // Toggle the "active" class to show/hide the mobile menu
  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});
