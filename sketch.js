
var bg, backgroundImg; ironman; ground; brickGroup; brickImage;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg= loadImage("images/iron.png");
  brickImage=loadImage("images/stone.png");
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  ironman= createSprite(200,505,20,50);
  ironman.addImage(ironmanImg);
  ironman.scale=0.3;
  ground= createSprite(200,585,1000,10);
  ground.visible = false;
  brickGroup= new Group();

}

function draw() {
  bg.velocityY = 4;
    if (bg.y > 500){
      bg.y=bg.width/4;
    }
  if (keyDown("up")){
    ironman.velocityY=-10;
  }
  
  if (keyDown("right")){
    ironman.x+=5;
    
  }
  ironman.velocityY=ironman.velocityY+0.5;

  ironman.collide(ground) ;

generateBricks()
for (var i=0; i<(brickGroup).length; i++){
var temp=brickGroup.get (i);
 if (temp.isTouching(ironman))
 ironman.collide(temp);
}
  
 
    
    drawSprites();
}
function generateBricks(){
  if (frameCount % 50===0){
      var brick =createSprite(1200,120,40,10);
      brick.x= random(50,450);
      brick.addImage(brickImage);
      brick.scale=0.5;
      brick.velocityY= -5;
      
      brick.lifetime =1000;
      brickGroup.add(brick);
  }
}
