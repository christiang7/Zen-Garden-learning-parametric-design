// festlegung später unveränderbarer variablen, d.h. die durchgehend KONSTANT bleiben
const sketchHeight = 400;
const sketchWidth = 400; 

function preload(){
  // preload assets
}

// jetzt kann die canvasgrösse nicht über fixe werte, sondern über 
// oben definierte variablen beschrieben werden. achtung: die syntax bleibt dabei gleich!
function setup() {
  // createCanvas(400, 400, SVG); <-- alte schreibweise
  createCanvas(sketchWidth, sketchHeight, SVG);
}

function draw() {
  background('yellow');
}

// comment your code anna
