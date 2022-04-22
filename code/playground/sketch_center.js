
// vorhaben hier beschreiben

// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400; 
const size = 20;
function preload(){
  // preload assets
}

// canvas size is now described by the former set variables (NOT fixed values)
// syntax stays the same
function setup() {
  createCanvas(sketchWidth, sketchHeight);
  //background(100);
  frameRate(10);
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
  pop(); // sebastian code end

let startPointx = 50;
const startPointy = 0;

const endPointx = 150;
const endPointy = 400;

curveCount = sketchHeight / 4;

  // drawing of the first wave with four manual vertexes
  stroke('blue');
  strokeWeight(28);
  noFill();
  
  beginShape(); 
  vertex(startPointx, startPointy);
  for (let counter = 1; counter <= 4; counter +=1) {
    let quadraticEndX = startPointx + 20 * counter; 
    let quadraticEndY = startPointy + 100 * counter;
    if (counter === 1 || counter === 3) {
      quadraticVertex(quadraticEndX + 100, quadraticEndY - 50, quadraticEndX, quadraticEndY);
    }
    else {
      quadraticVertex(quadraticEndX - 100, quadraticEndY - 50, quadraticEndX, quadraticEndY);
    }
  }
  endShape();
  
  // drawing of the second wave with four randomized vertexes
  stroke('pink');
  strokeWeight(8);
  noFill();
  startPointx = 50;

  beginShape();
  vertex(startPointx, startPointy);
  for (let counter = 1; counter <= 4; counter +=1) {
    let quadraticEndX = startPointx + 20 * counter + random(200,250);  
    let quadraticEndY = startPointy + 100 * counter;
    if (counter === 1 || counter === 3) {
      quadraticVertex(quadraticEndX + 100, quadraticEndY - 50, quadraticEndX, quadraticEndY);
    }
    else {
      quadraticVertex(quadraticEndX - 100, quadraticEndY - 50, quadraticEndX, quadraticEndY);
    }
  }
  endShape();
}