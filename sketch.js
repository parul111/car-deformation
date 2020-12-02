var wall, car;
var speed,weight;

function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  createCanvas(800,400);
  wall=createSprite(600, 200, 50, 100);
  car=createSprite(200,200,50,50);
  car.velocityX=speed
}
if(car.x-wall.x<car.width/2+wall.width/2){

  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  
  if(deformation>180){
    car.shapeColor=red;
  }
  
  if(deformation<180,deformation>100){
    car.shapeColor=green;

  }

  if(deformation<100){
    car.shapeColor=blue;

  }
}

function draw() {
  background("pink");  
  drawSprites();
}