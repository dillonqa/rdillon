document.addEventListener("DOMContentLoaded", function () {
  const currentPage = document.body.getAttribute("data-page");
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  const menuToggle = document.getElementById("menuToggle");
  const sidebarNav = document.getElementById("sidebarNav");

  navLinks.forEach((link) => {
    if (link.getAttribute("data-nav") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  if (menuToggle && sidebarNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = sidebarNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
