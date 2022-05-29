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

var formResolution = 5;
var stepSize = 2;
var distortionFactor = 1;
var initRadius = 50;
var centerX;
var centerY;
var x = [];
var y = [];
var lineDistance = 1.05; // scaling factor of the shape controls the distance of the sandlines
var countMousePressed = 0;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background('#EFEBD3');


}


function draw() {
  if (countMousePressed > 0) {
  }
}

// create stones on mouse click

// this code part is based on generative gestaltung exercise P_2_2_3_01 (http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_3_01). 
// you can find the code on github: https://github.com/generative-design/Code-Package-p5.js/blob/master/01_P/P_2_2_3_01/sketch.js

function mousePressed() {
  createShape(mouseX, mouseY);
  countMousePressed += 1;
  
}

function createShape(xpoint, ypoint) {
  fill('green');

  centerX = mouseX;
  centerY = mouseY;

  var angle = radians(360 / formResolution);
  var randomFactor = random(0.5, 2)
  initRadius = initRadius * randomFactor;
  var radius = initRadius;
  for (var i = 0; i < formResolution; i++) {
    x[i] = cos(angle * i) * initRadius;
    y[i] = sin(angle * i) * initRadius;
  }

  for (var j = 0; j <= 50 * randomFactor; j += 1) {
    // calculate new points
    for (var i = 0; i < formResolution; i++) {
      x[i] += random(-stepSize, stepSize);
      y[i] += random(-stepSize, stepSize);
      // uncomment the following line to show position of the agents
      // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
    }
  }
  beginShape();
  // first controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlpoint
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();

  translate(centerX,centerY);
  scale(lineDistance);
  centerX=0;
  centerY=0;
  noFill();
  beginShape();
  // first controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlpoint
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();
  scale(lineDistance);
  noFill();
  beginShape();
  // first controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlpoint
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();

  initRadius = 50;
}
