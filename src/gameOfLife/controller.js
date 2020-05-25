export const controller = model => {
  document.getElementById("start").addEventListener("click", () => {
    model.run();
  });

  document.getElementById("stop").addEventListener("click", () => {
    model.stop();
  });

  document.getElementById("reset").addEventListener("click", () => {
    model.reset();
  });
};
