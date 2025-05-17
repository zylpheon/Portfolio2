const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !message) {
    alert("Please fill in all fields.");
    return;
  }
  feedback.classList.remove("hidden");
  form.reset();
  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 3000);
});
