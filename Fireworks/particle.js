function Particle(x, y, hue, firework) {
  this.hue = hue;
  this.pos = createVector(x, y);
  this.lifespan = 255;
  this.firework = firework;
  //this.vel = createVector(0, -12);
  if (this.firework) {
    this.vel = createVector(random(-3,3), random(-22,-11));
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2,7));
  }

  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
      if (this.lifespan < 125) {
        this.lifespan -= 4;
      }
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    if (this.firework) {
      strokeWeight(3);
    } else {
      strokeWeight(2);
    }
    stroke((hue + random(-40, 40)+360)%360,
      255 + random(-10, 10),
      this.lifespan + random(-10, 10) );
    point(this.pos.x, this.pos.y);
  }

}
