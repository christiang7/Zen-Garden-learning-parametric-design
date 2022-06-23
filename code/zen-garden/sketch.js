
// this code is partially based on generative gestaltung exercise P_2_2_3_01 (http://www.generative-gestaltung.de/2/sketches/?01_P/P_2_2_3_01). you can find the code on github: https://github.com/generative-design/Code-Package-p5.js/blob/master/01_P/P_2_2_3_01/sketch.js

// the javascript canvas size is set to browser height and width and is thereby the background

// setting global variables

var formResolution = 5;
var stepSize = 2;
var distortionFactor = 1;
var initRadius = 50;
var centerX;
var centerY;
var x = [];
var y = [];
var stoneShapeArrayX = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]; // stores x arrays of the stones
var stoneShapeArrayY = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
var lineDistance = 1.05; // scaling factor of the shape controls the distance between the sandlines
var countMousePressed = [0, 0, 0, 0, 0, 0, 0];
var countShape = 0;
var stoneCenterArrayX = []; // stores the x center position of a stone
var stoneCenterArrayY = []; // stores the y center position of a stone
var radiusArray = [];
var clickedStone = [0, 1, 2, 3, 4];
let sliderRed; 
let sliderGreen;
let sliderBlue; 

// setting the background color and strokes (sandlines)

function setup() {

  frameRate(3); // framerate is lowered to spare the cpu 

  var canvas = createCanvas(windowWidth, windowHeight);
  document.querySelector('canvas').addEventListener('click', mousePressedCanvas)
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background('#EFEBD3');
  strokeWeight(1.05);
  stroke(20, 40, 20);

  // sandlines
  for (let h = 0; h < windowHeight; h += 10) {
    line(0, 0 + h, windowWidth, 0 + h);
  }

  // button for playing music
  button = document.getElementById('button')
  button.addEventListener('click', userFunc)

  // controls for color. rgb sliders syntax (range min, range max, default value)
  sliderRed = createSlider(0, 255, 156);
  sliderRed.size(600);
  sliderRed.parent('sliderRed');

  sliderGreen = createSlider(0, 255, 56);
  sliderGreen.size(600);
  sliderGreen.parent('sliderGreen');

  sliderBlue = createSlider(0, 255, 233);
  sliderBlue.size(600);
  sliderBlue.parent('sliderBlue');
}

// making the site responsive

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#EFEBD3');
  strokeWeight(1.05);
  stroke(20, 40, 20);
  for (let h = 0; h < windowHeight; h += 10) {
    line(0, 0 + h, windowWidth, 0 + h);
  }
}

// loading sound file

function preload() {
  audio = loadSound('among-the-cherry-blossom.mp3');
}

// integration of audio files and play / pause logic

let audio;

function userFunc(e) {
  if (audio.isPlaying()) {
    audio.pause()
  }
  else {
    audio.play()
  }
  e.stopPropagation();
  return false
}

// function draw is used basically in order to see the color change in stones (sliders) in real time

function draw() {
  for (var b = 0; b <= countShape; b += 1) {
    drawSandlines(clickedStone[b]);
    translate(0, 0);
  }
}

// create stones on mouse click on canvas

function mousePressedCanvas() {

  if (((stoneCenterArrayX[0] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[0] + initRadius)) && ((stoneCenterArrayY[0] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[0] + initRadius)) && (countShape > 0)) {
    drawSandlines(0);
    countMousePressed[0] += 1;
    switchPosition(0);
    console.log(0);
  }
  else if (((stoneCenterArrayX[1] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[1] + initRadius)) && ((stoneCenterArrayY[1] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[1] + initRadius)) && (countShape > 0)) {
    drawSandlines(1);
    countMousePressed[1] += 1;
    switchPosition(1);
    console.log(1);
  }
  else if (((stoneCenterArrayX[2] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[2] + initRadius)) && ((stoneCenterArrayY[2] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[2] + initRadius)) && (countShape > 0)) {
    drawSandlines(2);
    countMousePressed[2] += 1;
    switchPosition(2);
    console.log(2);
  }
  else if (((stoneCenterArrayX[3] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[3] + initRadius)) && ((stoneCenterArrayY[3] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[3] + initRadius)) && (countShape > 0)) {
    drawSandlines(3);
    countMousePressed[3] += 1;
    switchPosition(3);
    //console.log(3);
  }
  else if (((stoneCenterArrayX[4] - initRadius) < mouseX) && (mouseX < (stoneCenterArrayX[4] + initRadius)) && ((stoneCenterArrayY[4] - initRadius) < mouseY) && (mouseY < (stoneCenterArrayY[4] + initRadius)) && (countShape > 0)) {
    drawSandlines(4);
    countMousePressed[4] += 1;
    switchPosition(4);
  }
  else if (countShape <= 4) {
    createShape(mouseX, mouseY);
  }
  translate(0, 0);
  console.log('pressed');
}

// create the specific shape of one stone

function createShape(xpoint, ypoint) {
  fill(sliderRed.value(), sliderGreen.value(), sliderBlue.value());

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
        y[i] += random(-stepSize, stepSize) - 1;
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

// drawAllShapes is used to re-draw all stones on canvas after a sandline has been added beneath one stone

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

// drawOneShape scales (up) the original stone shape and draws it as a sandline

function drawOneShape(index) {
  beginShape();
  // first controlpoint
  curveVertex(stoneShapeArrayX[index][formResolution - 1], stoneShapeArrayY[index][formResolution - 1]);
  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(stoneShapeArrayX[index][i], stoneShapeArrayY[index][i]);
  }
  curveVertex(stoneShapeArrayX[index][0], stoneShapeArrayY[index][0]);
  // end controlpoint
  curveVertex(stoneShapeArrayX[index][1], stoneShapeArrayY[index][1]);
  endShape();
}

// here drawAllShapes and drawOneShape are combined to re-draw all stones and sandlines after each action (mouse click, draw function)

function drawSandlines(index) {
  translate(stoneCenterArrayX[index], stoneCenterArrayY[index]);
  fill('#EFEBD3');

  for (var c = 0; c <= countMousePressed[index]; c += 1) {
    push();
    scale(1 + (countMousePressed[index] - c) * 10 / Math.pow(radiusArray[index], 1.06));
    if (radiusArray[index] < 80) {
      lineDistance = 1.08;
    }
    else {
      lineDistance = 1.04;
    }
    strokeWeight(1 / Math.pow(lineDistance, countMousePressed[index] - c));
    drawOneShape(index);
    pop();
  }

  fill(sliderRed.value(), sliderGreen.value(), sliderBlue.value());
  translate(-stoneCenterArrayX[index], -stoneCenterArrayY[index]);
  drawAllShapes();
}

// sorting algorithm to position the last clicked stone and it's sandlines on top of previously clicked stones

function switchPosition(searchindex) {
  let switcher = new Boolean(true);
  let container = 0;
  var i = 0;
  while (switcher) {
    if (searchindex === clickedStone[i]) {
      container = clickedStone[countShape];
      clickedStone[countShape] = searchindex;
      clickedStone[i] = container;
      switcher = false;
    }
    i += 1;
  }
}