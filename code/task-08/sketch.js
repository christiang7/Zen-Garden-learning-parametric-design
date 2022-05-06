// integration of a text input filed and three sliders for rgb control
// addition of code "sliderRose" from book generative gestaltung for fun 

// declaration of textField and slider variables
let textField;
let sliderRed;
let sliderGreen;
let sliderBlue;

'use strict'; // code from: generative gestaltung --> cfgg

var sliders; // cfgg


function setup() {
    createCanvas(800, 900);
    //noiseSeed(1); // what does this do EXACTLY?

    // text field input
    textField = createInput('Example Exhibition'); // default value
    textField.position(40, 700); // position of the input field
    textField.size(140); // length of input field

    // rgb sliders syntax (range min, range max, default value)
    sliderRed = createSlider(0, 255, 156);
    sliderRed.position(50, 750);
    sliderRed.size(600);

    sliderGreen = createSlider(0, 255, 56);
    sliderGreen.position(50, 805);
    sliderGreen.size(600);

    sliderBlue = createSlider(0, 255, 233);
    sliderBlue.position(50, 855);
    sliderBlue.size(600);

    // turning down the frame rate, so the computer does not get hot
    //frameRate(2);

    // cfgg start
    sliders = [];
    // init canvas with slider rose to the middle
    sliders.push(new SliderRose(width / 2, height / 2));
    // cfgg end

}


function draw() {

    // background must be iin draw so the words are not written on top of each other
    background(250);

    // stroke color syntax stroke(r,g,b);
    stroke(sliderRed.value(), sliderGreen.value(), sliderBlue.value());
    strokeWeight(0.5);

    // fill inside the quad to lighten up the drawing space rgba
    fill(255, 255, 255, 10);

    for (let t = 0; t < 2; t += 0.01) {
        var x1 = width * noise(t, 1);
        var x2 = width * noise(t, 200);
        var x3 = width * noise(t, 20);
        var x4 = width * noise(t, 8);
        var y1 = height * noise(t, 300);
        var y2 = height * noise(t, 500);
        var y3 = height * noise(t, 777);
        var y4 = height * noise(t, 100);
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }

    // title of the exhibition being filled by the input in the text input field
    noStroke();
    fill('black');
    textSize(80);
    text(textField.value(), 50, 170);

    textSize(60);
    text(('Movement Patterns'), 50, 250);

    textSize(40);
    text(('May 20th 2022 at 7 p.m.'), 50, 300);

    // slider connotations
    textSize(10);
    text(('red slider'), 50, 745);

    textSize(10);
    text(('green slider'), 50, 800);

    textSize(10);
    text(('blue slider'), 50, 850);

    //save('export-' + counter + '.png');


}

// cfgg start

// create slider animations
sliders.forEach(function (d) {
    d.update();
});


// add a new slider rose when mouse pressed
function mousePressed() {
    sliders.push(new SliderRose(mouseX, mouseY));
}

// define a SliderRose object
function SliderRose(_x, _y) {
    this.x1 = _x;
    this.y1 = _y;
    // collect the sliders in an array
    var sliders = [];
    var sinAngle = 0;
    // create a counter to index the sliders
    var counter = 0;
    // set the slider width
    var roseRadius = random(20, 100);
    // define how many degrees to skip from 360
    var skip = 20;
    // create sliders around a circle
    for (var i = 0; i < 360; i += skip) {
        var sliderAngle = radians(i);
        var x2 = cos(sliderAngle) * roseRadius;
        var y2 = sin(sliderAngle) * roseRadius;
        // create the slider, position, and rotate
        sliders[counter] = createSlider(0, 255, 50);
        sliders[counter].position(this.x1 + x2, this.y1 + y2);
        sliders[counter].style('width', roseRadius + 'px');
        sliders[counter].style('transform', 'rotate(' + i + 'deg)');
        counter++;

    }

    // for each loop through the draw function
    // update the sliders according to a sin wave
    this.update = function () {
        var offset = 0;
        for (var i = 0; i < sliders.length; i++) {
            // map the value along the sine wave to the slider values
            var x = map(sin(sinAngle + offset), -1, 1, 0, 255);
            sliders[i].value(x);
            offset += 0.050;
        }
        sinAngle += 0.1;
    };

}
// cfgg start

