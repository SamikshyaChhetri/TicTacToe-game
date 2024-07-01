const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const oSelected = [];
const xSelected = [];
const classes = document.querySelectorAll(".className");
let turn = "X";
classes.forEach((e) => {
  e.addEventListener("click", () => {
    if (turn === "X") {
      e.innerHTML = "O";
      turn = "O";
    } else {
      e.innerHTML = "X";
      turn = "X";
    }
  });
});
