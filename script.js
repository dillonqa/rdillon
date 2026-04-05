// script.js
// Simple mobile navigation toggle for small screens

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", function () {
    siteNav.classList.toggle("show");
  });
}
