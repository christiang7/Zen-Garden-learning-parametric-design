// festlegung später unveränderbarer variablen, d.h. die durchgehend KONSTANT bleiben
// festlegung der zeichenfläche (canvas)
const sketchHeight = 400;
const sketchWidth = 400; 

// hier später parameter der/des shapes anlegen
let circleSize = 15;

const padding = 5;
const spacing = circleSize + 2 * padding;


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
  background('#faedb9');
  
  const columns = sketchWidth / circleSize;
  const rows = sketchHeight / circleSize;
  
  
  for(let x = 0; x <= columns; x += 1) {
    for(let y = 0; y <= rows; y += 1) {
      
      fill(random(220, 270), 213, 249); // syntax: random ((r),g,b) und r (rot) wird in ein mögliches spektrum geteilt
      noStroke();
      circle(x * spacing, y * spacing, circleSize);
    }
  }

}

