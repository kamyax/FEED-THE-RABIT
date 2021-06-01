var garden,rabbit;
var gardenImg,rabbitImg;
var orangeleafImg,redleafImg,carrotImg;
var orangeGroup , redGroup , carrotGroup

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  redleafImg=loadImage("redLeaf.png");
  orangeleafImg=loadImage("orangeLeaf.png");
  carrotImg=loadImage("carrot.png");

}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  
redGroup=new Group()
orangeGroup=new Group()
carrotGroup=new Group()
  
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var select_Sprites=Math.round(random(1,3)) ; 
  
 if(frameCount%80==0){
    if(select_Sprites==1) {
    carrot();
    } else if(select_Sprites==2) {
    redleaf();
    }
     else if (select_Sprites==3) {
    orangeleaf();
      }
}  
  if  (redGroup.isTouching(rabbit) ) { 
       redGroup.destroyEach()
  }
  
  if  (orangeGroup.isTouching(rabbit) ) { 
       orangeGroup.destroyEach()
  }
  
  if  (carrotGroup.isTouching(rabbit) ) { 
       carrotGroup.destroyEach()
  }
  
   drawSprites();
  
} 


function redleaf(){
 
 var redleafs=createSprite(random(50,350),0,10,10); 
 redleafs.velocityY=2;
 redleafs.addImage(redleafImg) ; 
 redleafs.scale=0.05;
 redleafs.lifetime=200;
  redGroup.add(redleafs)
}   

function orangeleaf(){

 var orangeleafs=createSprite(random(50,350),0,10,10); 
orangeleafs.velocityY=2;
orangeleafs.addImage(orangeleafImg) ; 
orangeleafs.scale=0.05; 
orangeleafs.lifetime=200;  
orangeGroup.add(orangeleafs)  
}

function carrot(){

 var carrots=createSprite(random(50,350),0,10,10); 
carrots.velocityY=2;
carrots.addImage(carrotImg) ; 
carrots.scale=0.1; 
carrots.lifetime=200;
carrotGroup.add(carrots)
  }







