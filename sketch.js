var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	
	helicopterSprite=createSprite(400, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	packageSprite=createSprite(400, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=510;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	 
	

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);


  background(150);
 
  //packageSprite.x= packageBody.position.x 
//packageSprite.y= packageBody.position.y 


if(packageSprite.x=400 ){
packageSprite.x=helicopterSprite.x;
}

    packageSprite.collide(boxBase);
	packageSprite.collide(boxleftSprite);
	packageSprite.collide(boxrightSprite);

	packageSprite.bounceOff(boxleftSprite);
	packageSprite.bounceOff(boxrightSprite);





 if(keyDown("enter")){
	packageSprite.velocityY=3
	packageSprite.visible=true
	packageSprite.x=400;
}
 else if(packageSprite.collide(boxBase)){
	packageSprite.x=400;
	packageSprite.y=500;
 }
 else if(keyDown("left")){
	helicopterSprite.x=helicopterSprite.x-5
    packageSprite.x=helicopterSprite.x;
}
 else if(keyDown("right")){
	helicopterSprite.x=helicopterSprite.x+5
	packageSprite.x=helicopterSprite.x;
}


 if(packageSprite.isTouching(boxBase)){
	helicopterSprite.x=400;
	
}



  drawSprites(); 
}
