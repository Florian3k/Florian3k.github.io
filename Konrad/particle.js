function Particle(x, y, hue, speed, firework) {
  this.hue = hue;
  this.pos = createVector(x, y);
  this.lifespan = 100;
  this.firework = firework;
  this.vel = speed;
  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.76);
      this.lifespan -= 1;
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
