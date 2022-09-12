// create canvas element and append it to document body
// var canvas = document.createElement('canvas');
// document.body.appendChild(canvas);
var canvas = document.querySelector("#lolwa")
console.log("WINDOW WIDTH = ", window.innerWidth)
console.log("WINDOW HEIGHT = ", window.innerHeight)

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: -2, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
//   ctx.canvas.width = window.innerWidth;
//   ctx.canvas.height = window.innerHeight;
  ctx.canvas.width = 800;
  ctx.canvas.height = 500;
}

// var arr = []

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 15;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x - 360, pos.y); // from
//   arr.push()
//   console.log("FROM MOVE POSTION ", pos.x, pos.y)
  setPosition(e);
  ctx.lineTo(pos.x - 360, pos.y); // to
//   console.log("TO MOVE POSITION ", pos.x, pos.y)

  ctx.stroke(); // draw it!
}

setTimeout(() => {
    
}, 1000);