document.addEventListener("DOMContentLoaded", () => {
  const toggleDropdown = (dropdown, menu, isOpen) => {
      if (dropdown && menu) {
          dropdown.classList.toggle("open", isOpen);
          menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
      }
  };

  const closeAllDropdowns = () => {
      document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
          const menu = openDropdown.querySelector(".dropdown-menu");
          if (menu) {
              toggleDropdown(openDropdown, menu, false);
          }
      });
  };

  document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
      dropdownToggle.addEventListener("click", (e) => {
          e.preventDefault();
          const dropdown = dropdownToggle.closest(".dropdown-container");
          if (!dropdown) return;
          const menu = dropdown.querySelector(".dropdown-menu");
          if (!menu) return;
          const isOpen = dropdown.classList.contains("open");
          closeAllDropdowns();
          toggleDropdown(dropdown, menu, !isOpen);
      });
  });

  document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
      button.addEventListener("click", () => {
          closeAllDropdowns();
          const sidebar = document.querySelector(".sidebar");
          if (sidebar) {
              sidebar.classList.toggle("collapsed");
          }
      });
  });

  const sidebar = document.querySelector(".sidebar");
  if (sidebar && window.innerWidth <= 1024) {
      sidebar.classList.add("collapsed");
  }
});
