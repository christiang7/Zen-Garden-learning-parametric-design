// seven circles are to be drawn on the canvas, each for one lottozahl  

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400;

// we want 7 circles
const circleCount = 7;

// syntax for circle is circle(x, y, d);

const circleSize = 20; // = d

// to draw the circles we already defined a constant d value, now we need x and y coordinates
// the x and y coordinates are being stored in two arrays, one array for x and one arrray for y
// arrays declaration
// the length of the array is defined by the number of circles
let xPosition = new Array(circleCount); // array for x with 7 placeholders
let yPosition = new Array(circleCount); // array for y with 7 placeholders

// the x and y position arrays are being filled with values from 0-max. Lottozahl + 100
// xPosition[0] = 103; // fill placeholder 0 with value 103
// xPosition[1] = 117;
// xPosition[2] = 119;
// xPosition[3] = 125;
// xPosition[4] = 140;
// xPosition[5] = 146;
// xPosition[6] = 108;

xPosition = [103, 117, 119, 125, 140, 146, 108];

// yPosition[0] = 113;
// yPosition[1] = 129;
// yPosition[2] = 132;
// yPosition[3] = 134;
// yPosition[4] = 138;
// yPosition[5] = 147;
// yPosition[6] = 106;

yPosition = [113, 129, 132, 134, 138, 147, 106];

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
  
  
  for (let arrayIndex = 0; arrayIndex < circleCount; arrayIndex += 1) {
    circle(xPosition[arrayIndex], yPosition[arrayIndex], circleSize);
  }

}

// a for loop counts 0,1,2,3,4,... always one more (increment by 1) in order to execute commands
// an array counts 0,1,2,3,4,... always one to the right (increment by 1) in order to store values
// because they are similar in the counting aspect they can be combined effectively 
// konkret: zählvariable der schleife kann mit indexvariable des array gleichgesetzt werden: hier arrayIndex 