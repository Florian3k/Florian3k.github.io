var fireworks = [];
var gravity;

function setup() {
	createCanvas(800, 600);
	colorMode(HSB);
	stroke(255);
	strokeWeight(3);
	gravity = createVector(0, 0.4);
	fireworks.push(new Firework());
	background(0,80);
}

function draw() {
	colorMode(RGB);
	background(0,80);
	colorMode(HSB);
	if (random(1) < 0.04) {
		fireworks.push(new Firework());
	}
	for (var i = 0; i < fireworks.length; i++) {
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].particles.length > 0) {
			if(fireworks[i].particles[0].lifespan < 0) {
				fireworks.splice(i,1);
			}
		}
	}

}
