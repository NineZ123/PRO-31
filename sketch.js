const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(400,790,800,20)

  for(var k = 0;k <=width; k=k+80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

  }

  for (var j = 75; j <=width; j=j+50) 
  {
     plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

  for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



  }


function draw() {
  Engine.update(engine);
  background("black");  
  
  
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  drawSprites();


}