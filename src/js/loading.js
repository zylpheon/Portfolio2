// Sembunyikan loader ketika halaman sudah termuat
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("opacity-0");
  // Hapus loader dari DOM setelah transisi
  setTimeout(() => {
    loader.style.display = "none";
  }, 500); // durasi 500ms sesuai dengan transisi jika diinginkan
});
