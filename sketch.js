let snake;
let rez = 10;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez)
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation(){
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x , y);
  
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake.setDir(-1,0);
  }else if(keyCode === RIGHT_ARROW){
    snake.setDir(1,0);
  }else if(keyCode === DOWN_ARROW){
    snake.setDir(0,1);
  }else if(keyCode === UP_ARROW){
    snake.setDir(0,-1);
  }
}

function draw() {
  scale(rez)
  background(220);
  if(snake.eat(food)){
    foodLocation();
  }
  snake.update();
  snake.show()
  noStroke()
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}