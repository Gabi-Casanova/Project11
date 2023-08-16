var path, boy, coin, leftBoundary,rightBoundary;
var pathImg, pathImg2, pathImg3, boyImg, coinImg;
var scalePathImg = 1.2;
var scalePathImg2 = 0.2;
var scalePathImg3 = 0.2;

var coinsGroup;

function preload(){
  pathImg = loadImage("path.png");
  pathImg2 = loadImage("path-2.jpg");
  pathImg3 = loadImage("path-3.jpg");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);
    
  coinsGroup = new Group();

  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = scalePathImg;

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    
  //creating left-right boundaries
  leftBoundary=createSprite(0,0,65,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,65,800);
  rightBoundary.visible = false;

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to change backgrounds
  if (keyDown("1")){
    path.addImage(pathImg);
    path.scale = scalePathImg;
  }

  if (keyDown("2")){
    path.addImage(pathImg2);
    path.scale = scalePathImg2;
  }

  if (keyDown("3")){
    path.addImage(pathImg3);
    path.scale = scalePathImg3;
  }

  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if (boy.collide(coinsGroup)){
    coinsGroup.get(0).destroy();
  }

  if (frameCount % 100 === 0) {
  coinDrop();
  }

  drawSprites();
  
  //creating info text
  fill(200,200,200);
  textSize(29);
  text("Press 1, 2, or 3 !!!", 100, 200);
}

function coinDrop() {
  var coin = createSprite(random(50, 350), -20);
  coin.addImage(coinImg);
  coin.velocityY = 4;
  coin.scale = 0.5;
  coinsGroup.add(coin);
  }