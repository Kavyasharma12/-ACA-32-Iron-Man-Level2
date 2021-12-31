let bg, bgImg;
let ironMan, ironImg;
let ground;
let stoneGroup, stoneImg;


function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironImg = loadImage("./images/iron.png");
  stoneImg = loadImage("./images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg);
  bg.scale = 2;
  bg.velocityY = 6;

  ironMan = createSprite(150,350,40,60);
  ironMan.addImage(ironImg);
  ironMan.scale = 0.4;

  ground =createSprite(200,585,150,5);
  ground.visible =false;

  stoneGroup = new Group();
}

function draw() {
  
  if (bg.y > 300){
    bg.y=bg.height/4;
  }

  if(ironMan.x<200){
    ironMan.x=200;
  }

  if(ironMan.y<50){
    ironMan.y=50;
  }

  background("black")
  if(keyDown("up")){
    ironMan.velocityY=-16;
  } 
  if(keyDown("left")){
    ironMan.x=ironMan.x-10;
  } 
  if(keyDown("right")){
    ironMan.x=ironMan.x+10;
  } 
  ironMan.velocityY = ironMan.velocityY +0.5;
  ironMan.collide(ground);

  generateStones();
  
  for(let i = 0 ; i< (stoneGroup).length ;i++){
    let temp = (stoneGroup).get(i) ;
    
    if (temp.isTouching(ironMan)) {
       ironMan.collide(temp);
      }     
    }
    
  drawSprites();
   
}

function generateStones() {
  if (frameCount % 70 === 0) {
    let stone = createSprite(1200,120,40,10);
    stone.x = random(50,1000);
    stone.addImage(stoneImg);
    // stone.scale = 0.5;
    stone.velocityY = 5;
    
    stone.lifetime =250;
    stoneGroup.add(stone);
  }
}