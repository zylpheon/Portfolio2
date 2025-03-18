// Seleksi kontainer tab content untuk mengatur tinggi secara dinamis
const tabContentContainer = document.querySelector(".tab-content");

// Seleksi semua tombol yang memiliki id diawali 'btn-'
const tabButtons = document.querySelectorAll("button[id^='btn-']");
// Seleksi semua konten tab
const tabPanes = document.querySelectorAll(".tab-pane2");

// Fungsi untuk mengubah styling tombol saat hover
function updateButtonStyleOnHover(btn, isHover) {
  if (isHover) {
    btn.classList.remove("bg-[#444444]");
    btn.classList.add("bg-white");
    if (!btn.classList.contains("selected2")) {
      btn.classList.remove("text-white", "gradient-text", "hover:text-black");
      btn.classList.add("text-black");
    }
  } else {
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("bg-[#444444]");
    if (btn.classList.contains("selected2")) {
      btn.classList.remove("text-white", "hover:text-black");
      btn.classList.add("gradient-text", "hover:bg-white");
    } else {
      btn.classList.remove("gradient-text", "hover:bg-white");
      btn.classList.add("text-white", "hover:text-black");
    }
  }
}

// Pasang event listener untuk hover pada setiap tombol
tabButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => updateButtonStyleOnHover(btn, true));
  btn.addEventListener("mouseleave", () =>
    updateButtonStyleOnHover(btn, false)
  );
});

// Pasang event listener untuk klik pada setiap tombol
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Reset styling semua tombol
    tabButtons.forEach((btn) => {
      btn.classList.remove(
        "selected2",
        "bg-white",
        "text-black",
        "gradient-text",
        "hover:text-black",
        "hover:bg-white"
      );
      btn.classList.add(
        "bg-[#444444]",
        "text-white",
        "transition",
        "ease",
        "duration-300",
        "hover:text-black"
      );
    });

    // Tandai tombol yang diklik sebagai yang aktif
    button.classList.add("selected2");
    button.classList.remove("hover:text-black");
    button.classList.add("hover:bg-white");
    updateButtonStyleOnHover(button, false);

    // Tangani transisi konten tab
    const currentPane = document.querySelector(".tab-tertampil2");
    // Ambil id target dari tombol (misal, 'btn-frontend' -> 'frontend')
    const targetId = button.id.replace("btn-", "");
    const targetPane = document.getElementById(targetId);

    // Jika tab yang sedang aktif sama dengan tab yang dituju, tidak perlu mengubah apa pun
    if (!currentPane || currentPane === targetPane) return;

    // Pertama, atur target tab agar tersembunyi (jika belum) agar tidak tampil di bawah
    targetPane.classList.remove("tab-tertampil2", "geser-masuk2");
    targetPane.classList.add("tab-tersembunyi2");

    // Animasi keluar untuk konten tab yang sedang aktif
    currentPane.classList.add("geser-keluar2");
    currentPane.addEventListener("animationend", function handleAnimationEnd() {
      currentPane.removeEventListener("animationend", handleAnimationEnd);
      currentPane.classList.remove("tab-tertampil2", "geser-keluar2");
      currentPane.classList.add("tab-tersembunyi2");

      // Setelah animasi keluar selesai, atur tinggi kontainer secara dinamis
      // Hapus terlebih dahulu kelas sembunyi pada target agar bisa diukur
      targetPane.classList.remove("tab-tersembunyi2");
      const targetHeight = targetPane.offsetHeight;
      if (tabContentContainer) {
        tabContentContainer.style.height = `${targetHeight}px`;
      }
      // Kembalikan target ke keadaan tersembunyi untuk animasi masuk
      targetPane.classList.remove("tab-tertampil2");
      targetPane.classList.add("tab-tersembunyi2");

      // Beri jeda singkat sebelum memulai animasi masuk agar tumpang tindih tidak terjadi
      setTimeout(() => {
        // Tampilkan konten tab yang dituju dengan animasi masuk
        targetPane.classList.remove("tab-tersembunyi2");
        targetPane.classList.add("tab-tertampil2", "geser-masuk2");
        targetPane.addEventListener(
          "animationend",
          function handleSlideInEnd() {
            targetPane.removeEventListener("animationend", handleSlideInEnd);
            targetPane.classList.remove("geser-masuk2");
            // Setelah animasi selesai, hapus inline style tinggi pada kontainer
            if (tabContentContainer) {
              tabContentContainer.style.height = "";
            }
          }
        );
      }, 100); // jeda 100ms
    });
  });
});

// Set default tab (misal: Frontend) dengan memicu klik pada tombol 'btn-frontend'
const defaultTabButton = document.getElementById("btn-frontend");
if (defaultTabButton) {
  defaultTabButton.click();
}
