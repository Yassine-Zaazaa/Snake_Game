const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let n = 3;
let Snake = [
  { x: 280, y: 280 },
  { x: 300, y: 280 },
  { x: 300, y: 300 },
  { x: 300, y: 320 },
];

function drawSquare(x, y) {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(x, y, 20, 20);
}

function addSquare(x, y) {
  n++;
  Snake[n] = { x: x, y: y };
}

function drawSnake() {
  for (i = 0; i < n + 1; i++) {
    drawSquare(Snake[i]["x"], Snake[i]["y"]);
  }
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let movement = "up";
let movement_last = "up";
drawSnake();
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 37) {
    movement = "left";
  } else if (event.keyCode == 39) {
    movement = "right";
  } else if (event.keyCode == 38) {
    movement = "up";
  } else if (event.keyCode == 40) {
    movement = "down";
  }
});
