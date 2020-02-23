var snake;
var size=20;
var food;
var width;
var height;


function setup() {
  createCanvas(400, 400);
    width = floor(width / size);
  height = floor(height / size);
  frameRate(10);
  snake = new Snake();
  foodLocation();
}
function foodLocation() {
  let x = floor(random(width));
  let y = floor(random(height));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } 
}

function draw() {
   scale(size);
  background(220);
  if(snake.eat(food)){
  foodLocation();
  }
  
   snake.update();
  snake.show();


  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);

}