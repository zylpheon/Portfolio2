const tabContentContainer = document.querySelector(".tab-content");
const tabButtons = document.querySelectorAll("button[id^='btn-']");
const tabPanes = document.querySelectorAll(".tab-pane2");
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
      btn.classList.add("text-white");
    }
  }
}
let canClick = true;
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!canClick) return;
    canClick = false;
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
        "hover:bg-white",
        "hover:text-black"
      );
    });
    button.classList.add("selected2");
    button.classList.remove("hover:text-black");
    button.classList.add("hover:bg-white");
    updateButtonStyleOnHover(button, false);
    const currentPane = document.querySelector(".tab-tertampil2");
    const targetId = button.id.replace("btn-", "");
    const targetPane = document.getElementById(targetId);
    if (!currentPane || currentPane === targetPane) {
      setTimeout(() => {
        canClick = true;
      }, 500);
      return;
    }
    targetPane.classList.remove("tab-tertampil2", "geser-masuk2");
    targetPane.classList.add("tab-tersembunyi2");
    currentPane.classList.add("geser-keluar2");
    currentPane.addEventListener("animationend", function handleAnimationEnd() {
      currentPane.removeEventListener("animationend", handleAnimationEnd);
      currentPane.classList.remove("tab-tertampil2", "geser-keluar2");
      currentPane.classList.add("tab-tersembunyi2");
      targetPane.classList.remove("tab-tersembunyi2");
      const targetHeight = targetPane.offsetHeight;
      if (tabContentContainer) {
        tabContentContainer.style.height = `${targetHeight}px`;
      }
      targetPane.classList.remove("tab-tertampil2");
      targetPane.classList.add("tab-tersembunyi2");
      setTimeout(() => {
        targetPane.classList.remove("tab-tersembunyi2");
        targetPane.classList.add("tab-tertampil2", "geser-masuk2");
        targetPane.addEventListener(
          "animationend",
          function handleSlideInEnd() {
            targetPane.removeEventListener("animationend", handleSlideInEnd);
            targetPane.classList.remove("geser-masuk2");
            if (tabContentContainer) {
              tabContentContainer.style.height = "";
            }
          }
        );
      }, 100);
    });
    setTimeout(() => {
      canClick = true;
    }, 1000);
  });
});
