function Bird(){
    this.y = height/2
    this.x = 64
    
    this.gravity = 0.6
    this.lift = 1.2
    this.velocity = 0
    
    this.show = function(){
      stroke(255,255,255)
      fill(0,0,255)
      circle(this.x, this.y, 20)
    }
    
    this.update = function(){
      this.velocity += this.gravity
      this.velocity *= 0.9
      this.y += this.velocity
      
      if(this.y > height){
        this.y = height
        this.velocity = 0
      }
      
      if(this.y < 0){
        this.y = 0
        this.velocity = 0
      }
    }
    
    this.up = function(){
      this.velocity += -this.lift
    }
  }