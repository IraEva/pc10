var sea=addImg(sea.png);
var ship; 

function preload(){
  seaImg = loadImage ("sea.png");
  shipImg1 = loadAnimation ("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  //code to reset the background
  sea.velocityX = -2
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  
}

function draw() {
  background("blue");
 
 
}