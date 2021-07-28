const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var ground1, ground2;
var b1, b2, b3, b4, b5, b6;
var sling, ball, ballimg;
var backgroundImg;
var score=0;
function preload(){
    ballimg = loadImage("polygon.png");
    getTime();
}
function setup(){
createCanvas(1000, 500);
engine=Engine.create();
world=engine.world;
ground1=new Ground(400, 320, 200, 10);
ground2=new Ground(700, 220, 200, 10);

b1=new Block(320, 280, 30, 40);
b2=new Block(350, 280, 30, 40);
b3=new Block(380, 280, 30, 40);
b4=new Block(410, 280, 30, 40);
b5=new Block(440, 280, 30, 40);
b6=new Block(470, 280, 30, 40);

b7=new Block(380, 260, 30, 40);
b8=new Block(410, 260, 30, 40);
b9=new Block(440, 260, 30, 40);
b10=new Block(350, 260, 30, 40);

b11=new Block(380, 240, 30, 40);
b12=new Block(410, 240, 30, 40);

b13=new Block(620, 180, 30, 40);
b14=new Block(650, 180, 30, 40);
b15=new Block(680, 180, 30, 40);
b16=new Block(710, 180, 30, 40);
b17=new Block(740, 180, 30, 40);
b18=new Block(770, 180, 30, 40);

b19=new Block(680, 160, 30, 40);
b20=new Block(710, 160, 30, 40);
b21=new Block(740, 160, 30, 40);
b22=new Block(650, 160, 30, 40);

b23=new Block(680, 140, 30, 40);
b24=new Block(710, 140, 30, 40);

ball=Bodies.circle(50, 200, 20);
World.add(world, ball);
sling=new Slingshot(this.ball, {x:100, y:200});
}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
  }
  fill("white");
    textSize(20);
    text("Score: " + score, 800, 50);
Engine.update(engine);
ground1.display();
ground2.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();

b7.display();
b8.display();
b9.display();
b10.display();

b11.display();
b12.display();

b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();

b19.display();
b20.display();
b21.display();
b22.display();

b23.display();
b24.display();


sling.display();
imageMode(CENTER);
image(ballimg,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    sling.fly();
  }

function keyPressed(){
if(keyCode===32){
  sling.attach(ball);
}
}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
  var rjson = await response.json();
  var dt = rjson.datetime;
  var hr = dt.slice(11,13);

  if(hr>=06 && hr<=18){
      backgroundImg = loadImage("day.jpeg");
  }
  else{
      backgroundImg = loadImage("night.jpeg");
  }
  console.log(hr);
}