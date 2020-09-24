
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup;
var background, backgroundImg;
var score = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 backgroundImg = loadImage("background.jpg");
}



function setup() {
  createCanvas(600,600);

  background = createSprite(300,300,600,600);
  background.addImage(backgroundImg);
  background.scale = 0.56;
  
  monkey = createSprite(80,460,20,20);
  monkey.addAnimation("running", monkey_running);
monkey.scale = 0.25;
  
  ground = createSprite(550,550,1200,20);
ground.velocityX = -4;
  ground.x = ground.width /2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  stroke("black");
  textSize(30);
  fill("black");
  
}


function draw() {
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
  monkey.collide(ground);
  
   if(keyDown("space")&& monkey.y >= 460) {
        monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  if (foodGroup.isTouching(monkey)){
   score = score+1; 
  }
  
  if (obstacleGroup.isTouching(monkey)){
   score = 0; 
  }
  
  Spawnfood();
  Spawnobstacles();
  
  drawSprites();
  
  text("Score: "+score,80,50);
}

function Spawnfood(){
if (frameCount % 80 === 0){
 banana = createSprite(590,460,20,20);
  banana.velocityX = -4;
  banana.y = Math.round(random(290,430));
  banana.addImage(bananaImage);
  banana.scale = 0.2;
  banana.lifetime = 150;
  foodGroup.add(banana);
}
}

function Spawnobstacles(){
if (frameCount % 300 === 0){
 obstacle = createSprite(590,510,20,20);
  obstacle.velocityX = -4;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle);
}
}




