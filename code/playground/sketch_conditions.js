// declaration of variables with a global scope
const sketchWidth = 400;
const sketchHeight = 400;
const size = 20;

function setup() {
  // the visible drawing space (=canvas) is being generated
  // createCanvas is a function with two parameters (here: width and height)
  // createCanvas is a function that creates an object, the object is the visible drawing space (=canvas)
  createCanvas(sketchWidth, sketchHeight);

  // by setting here these specific parameters, we overwrite the default values contained by the createCanvas function
  background(255);
  stroke(255);
  fill(0);
  
  // here the constant variables for the upcoming grid creation are being declared
  // the "columns" variable is a math operation NOT just one number
  // the operation being variable "sketchWidth" divided by variable "size"
  // the result of the devision operation is then being stored (=) in the "column" variable
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  // a for loop is being used for the repitition of a task
  // here: the first for loop creates columns
  // here: the second for loop creates rows 
  for (let x = 0; x < columns; x += 1) { // draw shape (circle) on x achsis
    for (let y = 0; y < rows; y += 1) { // draw shape (circle) on y achsis
      const shapeNum = random(0,2); // random is given a range like 0,2, but the max. range value is NOT included, meaning it can not be reached
      if (shapeNum < 1) {
        circle(x * size + size / 2, y * size + size / 2, size); // coordinates like for the center of the circle can also be math operations NOT just numbers or variables
      } else {
        rect(x * size, y * size, size, size);
      }
    }
  }
}

function draw(){
}

// COLOR CODE 
// functions are yellow
// variables are turcois
// operators are white
// pre-defined conditional loops are lilac
// declarations are deep-blue
// comments are deep-green
// numbers are bright-green
// ERROR color? / incomplete / unknown ...