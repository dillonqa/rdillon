// ========================================
// Shared site script
// Keeps the code lightweight and GitHub Pages friendly
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const currentPage = body.getAttribute("data-page");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  // Highlight the active nav item based on the page identifier
  navLinks.forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
    }

    // Close the sidebar on mobile after a nav click
    link.addEventListener("click", function () {
      if (window.innerWidth <= 900 && sidebar) {
        sidebar.classList.remove("open");
        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Mobile menu toggle
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      const isOpen = sidebar.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close sidebar if user taps outside of it on mobile
    document.addEventListener("click", function (event) {
      const clickedInsideSidebar = sidebar.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (
        window.innerWidth <= 900 &&
        sidebar.classList.contains("open") &&
        !clickedInsideSidebar &&
        !clickedToggle
      ) {
        sidebar.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
