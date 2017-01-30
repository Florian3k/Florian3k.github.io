function wspYgora(x) {
	 return sqrt(1-pow((abs(x)-1),2));
}
function wspYdol(x) {
	 return -3*sqrt(1-(sqrt(abs(x))/sqrt(2)));
}

function Firework() {
  this.hue = random(330,390);
  this.firework =
  new Particle(random(width),height,this.hue,createVector(random(-3,3), -sqrt(random(121,484))),true);
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
    for (var i = -2.0; i <= 2.1; i+= 0.1) {
			//if (i==0) continue;
      this.particles.push(
				new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, createVector(i*4, -wspYgora(i)*4)));
    }
    for (var i = -2.0; i <= 2.1; i+= 0.1) {
      this.particles.push(
				new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, createVector(i*4, -wspYdol(i)*4)));
    }
		var n = 0.025;
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector(-(2-n)*4, -wspYgora(-(2-n))*4)));
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector(-n*4, -wspYgora(-n)*4)));
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector(n*4, -wspYgora(n)*4)));
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector((2-n)*4, -wspYgora((2-n))*4)));

		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector(-(2-n)*4, - wspYdol(-(2-n))*4)));
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector(-n*4, - wspYdol(-n)*4)));
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector(n*4, - wspYdol(n)*4)));
		this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, this.hue,
			 createVector((2-n)*4, - wspYdol((2-n))*4)));
  }
}
