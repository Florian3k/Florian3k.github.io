function Firework() {
  this.hue = random(360);
  this.firework =
  new Particle(random(width-280)+140, height, this.hue, createVector(random(-3,3), -sqrt(random(121,484))),true);
  this.exploded = false;
  this.particles = [];

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
		  this.firework.update();
      if (this.firework.vel.y >= 0) {
        if (random()<0.5) {
          this.expolde();
        } else {
          this.expolde2();
        }
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
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }

  this.expolde = function() {
    this.exploded = true;
    var shift = -18;
    // A
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-5-i/5+shift, i) ));
    }
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(0+i/5+shift, i) ));
    }
    for (var i = -3.75; i <= -1.25; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(i+shift, 5) ));
    }
    shift += 11;
    // D
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-5+shift, i) ));
    }
    for (var alpha = 0; alpha < PI; alpha += PI/14) {
      var r = 10;
      var x = sin(alpha) * r;
      var y = cos(alpha) * r;
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-5+x+shift,y) ));
    }
    shift += 15;
    // A
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-5-i/5+shift, i) ));
    }
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(0+i/5+shift, i) ));
    }
    for (var i = -3.75; i <= -1.25; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(i+shift, 5) ));
    }
    shift += 11;
    // N
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-3-i/5+shift, i) ));
    }
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(1+i/5+shift, i) ));
    }
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(5-i/5+shift, i) ));
    }
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(9+i/5+shift, i) ));
    }

    // for (var i = -10; i <= 10; i += 2) {
    //   this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(i/2+shift, i) ));
    // }

    // for (var i = -10; i <= 10; i += 2.5 ) {
    //   this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(5+shift, i) ));
    // }
    // shift += 15;

  }

  this.expolde2 = function() {
    this.exploded = true;
    var shift = -33;
    // 1
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(5+shift, i) ));
    }
    for (var i = -10; i <= -4; i += 2) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-i-5+shift, i) ));
    }
    shift += 15;
    // 0
    for (var alpha = 0; alpha < TWO_PI; alpha += PI/10) {
      var r = 10;
      var x = sin(alpha) * r;
      var y = cos(alpha) * r;
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(x*0.65+shift,y) ));
    }
    shift += 16;
    // 0
    for (var alpha = 0; alpha < TWO_PI; alpha += PI/10) {
      var r = 10;
      var x = sin(alpha) * r;
      var y = cos(alpha) * r;
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(x*0.65+shift,y) ));
    }
    shift += 24;
    // L
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-5+shift, i) ));
    }
    for (var i = -5; i <= 3; i += 2 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(i+shift, 10) ));
    }
    shift += 14;
    // A
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(-5-i/5+shift, i) ));
    }
    for (var i = -10; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(0+i/5+shift, i) ));
    }
    for (var i = -3.75; i <= -1.25; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(i+shift, 5) ));
    }
    shift += 10;
    // T
    for (var i = -7.5; i <= 10; i += 2.5 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(0+shift, i) ));
    }
    for (var i = -5; i <= 5; i += 2 ) {
      this.particles.push(new Particle(this.firework.pos.x,this.firework.pos.y, this.hue, createVector(i+shift, -10) ));
    }
  }
}
