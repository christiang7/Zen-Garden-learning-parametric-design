// a circle is to be drawn on the canvas.
// the x and y coordinates are being generated/constructed and stored in and by arrays 

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400;

// we want 10 circles
const circleCount = 7;

const circleSize = 20;

// arrays declaration
// the length of the array is defined by the number of circles I want
let xPosition = new Array(circleCount);
let yPosition = new Array(circleCount);

// the x and y position arrays are being filled with values from 0-400 because of the canvas size
xPosition[0] = 103;
xPosition[1] = 117;
xPosition[2] = 119;
xPosition[3] = 125;
xPosition[4] = 140;
xPosition[5] = 146;
xPosition[6] = 108;
// xPosition[7] = 65;
// xPosition[8] = 44;
// xPosition[9] = 222;


yPosition[0] = 113;
yPosition[1] = 129;
yPosition[2] = 132;
yPosition[3] = 134;
yPosition[4] = 138;
yPosition[5] = 147;
yPosition[6] = 106;
// yPosition[7] = 35;
// yPosition[8] = 24;
// yPosition[9] = 122;

function preload() {
  // preload assets
}

// canvas size is now described by the former set variables (NOT fixed values). syntax stays same
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background('yellow');
  fill('black');
  text('Die Lottozahlen + 100 ;)', 50, 20);

  fill('pink');

  // circle (xPosition[0], yPosition[0], circleSize);
  // circle (xPosition[1], yPosition[1], circleSize);
  // circle (xPosition[2], yPosition[2], circleSize);
  // circle (xPosition[3], yPosition[3], circleSize);
  // circle (xPosition[4], yPosition[4], circleSize);
  // circle (xPosition[5], yPosition[5], circleSize);
  // circle (xPosition[6], yPosition[6], circleSize);
  // circle (xPosition[7], yPosition[7], circleSize);
  // circle (xPosition[8], yPosition[8], circleSize);
  // circle (xPosition[9], yPosition[9], circleSize);

  for (let arrayIndex = 0; arrayIndex < circleCount; arrayIndex += 1) {
    circle(xPosition[arrayIndex], yPosition[arrayIndex], circleSize);
  }

}
