var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;

var incrementor = 2;
var decrementor = 69;

function Square() {
  ctx.fillStyle = "blue";
  ctx.fillRect(x, 10, 100, 100);

  ctx.fillStyle = "magenta";
  ctx.fillRect(0, y, 100, 100);
}

function fun() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;

  console.log(incrementor + " incrementor value");
  console.log(incrementor + " incrementor value");

}

setInterval(fun, 10);