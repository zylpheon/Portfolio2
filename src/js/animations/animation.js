class ScrollAnimator {
  constructor() {
    this.elements = document.querySelectorAll('[data-animation]');
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.elements.forEach(element => {
      observer.observe(element);
      // Set initial state
      element.style.opacity = '0';
    });
  }

  animateElement(element) {
    const animation = element.dataset.animation;
    const delay = element.dataset.animationDelay || 0;

    setTimeout(() => {
      element.style.opacity = '1';
      element.classList.add(animation);
    }, delay);
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimator();
});
