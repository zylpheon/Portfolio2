// Seleksi semua tombol kategori berdasarkan id yang diawali "btn-"
const tabButtons = document.querySelectorAll("button[id^='btn-']");
// Seleksi semua konten tab
const tabPanes = document.querySelectorAll(".tab-pane");

/**
 * Fungsi untuk mengubah style tombol saat hover (true/false)
 * Berdasarkan status apakah tombol tersebut selected atau tidak.
 */
function updateButtonStyleOnHover(btn, isHover) {
  if (isHover) {
    // Saat hover: background berubah menjadi putih.
    btn.classList.remove("bg-[#444444]");
    btn.classList.add("bg-white");
    // Jika tombol tidak selected, ubah teks menjadi hitam.
    if (!btn.classList.contains("selected")) {
      btn.classList.remove("text-white", "gradient-text", "hover:text-black");
      btn.classList.add("text-black");
    }
  } else {
    // Saat tidak di-hover, kembalikan background ke #444444.
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("bg-[#444444]");
    if (btn.classList.contains("selected")) {
      // Untuk tombol selected: gunakan efek gradient untuk teks,
      // hapus kelas hover:text-black, dan tambahkan hover:bg-white.
      btn.classList.remove("text-white", "hover:text-black");
      btn.classList.add("gradient-text", "hover:bg-white");
    } else {
      // Untuk tombol yang tidak selected: kembalikan teks ke putih
      // dan aktifkan kembali hover:text-black (pastikan hover:bg-white dihapus).
      btn.classList.remove("gradient-text", "hover:bg-white");
      btn.classList.add("text-white", "hover:text-black");
    }
  }
}

// Pasang event listener mouseenter dan mouseleave untuk semua tombol.
tabButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    updateButtonStyleOnHover(btn, true);
  });
  btn.addEventListener("mouseleave", () => {
    updateButtonStyleOnHover(btn, false);
  });
});

// Atur event click untuk mengubah state active (selected) dan menampilkan konten tab.
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Reset semua tombol ke style default (tidak selected: background #444444, teks putih)
    tabButtons.forEach((btn) => {
      btn.classList.remove(
        "selected",
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

    // Tandai tombol yang diklik sebagai selected (aktif),
    // hapus kelas hover:text-black dan tambahkan kelas hover:bg-white.
    button.classList.add("selected");
    button.classList.remove("hover:text-black");
    button.classList.add("hover:bg-white");
    // Perbarui tampilannya sesuai dengan keadaan tidak di-hover.
    updateButtonStyleOnHover(button, false);

    // Ubah semua konten tab ke state hide (menggunakan class custom dari style.css).
    tabPanes.forEach((pane) => {
      pane.classList.remove("tab-show");
      pane.classList.add("tab-hide");
    });

    // Tampilkan konten tab yang sesuai (ubah class menjadi tab-show).
    const target = button.getAttribute("id").replace("btn-", "");
    const targetPane = document.getElementById(target);
    targetPane.classList.remove("tab-hide");
    targetPane.classList.add("tab-show");
  });
});

// Set default selected tab (untuk tombol Frontend Development)
const defaultTabButton = document.getElementById("btn-frontend");
if (defaultTabButton) {
  // Simulasikan klik pada tombol default agar semua style dan konten ter-update
  defaultTabButton.click();
}

// Ambil semua tombol kategori
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Dapatkan id target tab (misal: btn-frontend → frontend)
    const targetTabId = button.id.replace("btn-", "");

    // Cari tab yang sedang aktif
    const currentTab = document.querySelector(".tab-tertampil");

    // Jika tab yang diklik sama dengan tab aktif, tidak perlu melakukan apa-apa
    if (!currentTab || currentTab.id === targetTabId) return;

    // Mulai animasi keluar pada tab aktif
    currentTab.classList.add("geser-keluar");

    // Segera tampilkan tab target dengan animasi masuk
    const targetTab = document.getElementById(targetTabId);
    targetTab.classList.remove("tab-tersembunyi");
    targetTab.classList.add("tab-tertampil", "geser-masuk");

    // Setelah animasi keluar selesai, sembunyikan tab lama
    currentTab.addEventListener("animationend", function handleAnimationEnd() {
      currentTab.removeEventListener("animationend", handleAnimationEnd);
      currentTab.classList.remove("tab-tertampil", "geser-keluar");
      currentTab.classList.add("tab-tersembunyi");
    });

    // Setelah animasi masuk selesai, hapus kelas animasi
    targetTab.addEventListener("animationend", function handleSlideInEnd() {
      targetTab.removeEventListener("animationend", handleSlideInEnd);
      targetTab.classList.remove("geser-masuk");
    });
  });
});
