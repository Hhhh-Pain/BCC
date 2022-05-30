var canvas = document.getElementById("hm.");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var incrementor = 2;


function Square() {
  ctx.fillStyle = "burple";
  ctx.fillRect(x, y, 300, y);

  ctx.fillStyle = "Green";
  ctx.fillRect(0, 6, y, -100);

  ctx.fillStyle = "Blue";
  ctx.fillRect(-x, y, 400, x);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "100px Times New Roman";
  ctx.fillStyle = "purple";
  ctx.fillText("wheeeeee!!", 0, y);

  Square();
  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  while (y + incrementor > canvas.height || y + incrementor < 0) {
    incrementor = -incrementor;
  }
  x += incrementor;
  y += incrementor;
}

setInterval(drawBoxxy, 10);
