(function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-zoom-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  function initZoomInUp() {
    const elements = document.querySelectorAll('[data-animation="zoom-in-up"]');
    elements.forEach((element) => {
      element.classList.add("animation-element");
      const delay = element.getAttribute("data-delay");
      if (delay) {
        element.style.animationDelay = `${delay}ms`;
      }
      observer.observe(element);
    });
  }
  document.addEventListener("DOMContentLoaded", initZoomInUp);
})();
