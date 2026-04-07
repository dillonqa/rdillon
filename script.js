document.addEventListener("DOMContentLoaded", function () {
  const currentPage = document.body.getAttribute("data-page");
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  const menuToggle = document.getElementById("menuToggle");
  const sidebarNav = document.querySelector(".sidebar-nav");

  navLinks.forEach((link) => {
    if (link.getAttribute("data-nav") === currentPage) {
      link.classList.add("active");
    }
  });

  if (menuToggle && sidebarNav) {
    menuToggle.addEventListener("click", function () {
      sidebarNav.classList.toggle("open");
    });
  }
});
