function Roomba(argX, argY) {
  this.location = createVector(argX, argY);
  this.targets = [];
  this.destination = createVector();
  this.maxspeed = 1;
  this.size = 25;

  this.draw = function() {
    stroke(255);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
 

 
  this.move = function() {
    if (this.targets.length != 0) {
      if (abs(this.location.x - this.targets[0].x) < 5 &&
          abs(this.location.y - this.targets[0].y) < 5 ) {
        this.targets.splice(0, 1);
      }
    }
    if (this.targets.length != 0) {
      this.destination = createVector(this.targets[0].x-this.location.x, this.targets[0].y-this.location.y);
      this.destination.mult(0.1);
      this.location.add(this.destination);
    }
  }
}
var r;
function setup() {
  createCanvas(800, 600);
  r = new Roomba(width/2, height/2);
}
 
function draw() {
  background(51);
  r.draw();
  r.move();
}

function mousePressed() {
  r.targets.push(createVector(mouseX, mouseY));
}