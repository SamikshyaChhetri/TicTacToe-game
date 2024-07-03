const winConditions = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

const oSelected = [];
const xSelected = [];
const classes = document.querySelectorAll(".className");
const displayResult = document.getElementById("display");
let turn = "X";
classes.forEach((e) => {
  e.addEventListener("click", () => {
    if (turn === "X") {
      e.innerHTML = "O";
      const element = e.getAttribute("data-index");
      oSelected.push(element);
      console.log(oSelected);
      checkWinner();
      turn = "O";
    } else {
      e.innerHTML = "X";
      const element = e.getAttribute("data-index");
      xSelected.push(element);
      console.log(xSelected);
      checkWinner();
      turn = "X";
    }
  });
});

function checkWinner() {
  winConditions.forEach((condition) => {
    if (condition.every((item) => oSelected.includes(item))) {
      console.log("O is the winner");
      displayResult.innerHTML = "O is the winner";
      displayResult.classList.remove("hidden");
      return;
    } else if (condition.every((item) => xSelected.includes(item))) {
      console.log("X is the winner");
      displayResult.innerHTML = "X is the winner";
      displayResult.classList.remove("hidden");

      return;
    }
  });
}
checkWinner();
