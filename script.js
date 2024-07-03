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
      const element = e.getAttribute("data-index");
      oSelected.push(element);
      console.log(oSelected);
      turn = "O";
      checkWinner();
    } else {
      e.innerHTML = "X";
      const element = e.getAttribute("data-index");
      xSelected.push(element);
      console.log(xSelected);
      turn = "X";
      checkWinner();
    }
  });
});
function checkWinner() {
  winConditions.forEach((condition) => {
    if (condition.every((item) => oSelected.includes(item))) {
      console.log("O is the winner");
      return;
    } else if (condition.every((item) => xSelected.includes(item))) {
      console.log("X is the winner");
      return;
    }
  });
}
checkWinner();
