const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
 var canvas= createCanvas(1600,800);
 engine = Engine.create();
 world = engine.world;

roofObject=new Roof(700,100,800,30);

bobObject1=new Bob (500,500,50);
bobObject2=new Bob (600,500,50);
bobObject3=new Bob (700,500,50);
bobObject4=new Bob (800,500,50);
bobObject5=new Bob (900,500,50);

rope1= new Rope (bobObject1.body,roofObject.body,0,0,)
rope2= new Rope (bobObject2.body,roofObject.body,0,0,)
rope3= new Rope(bobObject3.body,roofObject.body,0,0);
rope4= new Rope (bobObject4.body,roofObject.body,0,0,)
rope5= new Rope (bobObject5.body,roofObject.body,0,0,)
}

function draw() {

  background("white");  

  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}
function keyPressed(){


}