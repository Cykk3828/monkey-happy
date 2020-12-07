
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score,ground

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  obstacleImage=loadImage("obstacle.png");
  bananaImage=loadImage("banana.png");
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,320,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
 
 
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
background("white")
 
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
   if (frameCount % 80 === 0){
   var banana = createSprite(600,330,10,40);
     
     banana.y=Math.round(random(120,200));
   banana.velocityX = -6;
     banana.scale = 0.1;
    banana.lifetime=300;
    banana.addImage(bananaImage)
     bananaGroup.add(banana);
  }
  
    if (frameCount % 300 === 0){
   var obstacle = createSprite(600,300,10,40);
   obstacle.velocityX = -6
     obstacle.scale = 0.2;
    obstacle.lifetime=300;
    obstacle.addImage(obstacleImage)
      obstacleGroup.add(obstacle);
  }
   if(keyDown("space")) {
        monkey.velocityY = -12;
       
    }
    monkey.velocityY = monkey.velocityY +0.8
  
   monkey.collide(ground);
  survivalTime();
  
    drawSprites();
}
function survivalTime(){
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime ,100,50);
  
}






