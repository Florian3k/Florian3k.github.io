var cols, rows;
var w = 10;
var grid = [];
var stack = [];
var generating = true;
var current;
var winCell;
var prev;

function setup() {
	createCanvas(601, 601);
	background(200);
	frameRate(30);
	cols = floor(width/w);
	rows = floor(height/w);
	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < rows; i++) {
			var cell = new Cell(i,j);
			grid.push(cell);
		}
	}
	current = grid[0];
	winCell = grid[grid.length-1];
	current.visited = true;
	while (current) {
		var next = current.checkNeighbours();
		if (next) {
			// Step 2
			stack.push(current);
			// Step 3
			removeWalls(current,next);
			//Step 4
			current = next;
			next.visited = true;
		} else {
			current = stack.pop();
		}
	}
	current = grid[0];
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}
	prev = current;
}
var lol = true;
function draw() {
	current.show();
	prev.show();
	current.highlight(0,255,0);


		if (current === winCell) {
			WinXD();
		}
		winCell.highlight(0,0,255);
		if (keyIsPressed === true) {
			switch (keyCode) {
				case UP_ARROW:
					console.log("up");
					if (current.walls[0] === false) {
						prev = current;
						current = grid[index(current.i,current.j-1)];
					}
					break;
				case RIGHT_ARROW:
					console.log("right");
					if (current.walls[1] === false) {
						prev = current;
						current = grid[index(current.i+1,current.j)];
					}
					break;
				case DOWN_ARROW:
					console.log("down");
					if (current.walls[2] === false) {
						prev = current;
						current = grid[index(current.i,current.j+1)];
					}
					break;
				case LEFT_ARROW:
					console.log("left");
					if (current.walls[3] === false) {
						prev = current;
						current = grid[index(current.i-1,current.j)];
					}
					break;
			}
		}

	noFill();
	stroke(51);
	rect(0,0,600,600);
}

function removeWalls(a,b) {
	var x = a.i - b.i;
	var y = a.j - b.j;

	if (x === 1) {
		a.walls[3] = false;
		b.walls[1] = false;
	} else if (x === -1) {
		a.walls[1] = false;
		b.walls[3] = false;
	} else if (y === 1) {
		a.walls[0] = false;
		b.walls[2] = false;
	} else if (y === -1) {
		a.walls[2] = false;
		b.walls[0] = false;
	}
}

function WinXD() {
	noLoop();
	alert("Wygrałeś xD")
}







//
