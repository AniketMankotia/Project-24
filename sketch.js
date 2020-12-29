
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,40);
	ground = new Ground(600,550,width,15);
	dustbin1 = new Dustbin(800,475,20,130);
	dustbin2 = new Dustbin(900,530,200,20);
	dustbin3 = new Dustbin(1000,475,20,130);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}
