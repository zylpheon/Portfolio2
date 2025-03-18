// Fungsi untuk mengatur carousel
const carouselInner3 = document.getElementById("carousel-inner3");
const slides3 = carouselInner3.children;
const totalSlides3 = slides3.length;
let currentIndex3 = 0;

document.getElementById("next3").addEventListener("click", () => {
  currentIndex3 = (currentIndex3 + 1) % totalSlides3;
  updateCarousel3();
});

document.getElementById("prev3").addEventListener("click", () => {
  currentIndex3 = (currentIndex3 - 1 + totalSlides3) % totalSlides3;
  updateCarousel3();
});

function updateCarousel3() {
  carouselInner3.style.transform = `translateX(-${currentIndex3 * 100}%)`;
}
