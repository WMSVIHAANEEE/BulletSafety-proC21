var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83)
  console.log(speed);
  bullet = createSprite(20, 200, 40, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "White"
  
  
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
  
}

function hasCollided(bullet,wall)
{
 bulletRightEdge = bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true;
 }
 return false;
}


function draw() {
  background("Black");
  if(hasCollided(bullet,wall)){
  
  bullet.velocityX = speed;
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0
    var Damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);
    if(Damage>10){
      wall.shapeColor = color(250,0,0);
    }
    if(Damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
}
