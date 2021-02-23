var balloon,balloonimg;
var Postion,database
var background_Img;
function preload(){
  balloonimg = loadAnimation("Hot Air Balloon-02.png","Hot Air Balloon-03.png","Hot Air Balloon-04.png");
  background_Img = loadImage("Hot Air Balloon-01.png");
}
function setup() {
  database = firebase.database();

  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
balloon.addAnimation(balloonimg);
  var balloonPosition=database . ref( 'balloon/height');

  balloonPosition. on("value", readPosition, showError);
  
}

function draw() {
  background(background_Img); 
  if (keyDown (LEFT_ARROW) ) {
    balloon.x = balloon.x -10;
    }
    else if(keyDown (RIGHT_ARROW) ) {
    balloon.x = balloon. x +10;
    
    }
    else if(keyDown (UP_ARROW) ) {
    balloon.y = balloon.y -10;
    
    }
    else if(keyDown (DOWN_ARROW) ) {
    balloon.y = balloon.y +10;
    }     
  drawSprites();
}
function updateHeight(x, y) {
  database. ref(' balloon/height' ) . set({
  'x': height.x + x ,
  "y": height.y + y
  })
}
  function readHeight(data) {
  height = data. val( );
  balloon.x = height.x;
  balloon.y = height.y;
  }
  function showError(){
  console. log("Error in writing to the database");
  }