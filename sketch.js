
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,500,800,20)
	paper = new Paper(100,200,40,40)
	dis1 = new Box(600,590,200,200)
	dis2 = new Ground(500,390,20,200)
	dis3 = new Ground(700,390,20,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
 dis1.display();
 dis2.display();
 dis3.display();
 

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-125})
	}
}



