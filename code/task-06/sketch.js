function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400, SVG);
}

function draw() {
  background('white');

  // shapes begin in upper left corner and end in lower right corner

  beginShape(); //shape_1
  stroke(0);
  fill('black');
  vertex(40,40); //1
  vertex(360,40); //2
  vertex(340,60); //3
  vertex(60,60); //4
  vertex(60,340); //5
  vertex(40,360); //6
  endShape();

  beginShape(); //shape_2
  stroke(0);
  fill('black');
  vertex(80,80); //1
  vertex(320,80); //2
  vertex(300,100); //3
  vertex(100,100); //4
  vertex(100,300); //5
  vertex(80,320); //6
  endShape();

  beginShape(); //shape_3
  stroke(0);
  fill('black');
  vertex(120,120); //1
  vertex(280,120); //2
  vertex(260,140); //3
  vertex(140,140); //4
  vertex(140,260); //5
  vertex(120,280); //6
  endShape();

  beginShape(); //shape_4
  stroke(0);
  fill('black');
  vertex(160,160); //1
  vertex(240,160); //2
  vertex(220,180); //3
  vertex(180,180); //4
  vertex(180,220); //5
  vertex(160,240); //6
  endShape();

  beginShape(); //shape_5
  stroke(0);
  fill('black');
  vertex(200,200); //1
  vertex(210,200); //2
  vertex(200,210); //3
  endShape();

  beginShape(); //shape_6
  stroke(0);
  fill('black');
  vertex(220,200); //1
  vertex(220,220); //2
  vertex(200,220); //3
  endShape();

  beginShape(); //shape_7
  stroke(0);
  fill('black');
  vertex(260,140); //1
  vertex(260,260); //2
  vertex(140,260); //3
  vertex(160,240); //4
  vertex(240,240); //5
  vertex(240,160); //6
  endShape();
  
  beginShape(); //shape_8
  stroke(0);
  fill('black');
  vertex(300,100); //1
  vertex(300,300); //2
  vertex(100,300); //3
  vertex(120,280); //4
  vertex(280,280); //5
  vertex(280,120); //6
  endShape();

  beginShape(); //shape_9
  stroke(0);
  fill('black');
  vertex(80,320); //1
  vertex(320,320); //2
  vertex(320,80); //3
  vertex(340,60); //4
  vertex(340,340); //5
  vertex(60,340); //6
  endShape();
}
