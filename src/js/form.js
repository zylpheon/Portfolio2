const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai dari input name dan message
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  // Jika salah satu field kosong, jangan kirim dan berikan peringatan
  if (!name || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Jika kedua field terisi, tampilkan pesan dan reset form
  feedback.classList.remove("hidden");
  form.reset();

  // Sembunyikan pesan setelah 3 detik
  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 3000);
});
