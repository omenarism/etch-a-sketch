const square = document.querySelector("#container");
square.style.background = "#eee";
square.style.width = "800px";
square.style.height = "800px";
document.body.appendChild(square);

function drawGrid(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const gridCell = document.createElement("div");
      gridCell.style.width = `${800 / cols}px`;
      gridCell.style.height = `${800 / rows}px`;
      gridCell.classList.add("hover");
      square.appendChild(gridCell);
      gridCell.addEventListener("mouseover", () => {
        gridCell.style.backgroundColor = "#000";
      });
    }
  }
}

function getValueLessThanFifty() {
  let input;
  while (true) {
    input = +prompt("Enter a number below 50");
    if (input <= 50) {
      return input;
    }
  }
}

drawGrid(16, 16);

document.querySelector("#btn-reset").addEventListener("click", () => {
  document.querySelectorAll(".hover").forEach((e) => e.remove()); //savior from strangers
  let ExAndWhy = getValueLessThanFifty();
  drawGrid(ExAndWhy, ExAndWhy);
});
