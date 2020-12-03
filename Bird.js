class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
  //  this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}
function mouseReleased() {
  //ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  //return false;
  sling.fly();
}