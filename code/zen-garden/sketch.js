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
var stoneShapeArrayX = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]; // stores x arrays of the stones
var stoneShapeArrayY = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var lineDistance = 1.05; // scaling factor of the shape controls the distance of the sandlines
var countMousePressed = [0, 0, 0];
var indexShape = 0;
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

  if (((stoneCenterArrayX[0] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[0] + initRadius)) && ((stoneCenterArrayY[0] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[0] + initRadius)) && (countShape > 0)) {
    indexShape = 0;
    //WHICH SHAPE WAS CLICKED ON???
    //console.log(indexShape);
    translate(stoneCenterArrayX[indexShape], stoneCenterArrayY[indexShape]);
    fill('#EFEBD3');
    for (var c = 0; c <= countMousePressed[0]; c += 1) {
      //translate(stoneShapeArrayX[0],stoneShapeArrayY[0]);
      //centerX=0;
      //centerY=0;
      push();
      scale(Math.pow(lineDistance, countMousePressed[0] - c));
      strokeWeight(1/Math.pow(lineDistance, countMousePressed[0] - c));
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[0][formResolution - 1] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][formResolution - 1] + stoneCenterArrayY[0] * 0);
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[0][i] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][i] + stoneCenterArrayY[0] * 0);
      }
      curveVertex(stoneShapeArrayX[0][0] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][0] + stoneCenterArrayY[0] * 0);
      // end controlpoint
      curveVertex(stoneShapeArrayX[0][1] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][1] + stoneCenterArrayY[0] * 0);
      endShape();
      pop();
    }
    fill('green');

    // beginShape();
    // // first controlpoint
    // curveVertex(stoneShapeArrayX[0][formResolution - 1] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][formResolution - 1] + stoneCenterArrayY[0] * 0);
    // // only these points are drawn
    // for (var i = 0; i < formResolution; i++) {
    //   curveVertex(stoneShapeArrayX[0][i] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][i] + stoneCenterArrayY[0] * 0);
    // }
    // curveVertex(stoneShapeArrayX[0][0] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][0] + stoneCenterArrayY[0] * 0);
    // // end controlpoint
    // curveVertex(stoneShapeArrayX[0][1] + stoneCenterArrayX[0] * 0, stoneShapeArrayY[0][1] + stoneCenterArrayY[0] * 0);
    // endShape();



    //translate(0,0);
    
    translate(-stoneCenterArrayX[indexShape], -stoneCenterArrayY[indexShape]);

    for (let l = 0; l < countShape; l+=1) {
      //translate(stoneCenterArrayX[l], stoneCenterArrayY[l]);
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[l][formResolution - 1]  + stoneCenterArrayX[l], stoneShapeArrayY[l][formResolution - 1]+ stoneCenterArrayY[l]);
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[l][i]  + stoneCenterArrayX[l], stoneShapeArrayY[l][i] + stoneCenterArrayY[l]);
      }
      curveVertex(stoneShapeArrayX[l][0] + stoneCenterArrayX[l], stoneShapeArrayY[l][0]+ stoneCenterArrayY[l]);
      // end controlpoint
      curveVertex(stoneShapeArrayX[l][1]+ stoneCenterArrayX[l], stoneShapeArrayY[l][1]+ stoneCenterArrayY[l]);
      endShape();
      //console.log(stoneCenterArrayX[l])
      //console.log(stoneCenterArrayY[l])
      translate(0,0);
    }
    //console.log(countShape)
    countMousePressed[0] += 1;
  }
  else if (((stoneCenterArrayX[1] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[1] + initRadius)) && ((stoneCenterArrayY[1] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[1] + initRadius)) && (countShape > 0)) {
    indexShape = 1;
    console.log(indexShape);
    translate(stoneCenterArrayX[1], stoneCenterArrayY[1]);
    fill('#EFEBD3');
    for (var c = 0; c <= countMousePressed[1]; c += 1) {
      //translate(stoneShapeArrayX[1],stoneShapeArrayY[1]);
      //centerX=0;
      //centerY=0;
      push();
      scale(Math.pow(lineDistance, countMousePressed[1] - c));
      strokeWeight(1/Math.pow(lineDistance, countMousePressed[1] - c));
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[1][formResolution - 1] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][formResolution - 1] + stoneCenterArrayY[1] * 0);
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[1][i] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][i] + stoneCenterArrayY[1] * 0);
      }
      curveVertex(stoneShapeArrayX[1][0] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][0] + stoneCenterArrayY[1] * 0);
      // end controlpoint
      curveVertex(stoneShapeArrayX[1][1] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][1] + stoneCenterArrayY[1] * 0);
      endShape();
      pop();
    }
    fill('green');
    // beginShape();
    // // first controlpoint
    // curveVertex(stoneShapeArrayX[1][formResolution - 1] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][formResolution - 1] + stoneCenterArrayY[1] * 0);
    // // only these points are drawn
    // for (var i = 0; i < formResolution; i++) {
    //   curveVertex(stoneShapeArrayX[1][i] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][i] + stoneCenterArrayY[1] * 0);
    // }
    // curveVertex(stoneShapeArrayX[1][0] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][0] + stoneCenterArrayY[1] * 0);
    // // end controlpoint
    // curveVertex(stoneShapeArrayX[1][1] + stoneCenterArrayX[1] * 0, stoneShapeArrayY[1][1] + stoneCenterArrayY[1] * 0);
    // endShape();

    translate(-stoneCenterArrayX[1], -stoneCenterArrayY[1]);

    for (let l = 0; l < countShape; l+=1) {
      //translate(stoneCenterArrayX[l], stoneCenterArrayY[l]);
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[l][formResolution - 1]  + stoneCenterArrayX[l], stoneShapeArrayY[l][formResolution - 1]+ stoneCenterArrayY[l]);
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[l][i]  + stoneCenterArrayX[l], stoneShapeArrayY[l][i] + stoneCenterArrayY[l]);
      }
      curveVertex(stoneShapeArrayX[l][0] + stoneCenterArrayX[l], stoneShapeArrayY[l][0]+ stoneCenterArrayY[l]);
      // end controlpoint
      curveVertex(stoneShapeArrayX[l][1]+ stoneCenterArrayX[l], stoneShapeArrayY[l][1]+ stoneCenterArrayY[l]);
      endShape();
      //console.log(stoneCenterArrayX[l])
      //console.log(stoneCenterArrayY[l])
      translate(0,0);
    }
    countMousePressed[1] += 1;
  }
  else if (((stoneCenterArrayX[2] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[2] + initRadius)) && ((stoneCenterArrayY[2] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[2] + initRadius)) && (countShape > 0)) {
    indexShape = 2;
    console.log(indexShape);
    translate(stoneCenterArrayX[2], stoneCenterArrayY[2]);
    fill('#EFEBD3');
    for (var c = 0; c <= countMousePressed[2]; c += 1) {
      //translate(stoneShapeArrayX[indexShape],stoneShapeArrayY[indexShape]);
      //centerX=0;
      //centerY=0;
      push();
      scale(Math.pow(lineDistance, countMousePressed[2] - c));
      strokeWeight(1/Math.pow(lineDistance, countMousePressed[2] - c));
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[2][formResolution - 1] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][formResolution - 1] + stoneCenterArrayY[2] * 0);
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[2][i] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][i] + stoneCenterArrayY[2] * 0);
      }
      curveVertex(stoneShapeArrayX[2][0] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][0] + stoneCenterArrayY[2] * 0);
      // end controlpoint
      curveVertex(stoneShapeArrayX[2][1] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][1] + stoneCenterArrayY[2] * 0);
      endShape();
      pop();
    }
    fill('green');
    // beginShape();
    // // first controlpoint
    // curveVertex(stoneShapeArrayX[2][formResolution - 1] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][formResolution - 1] + stoneCenterArrayY[2] * 0);
    // // only these points are drawn
    // for (var i = 0; i < formResolution; i++) {
    //   curveVertex(stoneShapeArrayX[2][i] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][i] + stoneCenterArrayY[2] * 0);
    // }
    // curveVertex(stoneShapeArrayX[2][0] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][0] + stoneCenterArrayY[2] * 0);
    // // end controlpoint
    // curveVertex(stoneShapeArrayX[2][1] + stoneCenterArrayX[2] * 0, stoneShapeArrayY[2][1] + stoneCenterArrayY[2] * 0);
    // endShape();
    //drawAllShapes();

    translate(-stoneCenterArrayX[2], -stoneCenterArrayY[2]);

    for (let l = 0; l < countShape; l+=1) {
      //translate(stoneCenterArrayX[l], stoneCenterArrayY[l]);
      beginShape();
      // first controlpoint
      curveVertex(stoneShapeArrayX[l][formResolution - 1]  + stoneCenterArrayX[l], stoneShapeArrayY[l][formResolution - 1]+ stoneCenterArrayY[l]);
      // only these points are drawn
      for (var i = 0; i < formResolution; i++) {
        curveVertex(stoneShapeArrayX[l][i]  + stoneCenterArrayX[l], stoneShapeArrayY[l][i] + stoneCenterArrayY[l]);
      }
      curveVertex(stoneShapeArrayX[l][0] + stoneCenterArrayX[l], stoneShapeArrayY[l][0]+ stoneCenterArrayY[l]);
      // end controlpoint
      curveVertex(stoneShapeArrayX[l][1]+ stoneCenterArrayX[l], stoneShapeArrayY[l][1]+ stoneCenterArrayY[l]);
      endShape();
      //console.log(stoneCenterArrayX[l])
      //console.log(stoneCenterArrayY[l])
      translate(0,0);
    }
    
    countMousePressed[2] += 1;
  }
  else if (countShape <= 2) {
    createShape(mouseX, mouseY);
  }
  //countMousePressed += 1;
  translate(0, 0);
  //console.log(countShape);
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
  for (let k = 0 ; k < formResolution; k+=1) {
    stoneShapeArrayX[countShape][k] = x[k];
    stoneShapeArrayY[countShape][k] = y[k];
  }
  
  //stoneShapeArrayX[countShape]= x;
  //stoneShapeArrayY[countShape]= y;
  
  stoneCenterArrayX[countShape] = centerX;
  stoneCenterArrayY[countShape] = centerY;
  //console.log(stoneCenterArrayX[countShape]);
  //console.log(stoneCenterArrayY[countShape]);


  countShape += 1;
  
  //console.log(countShape)
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


function drawAllShapes(){
  for (let l = 0; l < countShape; l+=1) {
    beginShape();
    // first controlpoint
    curveVertex(stoneShapeArrayX[l][formResolution - 1] , stoneShapeArrayY[l][formResolution - 1]);
    // only these points are drawn
    for (var i = 0; i < formResolution; i++) {
      curveVertex(stoneShapeArrayX[l][i] , stoneShapeArrayY[l][i] );
    }
    curveVertex(stoneShapeArrayX[l][0] , stoneShapeArrayY[l][0] );
    // end controlpoint
    curveVertex(stoneShapeArrayX[l][1], stoneShapeArrayY[l][1]);
    endShape();
  }
  


}
