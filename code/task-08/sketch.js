// the task is to integrate input fileds and sliders

// declaration of textField variable
let textField;
let sliderRed;
let sliderGreen;
let sliderBlue;


function setup() {
  createCanvas(800, 900);
  // noiseSeed(1);

  // text field input
  textField = createInput('Example Exhibition'); // default value
  textField.position(40, 700); // position of the input field
  textField.size(140); // size of input field

  sliderRed = createSlider(0, 255, 156);
  sliderRed.position(40, 750);
  sliderRed.size(600);

  sliderGreen = createSlider(0, 255, 56);
  sliderGreen.position(40, 805);
  sliderGreen.size(600);

  sliderBlue = createSlider(0, 255, 233);
  sliderBlue.position(40, 855);
  sliderBlue.size(600);

  frameRate(2);
}

let counter = 0;


function draw() {

  background(250); // muss hier in draw rein, damit die worte gelöscht werden können, und nicht übereinander geschrieben werden

  // farbe vom stroke
  stroke(sliderRed.value(), sliderGreen.value(), sliderBlue.value()); //slider.value()x3 
  strokeWeight(0.5);

  fill(255, 255, 255, 10);

  for (let t = 0; t < 2; t += 0.01) {
    var x1 = width * noise(t, 1, 3);
    var x2 = width * noise(t, 200, 5);
    var x3 = width * noise(t, 20, 5);
    var x4 = width * noise(t, 8, 10, 200);
    var y1 = height * noise(t, 300);
    var y2 = height * noise(t + 5, 500, 10);
    var y3 = height * noise(t + 6, 777, 30);
    var y4 = height * noise(t + 7, 100, 30);
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  noStroke();
  fill('black');
  textSize(80);
  text(textField.value(), 50, 200);

  textSize(50);
  text(('Maxime Pattern'), 50, 250);
  textSize(40);
  text(('20.05.2022, 19 Uhr'), 50, 280);

  // slider beschriftungen
  textSize(10);
  text(('red slider'), 40, 745);

  textSize(10);
  text(('green slider'), 40, 800);

  textSize(10);
  text(('blue slider'), 40, 850);


  //save('export-' + counter + '.png');


  // musste auskommentiert werden, da der sketch sonst nicht gezeichnet/aktualisiert wurde
  //counter += 1;
  //if (counter > 10) {
  //    noLoop();
  //}
}