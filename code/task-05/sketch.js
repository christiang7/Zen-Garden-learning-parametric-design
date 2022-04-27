
// the goal is to draw waves and to hatch one part of the background

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400;
const size = 20; // the variable "size" is needed for ...

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




// function draw is a preset function which is looping all the time
// if one wants just a static image the code can be executed in the setup function
function draw() {
  //noLoop();

  // here sebastians code used as hatching
  background(255);
  stroke('black');
  strokeWeight(1);
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  push();
  translate(200, 200);

  for (let rot = 0; rot < 4; rot += 1) {
    rotate(Math.PI / 180 * 90);
    for (let counter = 0; counter < 100; counter++) {
      const startX = -200; // random(0, 400);
      const startY = random(-200, 200);
      const endX = random(-200, 200);
      const endY = -200; // random(0, 400);

      const distX = startX - endX;
      const distY = startY - endY;

      const dist = Math.sqrt(distX * distX + distY * distY);

      // the number controls the white space in the middle
      if (dist < 900) {
        line(startX, startY, endX, endY);
      }

    }
  }
  pop(); 
  // sebastian code end

  
  // drawing of the waves
  // start and end points of the left wave
  let startPointx = 50;
  const startPointy = 0;

  const endPointx = 150;
  const endPointy = 400;

  // calculation of the distance between the starting points and the end points of the arcs 
    curveDistance = sketchHeight / 4;

  // drawing of the first wave with four manual vertexes
  stroke('blue');
  strokeWeight(28);
  noFill();

  // the for loop is used for iterating the drawing function quadraticVertex  
  beginShape();
  vertex(startPointx, startPointy); // first point is being drawn
  // loop is being initiated
  for (let counter = 1; counter <= 4; counter += 1) {
    
    // this code block is being repeated (looped) so many times until the break condition is reached (= false). here the condition is 5
    // declaration and calculation of the quadratic anchor points
    let quadraticEndX = startPointx + 20 * counter;
    let quadraticEndY = startPointy + curveDistance * counter;
    
    // for uneven numbers the arcs are calculated on the right side (of the line / linear function)  
    if (counter === 1 || counter === 3) { 
      // calculation of the control point in relation to the anchor point
      // drawing of the actual arc
      quadraticVertex(quadraticEndX + 100, quadraticEndY - curveDistance / 2, quadraticEndX, quadraticEndY);
    }
    // for even numbers (2,4) the arcs are calculated on the left side (of the line / linear function)
    else { 
      // drawing of the actual arc
      quadraticVertex(quadraticEndX - 100, quadraticEndY - curveDistance / 2, quadraticEndX, quadraticEndY);
    }

  }
  endShape();

  // drawing of the second wave with four randomized vertexes
  stroke('pink');
  strokeWeight(8);
  noFill();
  startPointx = 50; // a once declared variable is being filled with a new value here, to start the two waves in one point or a different point

  beginShape();
  vertex(startPointx, startPointy);
  for (let counter = 1; counter <= 4; counter += 1) {
    let quadraticEndX = startPointx + 20 * counter + random(200, 250); // a random number from the array of 200-250 is being added randomly to the calculated x-value
    let quadraticEndY = startPointy + curveDistance * counter;
    if (counter === 1 || counter === 3) {
      quadraticVertex(quadraticEndX + 100, quadraticEndY - curveDistance / 2, quadraticEndX, quadraticEndY);
    }
    else {
      quadraticVertex(quadraticEndX - 100, quadraticEndY - curveDistance / 2, quadraticEndX, quadraticEndY);
    }
  }
  endShape();
}
