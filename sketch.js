var sun;
var planet;

function setup() {
  createCanvas(800,400);
 sun = createSprite(450, 200, 150, 150);
 planet = createSprite(600,200,50,50);
}

function draw() {
  background(0); 
  
  if(isTouching(sun,planet)){
    planet.destroy();
  }

  if(frameCount % 60 === 0){
    sun.height = sun.height+10;
    sun.width = sun.width+10;
  }

  drawSprites();
}
function isTouching(object1,object2) {

  if(object1.x-object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2 &&
     object1.y-object2.y<object1.height/2+object2.height/2 &&
    object2.y-object1.y<object2 .height/2+object1.height/2){
    return true ;
  }
  else{
    return false ;
  }

}