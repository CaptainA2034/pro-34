const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var bk;



function load(){

  bk = loadImage("Path.png");

  bk = loadAnimation("Path.png");


}
function setup() {
  var canvas = createCanvas(500,500);
 

  engine = Engine.create();
  world = engine.world;

  bk_display =  createSprite(50,20,30,30);
  bk_display.scale = 0.2;
  bk = createSprite(320,50,20,20);
  

  ball = new Ball(width / 2 + 70, height / 2 - 80, 80, 80);
   blower = new Blower(width / 10000 - 69.9, height / 2 + 50, 150, 20);
   blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  

  button.mousePressed(blow);

}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowerMouth.show();
}

function blow() {

  
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.00001, y:0.02});

}

