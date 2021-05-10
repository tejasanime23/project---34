const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(880, 100, 70, 70);
  box3 = new Box(880, 100, 70, 70);
  box4 = new Box(880, 100, 70, 70);
  box5 = new Box(670,100,70,70);
  box6 = new Box(670,100,70,70);
  box7 = new Box(670,100,70,70);
  box8 = new Box(670,100,70,70);
  box9 = new Box(670,100,70,70);
  box10 = new Box(670,100,70,70);
  box11 = new Box(670,100,70,70);
  box12 = new Box(600,100,70,70);
  box13 = new Box(600,100,70,70);
  box14 = new Box(600,100,70,70);
  box15 = new Box(600,100,70,70);
  box16 = new Box(740,100,70,70);
  box17 = new Box(740,100,70,70);
  box18 = new Box(740,100,70,70);
  box19 = new Box(740,100,70,70);
  box20 = new Box(740,100,70,70);
  box21 = new Box(740,100,70,70);
  box22 = new Box(810,100,70,70);
  box23 = new Box(810,100,70,70);
  box24 = new Box(810,100,70,70);
  box25 = new Box(810,100,70,70);
  box26 = new Box(810,100,70,70);
  box27= new Box(810,100,70,70);
  box28 = new Box(810,100,70,70);
  box29 = new Box(810,100,70,70);
  box30 = new Box(880, 100, 70, 70);
  box31 = new Box(880, 100, 70, 70);
  box32 = new Box(880, 100, 70, 70);
  box33 = new Box(880, 100, 70, 70);
  box34 = new Box(880, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display(); 
  box30.display(); 
  box31.display(); 
  box32.display(); 
  box33.display(); 
  box34.display(); 

}

function mouseDragged(){
   Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
