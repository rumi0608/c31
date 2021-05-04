const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionsHeight=300;

var particles = [];
var plinkos = [];
var divisions = [];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world; 

  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(100);  


for (var k = 0; k <=innerWidth; k = k + 80){
  divisions.push(new Division(k,height-divisionsHeight/2, 10, divisionsHeight));
}

for (var j = 40; <=width;j=j + 50){
  plinkos.push(new plinko(j,75))
}
for (var j = 15; <=width;j=j + 50){
  plinkos.push(new plinko(j,175))
}

  ground.display();
  drawSprites();
}