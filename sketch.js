var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;

function preload(){
backgroundS=loadImage("bg.jpeg")
trains=loadImage("train.gif")
marios=loadImage("mario.png")
ground=loadImage("images.png")
witch=loadImage("wizard.png")
plant=loadImage("mushroo.png")
tube=loadImage("pipe2.png")
bom=loadImage("blasts.png")
start=loadImage("k.png")

}

function setup() {
  
 createCanvas(1000,600);
 
Back=createSprite(500,300,1000,600);
Back.addImage(backgroundS);
Back.scale=3;

obstaclesGroup=new Group();
player=createSprite(100,400,20,20)
player.addImage(marios);
player.scale=0.5;
player.setCollider("rectangle",0,0,5,player.height);
player.debug=false;
base= createSprite(500,590,1000,10);
//base.addImage(ground);
//base.scale=2
 base.visible = false;
 
 
}

function draw() {
 background("BLUE")
 

if(gameState===PLAY){
 Back.velocityX=-5;
 Back.velocityX = -(4 + 3* score/100)

   score = score + Math.round(getFrameRate()/50);
 if(Back.x < 350){
    Back.x=600;
  }
  if(keyDown("space")&& player.y >= 240) {
    player.velocityY = -10;
    
  }
 // restart.visible=false
  restart = createSprite(500,300);
  restart.addImage(start)
  restart.scale=0.5;
   restart.visible=false
   
}

if(obstaclesGroup.isTouching(player)){

gameState=END;
restart.visible=true
obstaclesGroup.setVelocityXEach(0);
}




player.velocityY = player.velocityY + 0.8
player.collide(base);
   
createObstacles();
 drawSprites();
 fill("yellow")
 textSize(20);
 stroke("blue")
 strokeWeight(10)
 text("Points: "+score, 100,50);

 if(gameState===END){
  player.addImage(bom);
  Back.velocityX=0;
  obstaclesGroup.destroyEach();
  if(mousePressedOver(restart)) {
    gameState=PLAY;
    score=0
    restart.visible=false;
    player.addImage(marios)
   
    
  }
 
  fill("red")
 textSize(20);
 stroke("blue")
 strokeWeight(10)
  text("GAME OVER",300,50)
 }

 
}
function createObstacles(){
  var Random =Math.round(random(1,3))
if(frameCount%50===0){

//console.log(Random);
  car=createSprite(1100,550 ,20,20);
 obstaclesGroup.add(car);
  //car.scale=0.1;
  car.velocityX=-5;
  //console.log(frameCount);
  if(Random===1){
    car.addImage(trains);
    car.scale=0.1;
  }
  else if(Random===2){
  car.addImage(tube)
  car.scale=0.7
  car.setCollider("rectangle",0,0,30,car.height)
  car.debug=false;
  }
  else if(Random===3){
    car.addImage(plant)
    car.scale=0.5

    }
    /*else if(Random===4){
      car.addImage(witch)
      }*/


}



}
