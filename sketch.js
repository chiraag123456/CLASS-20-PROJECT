function preload () {

  bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png");
eat = loadAnimation("eat1.png"); 
drink = loadAnimation("drink1.png");
move = loadAnimation("move.png");
bath = loadAnimation("bath2.png");

}



function setup() {
  createCanvas(600,400)

  
  


  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(bg);
  drawSprites();

  text("INSTRUCTIONS:", 60,55)
  text("UP ARROW = BRUSHING", 60,70)
  text("DOWN ARROW = GYMMING", 60,85)
  text("LEFT ARROW = EATING", 60,100)
  text("RIGHT ARROW = BATHING", 60,115)
  text("M KEY = MOVING", 60,130)
  

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    } 

    if (keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gymming",gym);
      astronaut.changeAnimation("gymming");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      } 

      if (keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating",eat);
        astronaut.changeAnimation("eating");
        astronaut.y = 200;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
        } 

      if (keyDown("RIGHT_ARROW")){
        astronaut.addAnimation("bathing",bath);
        astronaut.changeAnimation("bathing");
        astronaut.y = 200;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
          } 

          if (keyDown("M")){
            astronaut.addAnimation("moving",move);
            astronaut.changeAnimation("moving");
            astronaut.y = 200;
            astronaut.velocityX = 0;
            astronaut.velocityY = 0;
              } 
}

