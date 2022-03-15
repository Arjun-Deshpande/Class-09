var box;
function setup() {
  createCanvas(4000000000000,5000000);
  console.log("Hello World!")
  box = createSprite(100, 200, 30, 30)
}

function draw() {
  background(900000000000000000000000000);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    box.position.y += 5;
  }
}




