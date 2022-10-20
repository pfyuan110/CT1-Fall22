let counter = 0
  
function setup() {
  let myCanvas = createCanvas(700, 700)
  myCanvas.parent('sketch_holder')
  
  angleMode(DEGREES)
  colorMode(HSB,100,100,100,100)
  setInterval(timeIt, 10)
}

function timeIt(){
  counter ++
}


function draw() {
  background(10)
  noFill()
    
  translate(width/2, height/2)

  //lines
  beginShape()
  for (let i = 0; i < 360; i++){
    let r1Min = map(sin(frameCount / 2), -1, 1, 100, 150)
    let r1Max = map(sin(frameCount), -1, 1, 100, 0)
    let r2Min = map(sin(frameCount), -1, 1, 50, 100)
    let r2Max = map(sin(frameCount * 2), -1, 1, 0, 150)
    
    
    let r1 = map(sin(i * 3), -1, 1, r1Min, r1Max)
    let r2 = map(sin(i * 7 + 90), -1, 1, r2Min, r2Max)
    let r = r1 + r2
    let x = r * cos(i)
    let y = r * sin(i)
    
    stroke(0,0,100,80)
    strokeWeight(1)
    vertex(x,y)
    vertex(x/4,y/4)
  }
  endShape(CLOSE)
  
  //points
  for (let i = 0; i < 360; i++){
    let r1Min = map(sin(counter), -1, 1, 100, 150)
    let r1Max = map(sin(counter * 2), -1, 1, 100, 0)
    let r2Min = map(sin(counter / 2), -1, 1, 50, 100)
    let r2Max = map(sin(counter), -1, 1, 0, 150)
    
    
    let r1 = map(sin(i * 3), -1, 1, r1Min, r1Max)
    let r2 = map(sin(i * 7 + 90), -1, 1, r2Min, r2Max)
    let r = r1 + r2
    let x = r * cos(i)
    let y = r * sin(i)
        
    stroke(noise(i)*100, 90, 90)
    strokeWeight(3)
    point(x,y)
    point(x/4,y/4)
  }
}