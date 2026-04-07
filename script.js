document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const currentPage = body.getAttribute("data-page");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll(".sidebar-nav a");

  // Highlight the current page in the sidebar
  navLinks.forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Mobile menu behavior
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function () {
      const isOpen = sidebar.classList.toggle("open");
      body.classList.toggle("menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu when a nav link is clicked on mobile
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Reset menu state when resizing back to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close mobile menu when Escape is pressed
    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        sidebar.classList.remove("open");
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
