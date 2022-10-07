let posX, posY
let velX, velY
let cRadius = 40


function setup() {
  createCanvas(800, 600)
  
  posX = width/2
  posY = height/2
  
  velX = -2.5
  velY = 3.2
}

function draw() {
  background(220,220,220,70);   //it create every frame and cover the others
  
  posX += velX
  posY += velY
  
  if(posX <= 0+cRadius || posX >= width-cRadius){
    velX *= -1
  }
  
  if(posY >= height-cRadius || posY <= 0+cRadius){
    velY *= -1
  }
   
  fill(125,180,100)
  strokeWeight(2)
  circle(posX, posY, cRadius*2)
  

}