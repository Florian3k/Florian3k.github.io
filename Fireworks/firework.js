function Firework() {
  this.hue = random(360);
  this.firework =
  new Particle(random(width),height,this.hue,true);
  this.exploded = false;
  this.particles = [];

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
		  this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.expolde();
      }
    }
    for (var i = 0; i <this.particles.length; i++) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
    }
  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (var i = 0; i <this.particles.length; i++) {
      this.particles[i].show();
    }
  }

  this.expolde = function() {
    this.exploded = true;
    for (var i = 0; i < 100; i++) {
      this.particles.push(new Particle
        (this.firework.pos.x,
          this.firework.pos.y, this.hue));
    }
  }
}
