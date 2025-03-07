var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic:true,
		restitution:0
	}

	box1 = Bodies.rectangle(400,635,200,20, options);
	World.add(world,box1);

	box2 = Bodies.rectangle(300,610,20,100, options);
	World.add(world,box2);

	box3 = Bodies.rectangle(500,610,20,100, options);
	World.add(world, box3);
	 
	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{ restitution:0, isStatic:true});
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  rectMode(CENTER);
  fill("red");
  rect(box1.position.x, box1.position.y+15, 200,20);
  rect(box2.position.x, box2.position.y, 20,100);
  rect(box3.position.x, box3.position.y, 20,100);
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.setStatic (packageBody, false)
	 }
   }
   


