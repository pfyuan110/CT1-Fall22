class Bubble{  
    constructor(_x, _y){
      this.position = createVector(_x, _y)
      this.radius = random(5, 10)
    }
    
    display(){
      noStroke()
      fill(_color, 40, 90)
      circle(this.position.x, this.position.y, this.radius * 2)
    }
    
    inHover(){
      if(abs(this.position.x - mouseX) <= this.radius && abs(this.position.y - mouseY) <= this.radius){
        return true
      } else {return false}
    }
  }