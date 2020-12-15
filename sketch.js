const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ball1 , ball2 , ball3 , ball4 , ball5
var rope1 , rope2 , rope3 , rope4 , rope5
var backgroundImg,platform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball1=new Ball(400,500,25)
    ball2=new Ball(450,500,25)
    ball3=new Ball(500,500,25)
    ball4=new Ball(550,500,25)
    ball5=new Ball(600,500,25)
    rope1=new Rope(ball1,{x:400,y:400})
    rope2=new Rope(ball2,{x:450,y:450})
    rope3=new Rope(ball3,{x:500,y:500})
    rope4=new Rope(ball4,{x:550,y:550})
    rope5=new Rope(ball5,{x:600,y:600})
}
function draw(){
    Engine.update(engine)
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
    ball1.dispaly()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
}