var canvas = document.getElementById("dead");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var speed = 5;
var y2 = 20;
var loop = true;

var name = prompt("May I ask for your name, Monsieur/Madame?");

var ballradius = 10;

var rightanswer = prompt(
  "To check if you are not a robot, We must ask you a simple question...Can you read this?"
);

while (loop === true) {
  if (rightanswer === "yes") {
    alert("Good job. you may continue to the website.");
    break;
  }

  if (rightanswer === "no") {
    var output = prompt("Try again. Please state the right answer. The question is 'Can you read this?'");

    if (output === "yes") {
      alert("Finally you got it! You are indeed reading this correctly.");
      break;
    }
  }

  else {
      alert("Please try again, by reloading this page, BOT.");
      
      if (rightanswer === "no") {
        var output = prompt("Please try again. The question is 'Can you read this?'");
    
        if (output === "yes") {
          alert("Finally you got it! You are indeed reading this correctly.");
          break;
        }
      }  
  }


}

function zerocube() {
  ctx.beginPath();
  ctx.arc(x, y, ballradius, 0, Math.PI * 2, false);
  ctx.fillStyle = "#207fa4";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(600 + x, y2, 15, 0, Math.PI * 2, false);
  ctx.fillStyle = "#c092f5";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(5000, y, 100, 0, Math.PI * 2, false);
  ctx.fillStyle = " #91e3ba";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(-300, 700, x, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#c7fb1b";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(1300, -400, x, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#dfde1b";
  ctx.fill();
}

function wordcube() {
  ctx.fillStyle = "red";
  ctx.font = "30px Arial";
  ctx.fillText("WHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", x, 200);

  ctx.fillStyle = "Purple";
  ctx.font = "75px Arial";
  ctx.fillText("Welcome, " + name + ", may the colors and shapes give you their blessings.", 360, 360);
}

function tricube() {
  ctx.beginPath();
  ctx.moveTo(100 + x, 800 - y);
  ctx.lineTo(200 + x, 400 - y);
  ctx.lineTo(400 + x, 700 - y);
  ctx.fillStyle = "#F5E5FC";
  ctx.fill();
}

function square() {
  ctx.fillStyle = "#696754";
  ctx.fillRect(360, 550, x, 50);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  zerocube();
  wordcube();
  tricube();
  square();

  while (x + speed > canvas.width || x + speed < 0) {
    speed = -speed;
  }

  while (y + speed > canvas.height || y + speed < 0) {
    speed = -speed;
  }

  if (600 + x <= canvas.width) {
    y2 += speed;
  }

  x += speed;
  y += speed;
  ballradius += speed;
}

setInterval(draw, 10);