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

var levelOne = function(){
  makePlatforms();
  makePlatforms();
  makeOrangePlatforms();
  
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

//
var collideWith = function(xv, yv, platforms) {
    for (var each in platforms) {
        var p = platforms[each];
        // Checks for Collision
        if( positionY + ballSize > p.y &&
            positionY < p.y + p.height &&
            positionX + ballSize > p.x &&
            positionX < p.x + p.width)
        { // FROM
        if(yv>0) { // BOTTOM
            velocityY = 0;
            jumping = false;
            positionY = p.y-ballSize;
        }
        if(yv<0) { // TOP
            velocityY = 0;
            jumping = true;
            positionY = p.y+p.height;
        }
        if(xv>0) { // RIGHT
            velocityX = 0;
            positionX = p.x-ballSize;
        }
        if(xv<0) { // LEFT
            velocityX = 0;
            positionX = p.x+p.width;
        }
    }
    }
};
//platform array
var platforms = [];
//creates the platforms functions
var makePlatforms = function(x,y,width,height,color){
  platforms.push({
    x: x, y: y,
    width: width, height: height,
    color: color
  });
};
//draws the platforms
var drawPlatforms = function(){
  for(var each in platforms){
    fill(platforms[each].color);
    rect(platforms[each].x, platforms[each].y, platforms[each].width, platforms[each].height);
  }
};
//orangePlatforms empty array
var orangePlatforms = [];
//makes orangePlatforms
var makeOrangePlatforms = function(x,y,width,height,color){
  orangePlatforms.push({
    x: x, y: y,
    width: width, height: height,
    color: color
  });
};


var drawOrangePlatforms = function(){
  for(var each in platforms){
    fill(orangePlatforms[each].color);
    rect(orangePlatforms[each].x, orangePlatforms[each].y, orangePlatforms[each].width, orangePlatforms[each].height);
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
};

var player = function(){
  noStroke();
  fill()
};
var deathScreen = function(){
  jumping = false;
  velocityX = 0;
  velocityY = 0;
  rect()
};
var death = function(){
  if(collideWith = orangePlatforms)
};
