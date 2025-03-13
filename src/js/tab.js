// Function to show the selected tab content with animation
function showTab(activeId) {
  const tabs = ["frontend", "backend", "iot", "linux", "network", "project"];
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

// Function to clear active button styling
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

// Event listeners for the category buttons
document.getElementById("btn-frontend").addEventListener("click", () => {
  showTab("frontend");
  setActive(document.getElementById("btn-frontend"));
});
document.getElementById("btn-backend").addEventListener("click", () => {
  showTab("backend");
  setActive(document.getElementById("btn-backend"));
});
document.getElementById("btn-iot").addEventListener("click", () => {
  showTab("iot");
  setActive(document.getElementById("btn-iot"));
});
document.getElementById("btn-linux").addEventListener("click", () => {
  showTab("linux");
  setActive(document.getElementById("btn-linux"));
});
document.getElementById("btn-network").addEventListener("click", () => {
  showTab("network");
  setActive(document.getElementById("btn-network"));
});
document.getElementById("btn-project").addEventListener("click", () => {
  showTab("project");
  setActive(document.getElementById("btn-project"));
});
