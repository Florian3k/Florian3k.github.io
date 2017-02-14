var counting = false;
var count = 0;
var prev;
function setup() {
	createCanvas(600, 600);
	background(51);
	stroke(255);
	strokeWeight(10);
}

function draw() {

	if (counting) {
		if(frameCount >= prev+60) {
			count++;
			prev = frameCount;
		}
		if(count >= 5) {
			counting = false;
		}
		showTime(count);
	}
}

function keyPressed() {
	counting = true;
	prev = frameCount;
	count = 0;
}
function mousePressed() {
	counting = true;
	prev = frameCount;
	count = 0;
}
function showTime(val) {
	background(51);
	stroke(120);
	strokeWeight(6);
	line(200,100,400,100); // a
	line(400,100,400,300); // b
	line(400,300,400,500); // c
	line(200,500,400,500); // d
	line(200,500,200,300); // e
	line(200,300,200,100); // f
	line(200,300,400,300); // g
	stroke(255,255,0);
	strokeWeight(10);
	switch (val) {
		case 0:
			line(200,100,400,100); // a
			line(400,100,400,300); // b
			line(400,300,400,500); // c
			line(200,500,400,500); // d
			line(200,500,200,300); // e
			line(200,300,200,100); // f
			break;
		case 1:
			line(400,100,400,300); // b
			line(400,300,400,500); // c
			break;
		case 2:
			line(200,100,400,100); // a
			line(400,100,400,300); // b
			line(200,500,400,500); // d
			line(200,500,200,300); // e
			line(200,300,400,300); // g
			break;
		case 3:
			line(200,100,400,100); // a
			line(400,100,400,300); // b
			line(400,300,400,500); // c
			line(200,500,400,500); // d
			line(200,300,400,300); // g
			break;
		case 4:
			line(400,100,400,300); // b
			line(400,300,400,500); // c
			line(200,300,200,100); // f
			line(200,300,400,300); // g
			break;
		case 5:
			line(200,100,400,100); // a
			line(400,300,400,500); // c
			line(200,500,400,500); // d
			line(200,300,200,100); // f
			line(200,300,400,300); // g
			break;
		default:
			console.log("No such case ("+val+")");
	}
}
