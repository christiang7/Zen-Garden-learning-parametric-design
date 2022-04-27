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
  frameRate(10); // 10 times a second, so it is slower than the default
}


function draw() {
  //noLoop();
  fill('red');

  for (let x = 0; x <= 10; x += 1) {
    for (let y = 0; y <= 10; y += 1) {
      const xrnd = random(50, 300);
      triangle(30, 75, xrnd, 20, 86, 75);

    }
  }



}
