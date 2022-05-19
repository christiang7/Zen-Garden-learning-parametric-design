// PSEUDO ALGORITHM / CODE
// create canvas - (full width)

// create border
// create horizontal background sand (for loop)
// create vertical background sand left and right (for loop)

// create stones
// click on a button and create three random sized stones 
// click with the mouse on the canvas and create a random sized stone in this area (is there a max. number / can you undo the stones?)

// create sandlines
// click on one stone and generate one sandline around that stone with the same shape as the stone
// with each click on a stone an additional line is created around that stone with the same contour/shape
// the sandline of the last clicked stone covers the sandlines of the previously created sandlines of other stones
// the background lines are coverd also

// *** add controls for varying the color, the distnace between the lines and the stroke style

// export svg file for lasercutter by clicking on a button

// _________________

// setting variables for canvas size (16:9 format)
const sketchHeight = 720;
const sketchWidth = 1280;
const circleSize = 100;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background('#EFEBD3');
}

function draw() {
  
}

// create stones on mouse click
function mousePressed() {
  createShape(mouseX, mouseY);
}

function createShape(x,y) {
  fill('green');
  circle(x,y,circleSize * random(0.5,1));
  console.log('zeichne kreis');
}