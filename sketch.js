function setup() {
  createCanvas(1200,1200);
movingRect = createSprite(400, 100, 20, 20)
movingRect.velocityY = 5
movingRect.shapeColor = "blue"
fixedRect = createSprite(400, 800, 20, 20)
fixedRect.velocityY = -5
fixedRect.shapeColor = "green"
}

function draw() {

  background(0);

if(Collide(movingRect, fixedRect)){
 movingRect.shapeColor = "yellow" 
 fixedRect.shapeColor = "yellow"
}
bounceOff(movingRect, fixedRect)

  drawSprites();
}

