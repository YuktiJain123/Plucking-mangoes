
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	this.boy = loadImage('Plucking mangoes/boy.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,600,800,10);
	tree= new tree(400,200,100,20);
	stone= new stone(200,200,10,20);

	Engine.run(engine);
  
}


function draw() {
	image(this.boy,210,20);
	rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



