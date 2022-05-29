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
var stoneShapeArrayX = []; // stores x arrays of the stones
var stoneShapeArrayY = [];
var lineDistance = 1.05; // scaling factor of the shape controls the distance of the sandlines
var countMousePressed = 0;
var countShape = 0;
var stoneCenterArrayX = [];// stores the x center of the stones
var stoneCenterArrayY = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background('#EFEBD3');


}


function draw() {
  
}

// create stones on mouse click

// this code part is based on generative gestaltung exercise P_2_2_3_01 (http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_3_01). 
// you can find the code on github: https://github.com/generative-design/Code-Package-p5.js/blob/master/01_P/P_2_2_3_01/sketch.js

function mousePressed() {


  if (((stoneCenterArrayX[0]-initRadius) < mouseX < (stoneCenterArrayX[0]+initRadius)) && ((stoneCenterArrayY[0]-initRadius) < mouseX < (stoneCenterArrayY[0]+initRadius)) ) {
    countShape = 0;
    console.log(countShape);
  }
  else if (((stoneCenterArrayX[1]-initRadius) < mouseX < (stoneCenterArrayX[1]+initRadius))  && ((stoneCenterArrayY[1]-initRadius) < mouseX < (stoneCenterArrayY[1]+initRadius)) ){
    countShape = 1;
    console.log(countShape);
  }
  else if (((stoneCenterArrayX[2]-initRadius) < mouseX < (stoneCenterArrayX[2]+initRadius))  && ((stoneCenterArrayY[2]-initRadius) < mouseX < (stoneCenterArrayY[2]+initRadius)) ) {
    countShape = 2;
    console.log(countShape);
  }


  translate(stoneCenterArrayX[countShape],stoneCenterArrayY[countShape]);
  fill('#EFEBD3');
  if (countMousePressed > 0) {
    for (var c = 0; c < countMousePressed; c += 1) {
      //translate(stoneShapeArrayX[countShape],stoneShapeArrayY[countShape]);
      //centerX=0;
      //centerY=0;
      push();
      scale(Math.pow(lineDistance,countMousePressed-c));
      beginShape();
  // first controlpoint
  curveVertex(stoneShapeArrayX[countShape][formResolution - 1] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][formResolution - 1] + stoneCenterArrayY[countShape]*0);
  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(stoneShapeArrayX[countShape][i] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][i] + stoneCenterArrayY[countShape]*0);
  }
  curveVertex(stoneShapeArrayX[countShape][0] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][0] + stoneCenterArrayY[countShape]*0);
  // end controlpoint
  curveVertex(stoneShapeArrayX[countShape][1] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][1] + stoneCenterArrayY[countShape]*0);
  endShape();
    pop();
    }
    fill('green');
    beginShape();
  // first controlpoint
  curveVertex(stoneShapeArrayX[countShape][formResolution - 1] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][formResolution - 1] + stoneCenterArrayY[countShape]*0);
  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(stoneShapeArrayX[countShape][i] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][i] + stoneCenterArrayY[countShape]*0);
  }
  curveVertex(stoneShapeArrayX[countShape][0] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][0] + stoneCenterArrayY[countShape]*0);
  // end controlpoint
  curveVertex(stoneShapeArrayX[countShape][1] + stoneCenterArrayX[countShape]*0, stoneShapeArrayY[countShape][1] + stoneCenterArrayY[countShape]*0);
  endShape();



  }
  else {
    createShape(mouseX, mouseY);
    
  }
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
  stoneShapeArrayX[countShape] = x;
  stoneShapeArrayY[countShape] = y;
  //countShape+=1;

  stoneCenterArrayX[countShape] = centerX;
  stoneCenterArrayY[countShape] = centerY;

  // translate(centerX,centerY);
  // scale(lineDistance);
  // centerX=0;
  // centerY=0;
  // noFill();
  
  // beginShape();
  // // first controlpoint
  // curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // // only these points are drawn
  // for (var i = 0; i < formResolution; i++) {
  //   curveVertex(x[i] + centerX, y[i] + centerY);
  // }
  // curveVertex(x[0] + centerX, y[0] + centerY);

  // // end controlpoint
  // curveVertex(x[1] + centerX, y[1] + centerY);
  // endShape();
  // scale(lineDistance);
  // noFill();
  // beginShape();
  // // first controlpoint
  // curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // // only these points are drawn
  // for (var i = 0; i < formResolution; i++) {
  //   curveVertex(x[i] + centerX, y[i] + centerY);
  // }
  // curveVertex(x[0] + centerX, y[0] + centerY);

  // // end controlpoint
  // curveVertex(x[1] + centerX, y[1] + centerY);
  // endShape();

  initRadius = 50;
}
