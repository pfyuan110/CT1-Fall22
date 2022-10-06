let gridStep = 10
let cRadius = gridStep * 0.37

function setup() {
  createCanvas(800, 600)
  colorMode(HSB, width, 100, 100)
}

function draw() {
  background(100,0,100)
  //background('#7db46e')
  
  //showGrid()
  
  strokeWeight(0)      //it should be write before the shape
  for(let x = 0; x < width/gridStep; x++){
    for(let y = 0; y < height/gridStep; y++){
      let posX = x * gridStep + gridStep/2
      let posY = y * gridStep + gridStep/2
      
      posX += random(-2, 2)
      posY += random(-2, 2)
      
      fill(posX, 80, 80)
      circle(posX, posY, cRadius*2)
    }
  }
}

function showGrid() {
  for(let x = 0; x <= width; x += gridStep){
    line(x,0,x,height)
  }
  
  for(let y = 0; y <= height; y += gridStep){
    line(0,y,width,y)
  }
}