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
var stoneShapeArrayX = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]; // stores x arrays of the stones
var stoneShapeArrayY = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
var lineDistance = 1.05; // scaling factor of the shape controls the distance of the sandlines
var countMousePressed = [0, 0, 0];
//var indexShape = 0;
var countShape = 0;
var stoneCenterArrayX = [];// stores the x center of the stones
var stoneCenterArrayY = [];
var radiusArray = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background('#EFEBD3');
  strokeWeight(1.05);
  stroke(20,40,20);
  for (let h=0; h < sketchHeight; h+=10){
    line(0,0+h,sketchWidth,0+h);
  }

}


function draw() {

}

// create stones on mouse click

// this code part is based on generative gestaltung exercise P_2_2_3_01 (http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_3_01). 
// you can find the code on github: https://github.com/generative-design/Code-Package-p5.js/blob/master/01_P/P_2_2_3_01/sketch.js

function mousePressed() {

  if (((stoneCenterArrayX[0] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[0] + initRadius)) && ((stoneCenterArrayY[0] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[0] + initRadius)) && (countShape > 0)) {
    drawSandlines(0);
  }
  else if (((stoneCenterArrayX[1] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[1] + initRadius)) && ((stoneCenterArrayY[1] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[1] + initRadius)) && (countShape > 0)) {
    drawSandlines(1);
  }
  else if (((stoneCenterArrayX[2] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[2] + initRadius)) && ((stoneCenterArrayY[2] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[2] + initRadius)) && (countShape > 0)) {
    drawSandlines(2);
  }
  else if (countShape <= 2) {
    createShape(mouseX, mouseY);
  }
  translate(0, 0);
}

function createShape(xpoint, ypoint) {
  fill('#7F9444');

  centerX = mouseX;
  centerY = mouseY;

  var angle = radians(360 / formResolution);
  var randomFactor = random(0.5, 2);
  initRadius = initRadius * randomFactor;
  var radius = initRadius;
  for (var i = 0; i < formResolution; i++) {
    x[i] = cos(angle * i) * initRadius;
    y[i] = sin(angle * i) * initRadius;
  }

  const longStone = random(0, 2);

  for (var j = 0; j <= 50 * randomFactor; j += 1) {
    // calculate new points
    for (var i = 0; i < formResolution; i++) {
      if ((0 <= longStone) && (longStone < 1) && (i === 1) && (countShape === 1)) {
          x[i] += random(-stepSize, stepSize);
          y[i] += random(-stepSize, stepSize) + 1;
      }
      else if ((0 <= longStone) && (longStone < 1) && (i === 2) && (countShape === 1)) {
          x[i] += random(-stepSize, stepSize);
          y[i] += random(-stepSize, stepSize) + 1;
      }
      else if ((1 <= longStone) && (i === 3) && (countShape === 1)) {
          x[i] += random(-stepSize, stepSize);
          y[i] += random(-stepSize, stepSize)-1;
      }
      else {
        x[i] += random(-stepSize, stepSize);
        y[i] += random(-stepSize, stepSize);
      }

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

  for (let k = 0; k < formResolution; k += 1) {
    stoneShapeArrayX[countShape][k] = x[k];
    stoneShapeArrayY[countShape][k] = y[k];
  }
  stoneCenterArrayX[countShape] = centerX;
  stoneCenterArrayY[countShape] = centerY;
  radiusArray[countShape] = initRadius;
  countShape += 1;

  initRadius = 50;
  
}


function drawAllShapes() {
  for (let l = 0; l < countShape; l += 1) {
    beginShape();
    // first controlpoint
    curveVertex(stoneShapeArrayX[l][formResolution - 1] + stoneCenterArrayX[l], stoneShapeArrayY[l][formResolution - 1] + stoneCenterArrayY[l]);
    // only these points are drawn
    for (var i = 0; i < formResolution; i++) {
      curveVertex(stoneShapeArrayX[l][i] + stoneCenterArrayX[l], stoneShapeArrayY[l][i] + stoneCenterArrayY[l]);
    }
    curveVertex(stoneShapeArrayX[l][0] + stoneCenterArrayX[l], stoneShapeArrayY[l][0] + stoneCenterArrayY[l]);
    // end controlpoint
    curveVertex(stoneShapeArrayX[l][1] + stoneCenterArrayX[l], stoneShapeArrayY[l][1] + stoneCenterArrayY[l]);
    endShape();
    translate(0, 0);
  }
}

function drawOneShape(index) {
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[index][formResolution - 1] , stoneShapeArrayY[index][formResolution - 1] );
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[index][i] , stoneShapeArrayY[index][i] );
      }
      curveVertex(stoneShapeArrayX[index][0] , stoneShapeArrayY[index][0] );
      // end controlpoint
      curveVertex(stoneShapeArrayX[index][1] , stoneShapeArrayY[index][1] );
      endShape();
}

function drawSandlines(index) {
  translate(stoneCenterArrayX[index], stoneCenterArrayY[index]);
  fill('#EFEBD3');

  for (var c = 0; c <= countMousePressed[index]; c += 1) {
    push();
    scale(1 + (countMousePressed[index] - c) * 10 / Math.pow(radiusArray[index], 1.06) );
    if (radiusArray[index]<80) {
      lineDistance=1.08;
    }
    else {
      lineDistance=1.04;
    }
    strokeWeight(1/Math.pow(lineDistance, countMousePressed[index] - c));  
    drawOneShape(index);
    pop();
  }

  fill('#7F9444');
  translate(-stoneCenterArrayX[index], -stoneCenterArrayY[index]);
  drawAllShapes();
  countMousePressed[index] += 1;
}

// für naechste Woche Aufgabe:
// Code verschoenern