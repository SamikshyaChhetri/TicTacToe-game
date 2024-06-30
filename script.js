// const first = document.getElementById("first");
// first.addEventListener("click", () => {
//   first.innerHTML = "X";
// });
const classes = document.querySelectorAll(".className");
classes.forEach((e) => {
  e.addEventListener("click", () => {
    e.innerHTML = "X";
  });
});
