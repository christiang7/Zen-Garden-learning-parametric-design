// setting variables for canvas size
const sketchHeight = 400;
const sketchWidth = 400; 

// size of a circle is defined by its diameter
let circleSize = 15;

// circles get space between each other
//what exactly happens here?
const padding = 5;
const spacing = circleSize + 2 * padding;

function preload(){
  // preload assets
}

// canvas size is now described by the former set variables (NOT fixed values)
// syntax stays the same
function setup() {
  // createCanvas(400, 400, SVG); <-- old way
  let c = createCanvas(sketchWidth, sketchHeight);
  
  // saving DOES NOT work. why??? 
  saveCanvas(c, 'myCanvas', 'png');
}


function draw() {
  background('#faedb9');
  //noLoop();

  const columns = sketchWidth / circleSize;
  const rows = sketchHeight / circleSize;
  
  
  for(let x = 0; x <= columns; x += 1) {
    for(let y = 0; y <= rows; y += 1) {
      
      fill(random(220, 270), 213, 249); // syntax: random ((r),g,b) and r (red) is given a range to vary in 
      noStroke();
      circle(x * spacing, y * spacing, circleSize);
    }
  }
  
}
// the computer only knows to draw one circle at a certain x,y positions with a certain diameter.
// then to draw the next one at the next position. 
// it does not understand padding, padding was thought out by the human mind, knowing math.


