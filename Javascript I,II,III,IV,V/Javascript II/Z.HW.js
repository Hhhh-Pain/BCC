var borderBarx = 250;
var borderBary = 250;
var pageHeight = 1000;
var pageWidth = 250;
var x = 250;
var y = 250;
var canvas = document.getElementById("awesome");
var ctx = canvas.getContext("2d");
dpi = window.devicePixelRatio;

function fix_dpi() {
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    }
  };
  canvas.setAttribute("width", style.width() * dpi);
  canvas.setAttribute("height", style.height() * dpi);
}

function draw() {
  var canvas = document.getElementById("awesome");
  if (canvas.getContext) {
    fix_dpi();
    var ctx = canvas.getContext("2d");
    // Black
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(x, 0, 30, pageHeight);

    ctx.fillRect(0, 200, 500, 30);
    ctx.fillRect(0, 615, y, 30);
    ctx.fillRect(x, 550, y, 30);
    //Yellow
    ctx.fillStyle = "rgba(225, 225, 0, 0.6)";
    ctx.fillRect(0, 0, y, 200);
    //Blue
    ctx.fillStyle = "rgb(0, 0, 225)";
    ctx.fillRect(0, 640, borderBary, 300);
    //Red
    ctx.fillStyle = "rgb(225, 0, 0)";
    ctx.fillRect(borderBarx + 30, 230, borderBary-30, 320);
  }
}
