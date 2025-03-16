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
    btn.classList.remove("bg-[#333333]");
    btn.classList.add("bg-white");
    // Jika tombol tidak selected, ubah teks menjadi hitam.
    if (!btn.classList.contains("selected")) {
      btn.classList.remove("text-white", "gradient-text", "hover:text-black");
      btn.classList.add("text-black");
    }
  } else {
    // Saat tidak di-hover, kembalikan background ke #333333.
    btn.classList.remove("bg-white", "text-black");
    btn.classList.add("bg-[#333333]");
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
    // Reset semua tombol ke style default (tidak selected: background #333333, teks putih)
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
        "bg-[#333333]",
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
