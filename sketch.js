var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
spawnApples()
  drawSprites();
}
function spawnApples(){
 console.log(frameCount)
   if(frameCount%60==0){
     apple=createSprite(600,50,50,10)
   apple.velocityY =10
 apple.addImage(appleImg)
 apple.scale = 0.1;
 apple.x =Math.round(random(50,150))
   }
  }