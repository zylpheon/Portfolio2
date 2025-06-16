window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("opacity-0", "scale-out");
  setTimeout(() => loader.style.display = "none", 800);
});
