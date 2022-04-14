// festlegung der zeichenfläche (canvas)
const sketchHeight = 400;
const sketchWidth = 400; 

function preload(){
    // preload assets
  }

  function setup() {
    // createCanvas(400, 400, SVG); <-- alte schreibweise
    createCanvas(sketchWidth, sketchHeight, SVG);
  }

function draw() {
    
    fill('blue');
    beginShape();
    curveVertex(84, 91);
    curveVertex(84, 91);
    curveVertex(68, 19);
    curveVertex(21, 17);
    curveVertex(32, 91);
    curveVertex(32, 91);
    endShape();
  }
