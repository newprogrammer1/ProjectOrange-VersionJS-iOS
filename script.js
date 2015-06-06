//Button Array & Buttons
var buttons = [];
var leftButton = function(){
  rect(374,379,21,15);
};
var rightButton = function(){
  rect(326,379,21,15);
};
var upButton = function(){
  rect(358,379,15,15);
};

//player Variables
var gravity = 0.4;
var positionX = 100;
var positionY = 0;
var velocityX = 0;
var velocityY = 0;
var maxFallSpeed = 8:
var ballSize = 18;
var jumping = true;
//platform array
var platforms = [];
//creates the platforms functions
var makePlatforms = function(x,y,width,height,color){
  platforms.push({
    x: x, y: y,
    width: width, height: height,
    color: color
  });
}
//draws the platforms
var drawPlatforms = function(){
  for(var each in platforms){
    fill(platforms[each].color)
    rect(platforms[each].x, platforms[each].y, platforms[each].width, platforms[each].height);
  }
};


//Allows Player to move with controls
var movePlayer = function(){
  if(mousePressed && mouseX <=, mouseX >=, mouseY <=, mouseY >=){velocityX = 3;}
  if(mousePressed && mouseX <=, mouseX >=, mouseY <=, mouseY >=){velocityX = -3;}
  if(mousePressed && mouseX <=, mouseX >=, mouseY <=, mouseY >=, !jumping){velocityY = -8:}
  velocityY += gravity;

if(velocityY > maxFallSpeed) {
    velocityY = maxFallSpeed; }
    
positionX += velocityX;

collideWith(velocityX, 0, platforms);
    
positionY += velocityY;

jumping = true;
collideWith(0, velocityY, platforms);
}

var player = function(){
  noStroke();
  fill()
};
