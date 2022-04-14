const sketchWidth = 400;
const sketchHeight = 400;
const blobSize = 30; 
const padding = 20;
const spacing = blobSize + 2 * padding;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(100);
  background('#faedb9');
  //noLoop();
  const columns = sketchWidth / blobSize;
  const rows = sketchHeight / blobSize;
  
  for(let x = 0; x <= columns; x += 1) {
    for(let y = 0; y <= rows; y += 1) {
      
      fill(random(220, 270), 213, 249); // syntax: random ((r),g,b) and r (red) is given a range to vary in 
      noStroke();
      //circle(x * spacing, y * spacing, circleSize);
      blob(x * spacing, y * spacing);//(random(220, 270), 213, 249) 'red')
    }
  }
}

function blob(x,y) {
  //fill(color);
  //stroke(1);
  beginShape();
  curveVertex(x+51,y+20);
  curveVertex(x+65,y+23);
  curveVertex(x+77,y+23);
  curveVertex(x+83,y+34);
  curveVertex(x+88,y+45);
  curveVertex(x+90,y+59);
  curveVertex(x+75,y+61);
  curveVertex(x+65,y+70);
  curveVertex(x+52,y+69);
  curveVertex(x+40,y+59);
  curveVertex(x+45,y+44);
  curveVertex(x+41,y+30);
  endShape(CLOSE);
}

  // fill('blue');
  // stroke(1);
  // beginShape();
  // curveVertex(51,20);
  // curveVertex(65,23);
  // curveVertex(77,23);
  // curveVertex(83,34);
  // curveVertex(88,45);
  // curveVertex(90,59);
  // curveVertex(75,61);
  // curveVertex(65,70);
  // curveVertex(52,69);
  // curveVertex(40,59);
  // curveVertex(45,44);
  // curveVertex(41,30);
  // endShape(CLOSE);

