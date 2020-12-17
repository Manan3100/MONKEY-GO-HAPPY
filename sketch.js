
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 400);    
  
monkey = createSprite(80, 300, 20, 20);  
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;  
  
ground = createSprite(400, 390, 1200, 10);
ground.velocityX=-4;  
ground.x=ground.width/2; 
console.log(ground.x);  
  
//create Obstacle and banana Groups
  obstacleGroup = createGroup();
  bananaGroup = createGroup();  
  
}


function draw() {
background(180);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())   
text("Survival Time:"+ survivalTime, 100, 50);  
  
  ground.velocityX = -4  
  
 //jump when the space key is pressed
if(keyDown("space")&& monkey.y >= 100) {
monkey.velocityY = -12;
    }

//add gravity
monkey.velocityY = monkey.velocityY + 0.8   
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
//stop monkey from falling down
monkey.collide(ground);  
  
//spawn the banana
    spawnBanana();  
  
//spawn obstacle on the ground
    spawnObstacle();
  
  
  
  
drawSprites();  
}

function spawnObstacle(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,360,10,40);
   obstacle.velocityX = -6
obstacle.addImage(obstacleImage);
   
//assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);

 }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
