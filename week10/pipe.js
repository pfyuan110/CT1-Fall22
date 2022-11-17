function Pipe(){
    this.top = random(height/2)
    this.bottom = random(height/2)
    this.x = width
    this.w = 30
    this.speed = 5
    
    this.show = function(){
      stroke(0,0,0)
      fill(255)
      rect(this.x, 0, this.w, this.top)
      rect(this.x, height-this.bottom, this.w, this.bottom)
    }
    
    this.update = function(){
      this.x -= this.speed
    }
    
    this.offscreen = function(){
      if(this.x < -this.w){
        return true
      } else {return false}
    }
    
    this.hits = function(bird){
      if (nose_y < this.top || nose_y > height - this.bottom){
        if (nose_x > this.x && nose_x < this.x + this.w){
          return true
        }
      } else {return false}
    }
    
    this.overs = function(bird){
      if (nose_y > this.top || nose_y < height - this.bottom){
        //I think this is not working because nose_x is impossiblly exactly equal to this.x + this.w. How to figure out?
        if (nose_x == this.x + this.w){
          return true
        }
      } else {return false}
    }
    
  }