class Box{
  //this is the attributes part that goes in setup
  constructor(){
    this.x = 200
    this.y = 150
    this.width = 50
    this.height = 70
  }

  //this is the functions part of the class that goes in draw
  display(){
    rect(this.x, this.y, this.width, this.height)
  }

  speed(v){
    this.x+=v
  }

}

