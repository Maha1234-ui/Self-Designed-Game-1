var bgImg, Bg;
var playerImg, player;
var edges;


function preload(){
  
bgImg = loadImage("bg.jpg");
playerImg = loadImage("player.png");  
  
  
  
  
  
  
  
}

function setup(){
createCanvas(1000,800);
  
Bg = createSprite(500,400,800,800);
Bg.addImage(bgImg);
Bg.scale = 2.5;
Bg.velocityY = 5;


player = createSprite(515,600,20,20);
player.addImage(playerImg);
player.scale = 0.4;

edges = createEdgeSprites();











}

function draw(){
  

if(keyDown("RIGHT_ARROW")){
   player.x = player.x+5;

}

if(keyDown("LEFT_ARROW")){
   player.x = player.x-5;

}

player.bounceOff(edges);



  
  
  
  drawSprites();
}