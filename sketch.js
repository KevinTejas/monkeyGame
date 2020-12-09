
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var survivalTime=0;
var gameState = "PLAY";
var PLAY=1;
var END=0;
var game,gameOverImage;
var r,rImage;



function preload(){
  
  rImage=loadImage("download (2).jpg")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  gameOverImage=loadImage("download (3).png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

  monkey=createSprite(30,360,30,30)
ground=createSprite(200,365,400,20)  
  //add animation and scale it
  monkey.addAnimation("running",monkey_running)
  monkey.scale= 0.1
  
  game=createSprite(200,130)
  game.addImage(gameOverImage);
  game.scale=0.5;
  
 
 
  r=createSprite(200,200)
  r.addImage(rImage);
  r.scale=0.2;
 // monkey.setCollider("rectangle",0,0,30,30);
 // monkey.debug = true
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background("lightBlue")
  
  
  if(gameState==="PLAY"){
    if (ground.x < 0){
      ground.x = ground.width/2;
  }
    game.visible=false;
    r.visible=false;
     obstacles();
  bananas();
    
    
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
   monkey.velocityY =  monkey.velocityY + 0.9 
   monkey.collide(ground);
 if(monkey.isTouching(FoodGroup)){
   score=score+1
 }
  
  if(monkey.isTouching(obstacleGroup)){
    gameState = "END"
   survivalTime=score+1
 }
  }
  if(gameState==="END"){
    game.visible=true;
  r.visible=true;
   //survivalTime=survivalTime+1
      monkey.velocityY=0;
      obstacleGroup.velocityX=0;
      FoodGroup.velocityX=0
      obstacleGroup.destroyEach();
     FoodGroup.destroyEach();
    //  obstacle.velocityX=0;
     // banana.velocityX=0;
    monkey.destroy()
    ground.velocityX = 0
 }
    
  
    
  
 
  drawSprites();
  
  text("score:"+score,30,30)
  text("survivalTime:"+survivalTime,30,45)
}

function bananas(){
 if(frameCount%80===0){
   banana=createSprite(400,220,20,20) 
   banana.addImage(bananaImage)
   banana.scale=0.1
 b=Math.round(random(10,60)) 
 banana.velocityX=-6;
 banana.Lifetime=100;
   FoodGroup.add(banana)
   
 }
   }

   
 
   function obstacles(){
 if(frameCount%150===0){
   obstacle=createSprite(400,330,20,20) 
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.2
 b=Math.round(random(15,80)) 
 obstacle.velocityX=-3;
 obstacle.Lifetime=100;
   obstacleGroup.add(obstacle)
   
 }
   }