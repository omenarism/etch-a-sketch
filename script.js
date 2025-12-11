const square = document.querySelector("#container");
square.style.background = "#eee";
square.style.width = "800px";
square.style.height = "800px";
document.body.appendChild(square);

const grid = document.createElement("div");
grid.className = "grid";
grid.style.width = "50px";
grid.style.height = "50px";
grid.style.border = "1px solid #000";

let input = +prompt("Enter a number below 100");
let rows = input;
let cols = input;

function drawGrid() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const gridCell = document.createElement("div");
      gridCell.style.width = `${800 / cols}px`;
      gridCell.style.height = `${800 / rows}px`;
      gridCell.classList.add("hover");
      square.appendChild(gridCell);
      gridCell.addEventListener("click", () => {
        gridCell.style.backgroundColor = "#000";
      });
    }
  }
}
drawGrid();
