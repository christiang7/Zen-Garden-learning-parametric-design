
// the goal is to draw ...

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400;
const size = 20; // the variable "size" is needed for ...

function preload() {
  // preload assets
}


// canvas size is now described by the former set variables (NOT fixed values)
// syntax stays the same
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  //background(100);
  frameRate(10); // 10 times a second, so it is slower than the default
}


function draw() {
  //noLoop();

triangle(x1, y1, x2, y2, x3, y3)
}
