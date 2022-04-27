// the goal is to draw ...

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400;

function preload() {
  // preload assets
}


// canvas size is now described by the former set variables (NOT fixed values)
// syntax stays the same
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  //background(100);
  //frameRate(10); // 10 times a second, so it is slower than the default
}


function draw() {
  noLoop();
  fill('red');

  let x1 = 30; 
  let y1 = 75;
  let x2 = 100;
  let y2 = 20;
  let x3 = 86;
  let y3 = 75;

  for (let x = 0; x <= sketchWidth; x += 80) { // begins with 0, then adds 40, 80, 120, ...
    for (let y = 0; y <= sketchHeight; y += 80) {
      //const xrnd = random(50, 300);
      // in order to move the whole triangle in a grid like fashion I have to connect the coordinate points with the for loop x and y variables
      triangle(x1 + x, y1 + y, x2 + x, y2 + y, x3 + x, y3 + y);

    }
  }



}
