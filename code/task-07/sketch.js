function preload(){
  // preload assets
}

var inc;



function setup() {
  let c = createCanvas(800, 800);
  background(255);
  noFill();
  t = 0;
}

function draw() {
  

  for(let counter=0; counter < 1000; counter++);{

    fill('black');
    text('EXHIBITION');

    stroke(230,20,20);
    strokeWeight(0.5);
    fill(255,255,255,10);
      var x1 = width * noise(t,1,3);
      var x2 = width * noise(t,200,5);
      var x3 = width * noise(t, 20,5);
      var x4 = width * noise(t,8,10,200);
      var y1 = height * noise(t,300);
      var y2 = height * noise(t+5, 500, 10);
      var y3 = height * noise(t+6);
      var y4 = height * noise(t+7);

  quad(x1,y1,x2,y2,x3,y3,x4,y4);
  t += 0.01;

  noStroke();
  fill('black');
  textSize(100);
    text(('MOVEMENT'),50,200);
  textSize(50);
    text(('Maxime Pattern'),50,250);
  textSize(40);
    text(('20.05.2022, 19 Uhr'),50,280);
  }
  
  
  

 //noLoop();

}