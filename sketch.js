
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  bobDiameter = 40;

  startBobPositionX = width/2;
  startBobPositionY = height/4 + 200;

  bob1 = new Bob(startBobPositionX - bobDiameter*2 ,startBobPositionY,bobDiameter);
  bob2 = new Bob(startBobPositionX - bobDiameter ,startBobPositionY,bobDiameter);
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4 = new Bob(startBobPositionX + bobDiameter ,startBobPositionY,bobDiameter);
	bob5 = new Bob(startBobPositionX + bobDiameter*2 ,startBobPositionY,bobDiameter);
	
  roof = new Ground(width/2,height/4,300,25);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,height/4);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter,height/4);
	rope3 = new Rope(bob3.body,roof.body,width/2,height/4);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*2,height/4);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,height/4);  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);

  background("lightblue");

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:115});
  }
}