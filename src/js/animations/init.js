(function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute("data-animation");
        if (animation) {
          entry.target.classList.add(`animate-${animation}`);
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);
  function initAnimations() {
    const elements = document.querySelectorAll("[data-animation]");
    elements.forEach((element) => {
      element.classList.add("animation-element");
      const delay = element.getAttribute("data-delay");
      if (delay) {
        element.style.animationDelay = `${delay}ms`;
      }
      observer.observe(element);
    });
  }
  document.addEventListener("DOMContentLoaded", initAnimations);
})();
