const navButtons = document.querySelectorAll(".bottom-nav button");
const screens = document.querySelectorAll(".screen");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.screen;

    navButtons.forEach((item) => item.classList.toggle("active", item === button));
    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.id === `screen-${target}`);
    });

    window.scrollTo({ top: 0, behavior: "instant" });
  });
});
