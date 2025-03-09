// Fungsi untuk mengganti tab dengan animasi
function showTab(activeId) {
  const tabs = ["tech", "tools", "designs"];
  tabs.forEach((tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabId === activeId) {
      tabElement.classList.remove("tab-hide");
      tabElement.classList.add("tab-show");
    } else {
      tabElement.classList.remove("tab-show");
      tabElement.classList.add("tab-hide");
    }
  });
}

// Fungsi untuk mengatur status aktif pada tombol tab
const tabButtons = document.querySelectorAll(".tab-btn");
function clearActive() {
  tabButtons.forEach((btn) => {
    btn.classList.remove("bg-white", "text-gray-900");
    btn.classList.add("hover:bg-white", "hover:text-gray-900");
  });
}

function setActive(btn) {
  clearActive();
  btn.classList.remove("hover:bg-white", "hover:text-gray-900");
  btn.classList.add("bg-white", "text-gray-900");
}

// Event listeners untuk tombol tab
document.getElementById("btn-tech").addEventListener("click", () => {
  showTab("tech");
  setActive(document.getElementById("btn-tech"));
});

document.getElementById("btn-tools").addEventListener("click", () => {
  showTab("tools");
  setActive(document.getElementById("btn-tools"));
});

document.getElementById("btn-designs").addEventListener("click", () => {
  showTab("designs");
  setActive(document.getElementById("btn-designs"));
});
