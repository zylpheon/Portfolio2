const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

// Agar dropdown tertutup otomatis saat link di klik
const dropdownLinks = dropdownMenu.querySelectorAll("a");
dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("open");
  });
});
