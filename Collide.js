var fixedRect, movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor= "green";
  fixedRect.debug = true;

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor= "green";
  movingRect.debug = true;
}

function draw() {
  background(0);
  
  object1.x=World.mouseX;
  object1.y=World.mouseY;

Collide(movingRect, fixedRect)

  drawSprites();
}

