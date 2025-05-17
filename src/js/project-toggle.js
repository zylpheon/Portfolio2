document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(
    ".project-card-3:not(:first-child)"
  );
  const toggleButton = document.getElementById("toggle-projects-3");
  let cardsVisible = false;
  function updateCardVisibility() {
    if (window.innerWidth < 640) {
      projectCards.forEach((card) => {
        card.classList.add("hidden-card-3");
      });
      toggleButton.textContent = "Show More Projects";
      toggleButton.classList.remove("hidden");
      cardsVisible = false;
    } else {
      projectCards.forEach((card) => {
        card.classList.remove("hidden-card-3");
      });
      toggleButton.classList.add("hidden");
    }
  }
  toggleButton.addEventListener("click", function () {
    cardsVisible = !cardsVisible;

    projectCards.forEach((card) => {
      if (cardsVisible) {
        card.classList.remove("hidden-card-3");
        card.classList.add("fade-in-card-3");
        toggleButton.textContent = "Show Less";
      } else {
        card.classList.add("hidden-card-3");
        card.classList.remove("fade-in-card-3");
        toggleButton.textContent = "Show More Projects";
      }
    });
  });
  updateCardVisibility();
  window.addEventListener("resize", updateCardVisibility);
});
