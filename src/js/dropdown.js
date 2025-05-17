const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
menuToggle.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});
const dropdownLinks = dropdownMenu.querySelectorAll("a");
dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("open");
  });
});
