/* =========================================================
   Shared site script
   - Handles mobile sidebar toggle
   - Highlights current page in navigation
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const currentPage = body.getAttribute("data-page");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  // Highlight active navigation item
  navLinks.forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Mobile menu toggle
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      const isOpen = sidebar.classList.toggle("open");
      body.classList.toggle("menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after clicking a nav link on mobile
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when screen becomes desktop size
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
