const burgerContainer = document.querySelector(".humburger--logo--container");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("open")) {
    menuBtn.classList.add("open");
    burgerContainer.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
    burgerContainer.classList.remove("open");
  }
});

const slider = document.querySelector(".slider");

window.addEventListener(
  "scroll",
  function (oEvent) {
    if (window.pageYOffset > 15) {
      burgerContainer.classList.add("on-scroll");
      menuBtn.classList.add("on-scroll");
    } else {
      burgerContainer.classList.remove("on-scroll");
      menuBtn.classList.remove("on-scroll");
    }
  },
  false
);

window.addEventListener("resize", () => {
  if (screen.width >= 1024) {
    burgerContainer.classList.remove("on-scroll");
    menuBtn.classList.remove("on-scroll");
    menuBtn.classList.remove("open");
    burgerContainer.classList.remove("open");
  }
});
