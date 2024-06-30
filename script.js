const classes = document.querySelectorAll(".className");
classes.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerHTML = "X";
  });
});
