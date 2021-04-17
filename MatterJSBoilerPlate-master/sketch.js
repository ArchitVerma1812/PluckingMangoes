const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Constraint=Matter.Constraint;

var rect;
var ball1,ball2,ball5,ball3,ball4;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rect = createSprite(300,20,350,30)
	ball1 = new Ball(100,500,50);
	ball2 = new Ball(200,500,50);
	ball5 = new Ball(300,500,50);
	ball3 = new Ball(400,500,50);
	ball4 = new Ball(500,500,50);

	roof1 = new roof(300, 150, 600, 50);

	rope1 = new rope(ball1.body,roof1.body,-200,-20)
	rope2 = new rope(ball2.body,roof1.body,-100,-20)
	rope3 = new rope(ball3.body,roof1.body,0,20)
	rope4 = new rope(ball4.body,roof1.body, 100, 20)
	rope5 = new rope(ball5.body,roof1.body, 200, 20)

	Engine.run(engine); 
}

function draw() {
    rectMode(CENTER);
    background(255);
    rect.display()
	ball1.display()
	ball2.display()
	ball5.display()
	ball3.display()
	ball4.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
    drawSprites();
}
function keyPressed(){
	if(keyCode==32){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-20});
  }
}