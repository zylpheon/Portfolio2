// Fungsi untuk mengatur carousel
const carouselInner = document.getElementById("carousel-inner");
const slides = carouselInner.children;
const totalSlides = slides.length;
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
