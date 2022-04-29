// a circle is to be drawn on the canvas.
// the x and y coordinates are being generated/constructed and stored in and by arrays 

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400;

// we want 10 circles
const circleCount = 10;

const circleSize = 20;

// arrays declaration
// the length of the array is defined by the number of circles I want
let xPosition = new Array(circleCount);
let yPosition = new Array(circleCount);

// the x and y position arrays are being filled with values from 0-400 because of the canvas size
xPosition[0] = 7;
xPosition[1] = 12;
xPosition[2] = 72;
xPosition[3] = 351;
xPosition[4] = 2;
xPosition[5] = 45;
xPosition[6] = 83;
xPosition[7] = 65;
xPosition[8] = 44;
xPosition[9] = 222;


yPosition[0] = 10;
yPosition[1] = 31;
yPosition[2] = 90;
yPosition[3] = 320;
yPosition[4] = 6;
yPosition[5] = 15;
yPosition[6] = 63;
yPosition[7] = 35;
yPosition[8] = 24;
yPosition[9] = 122;

function preload() {
  // preload assets
}

// canvas size is now described by the former set variables (NOT fixed values). syntax stays same
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  //background(100);
  //frameRate(3); // only x times a second, so it is slower than the default


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

for (let arrayIndex = 0; arrayIndex < circleCount; arrayIndex += 1 ){
  circle (xPosition[arrayIndex], yPosition[arrayIndex], circleSize);
}

}

function draw() {
  //background('white');
  //noLoop();
  circle (xPosition[0], yPosition[0], circleSize);
}
