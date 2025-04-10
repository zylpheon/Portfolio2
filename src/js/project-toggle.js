document.addEventListener('DOMContentLoaded', function() {
  // Get all project cards except the first one
  const projectCards = document.querySelectorAll('.project-card-3:not(:first-child)');
  const toggleButton = document.getElementById('toggle-projects-3');
  let cardsVisible = false;

  // Initially hide all cards except the first one on mobile
  function updateCardVisibility() {
    if (window.innerWidth < 640) { // sm breakpoint in Tailwind
      projectCards.forEach(card => {
        card.classList.add('hidden-card-3');
      });
      toggleButton.textContent = 'Show More Projects';
      toggleButton.classList.remove('hidden');
      cardsVisible = false;
    } else {
      // On larger screens, always show all cards and hide the button
      projectCards.forEach(card => {
        card.classList.remove('hidden-card-3');
      });
      toggleButton.classList.add('hidden');
    }
  }

  // Toggle visibility of cards when button is clicked
  toggleButton.addEventListener('click', function() {
    cardsVisible = !cardsVisible;
    
    projectCards.forEach(card => {
      if (cardsVisible) {
        card.classList.remove('hidden-card-3');
        card.classList.add('fade-in-card-3');
        toggleButton.textContent = 'Show Less';
      } else {
        card.classList.add('hidden-card-3');
        card.classList.remove('fade-in-card-3');
        toggleButton.textContent = 'Show More Projects';
      }
    });
  });

  // Update on page load and resize
  updateCardVisibility();
  window.addEventListener('resize', updateCardVisibility);
});