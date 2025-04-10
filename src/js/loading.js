// Sembunyikan loader ketika halaman sudah termuat
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  
  // Tambahkan kelas untuk transisi yang lebih halus
  loader.classList.add("opacity-0", "scale-out");
  
  // Hapus loader dari DOM setelah transisi selesai
  setTimeout(() => {
    loader.style.display = "none";
  }, 800); // Durasi ditambah untuk memberikan waktu pada animasi
});
