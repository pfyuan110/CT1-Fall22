let bubbles = []
let _color,posX,posY


function setup() {
  let myCanvas = createCanvas(700, 700)
  myCanvas.parent('sketch_holder')
  colorMode(HSB, 100, 100, 100, 100)
  background(0, 0, 100)

  bubbles.push(new Bubble(random(0, width), random(0, height)))
  
  setInterval(()=>{
    drawBG()
  }, 5000)
  
  _color = 0
  posX = 0
  posY = 0
}

function drawBG(){
  background(0, 0, 100,30)
}

function draw() {
  stroke(_color, 40, 90, 30)
  noFill()
  
  bezier(posX, posY, 50, mouseX, mouseY, 50, mouseX, mouseY)
  
  bubbles.forEach((b, i) => {
    if (b.inHover()) {
      console.log("in Dot")
      
      bubbles.splice(i, 1)
      
      _color = random(0,100)
      posX = random(0, width)
      posY = random(0, height)
      
      stroke(_color,40,90)
      noFill()
      bubbles.push(new Bubble(posX, posY))
    } else {
      b.display()
      console.log("out Dot")
    }
  })
  
  //console.log(bubbles.length)
}