function setup() {
  createCanvas(windowWidth-(windowWidth/100), windowHeight-(windowHeight/50));
  x1=random(100,windowWidth-150)
  y1=random(50,windowHeight-100)
  w=100
  h=50
  w1=200
  h1=100
}
x=100
y=200
function draw() {
    strokeWeight(0)
    background(255)
    if (keyIsDown(LEFT_ARROW) === true) {
        x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        x += 5;
    }
    if (keyIsDown(UP_ARROW) === true) {
        y -= 5;
    }
    if (keyIsDown(DOWN_ARROW) === true) {
        y += 5;
    }
    if(x<-37.5){
        x=windowWidth-(windowWidth/100)
    }
    if(x>windowWidth-(windowWidth/100)+37.5){
        x=0
    }
    if(y<-37.5){
        y=windowHeight-(windowHeight/50)
    }
    if(y>windowHeight-(windowHeight/50)+37.5){
        y=0
    }
  strokeWeight(0)
  rect(x, y, w, h);
  rectMode(CENTER)
  stroke(0,255,0)
  if(
    x - w/2 <x1 + w1/2  &&
    x + w/2 >x1 - w1/2  &&
    y - h/2 <y1 + h1/2  &&
    y + h/2 >y1 - h1/2
  ){
    fill(255,0,0)
  }
  else{
    fill(0,255,0)
  }
  rect(x1,y1,w1,h1);
}
