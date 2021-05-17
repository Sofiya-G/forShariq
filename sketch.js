      var tom, jerry,bat,ball;

function setup() {
  createCanvas(1200,800);
  tom = createSprite(600, 400, 50, 80);
  tom.shapeColor = "green";
  tom.debug = true;
  jerry = createSprite(400,200,80,30);
  jerry.shapeColor = "green";
  jerry.debug = true;


  //---------------------------
bat = createSprite(200,400,80,50);
bat.shapeColor = "white";
bat.velocityX = 2;
ball = createSprite(400,400,50,80);
ball.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  jerry.x = World.mouseX;
  jerry.y = World.mouseY;

  if(ISTOUCH (jerry, tom)){
    tom.shapeColor = "black";
    jerry.shapeColor = "red";

  }
  else{
    tom.shapeColor = "green";
    jerry.shapeColor = "green";
  }

  if(ISTOUCH (bat,ball)){
  bat.shapeColor = "orange";
  ball.shapeColor = "yellow";
bat.velocityX = -2;
  }
else{
 bat.shapeColor = "white";
 ball.shapeColor = "white";
}
  // ISTOUCH()
  
  drawSprites();
}

//tom = fixed     jerry = moving
function ISTOUCH (movingRect, fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) 
    {
        return true;
}
else {
         return false;
}
}
