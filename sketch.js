
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	bob1 = new bob(300,400,25,"red")
	bob2 = new bob(350,400,25,"green")
	bob3 = new bob(400,400,25,"yellow")
	bob4 = new bob(450,400,25,"blue")
	bob5 = new bob(500,400,25,"orange")
	rope1 = new rope(bob1.body,300,200)
	rope2 = new rope(bob2.body,350,200)
	rope3 = new rope(bob3.body,400,200)
	rope4 = new rope(bob4.body,450,200)
	rope5 = new rope(bob5.body,500,200)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope1.display();
  bob1.display();
  strokeWeight(3);
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function mouseDragged() {
	Matter.Body.setPosition(bob1.body,{x:mouseX ,y: mouseY});
	//Matter.Body.setPosition(bob5.body,{x:mouseX ,y: mouseY})

}

