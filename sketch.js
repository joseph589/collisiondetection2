var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(600,600); 

  // creates 2 sprites and adds color to them
  fixedRect = createSprite(300,300,40,100);
  movingRect = createSprite(100,100,100,50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  
  gameObject1 = createSprite(50,50,50,50);
  gameObject2= createSprite(150,50,50,50)
  gameObject3 = createSprite(250,50,50,50)
  gameObject4 = createSprite(350,50,50,50)

  gameObject1.shapeColor="orange";
  gameObject2.shapeColor="orange";
  gameObject3.shapeColor="orange";
  gameObject4.shapeColor="orange";

}

function draw() {
  background(0);  
  //makes the movingRect move using mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // print on the console sum of the hakf of the width of the rects
  console.log(movingRect.width/2+fixedRect.width/2);
  //difference of the x positions of the rects
  console.log(movingRect.x-fixedRect.x);

  if(isTouching(movingRect,gameObject3)){
    gameObject3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
else{
  gameObject3.shapeColor = "orange";
  movingRect.shapeColor = "green";
}
  drawSprites();
}

function isTouching(obj1,obj2){
  //collision detection
  if(obj1.x-obj2.x <= obj1.width/2+obj2.width/2
    && obj2.x-obj1.x <= obj1.width/2+obj2.width/2 
    && obj2.y-obj1.y <= obj1.height/2+obj2.height/2
    && obj1.y-obj2.y <= obj1.height/2+obj2.height/2
    ){ 
    
    return true;
  }
  else{
   
    return false;
  }
}