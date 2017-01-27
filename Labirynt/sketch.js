var cols, rows;
var w = 40;
var grid = [];
var stack = [];

var current;

function setup() {
	createCanvas(601, 601);
	cols = floor(width/w);
	rows = floor(height/w);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < rows; i++) {
			var cell = new Cell(i,j);
			grid.push(cell);
		}
	}
	current = grid[0];

}

function draw() {
	background(200);
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();

	}
	current.visited = true;
	current.highlight();
	// Step 1
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
	noFill();
	stroke(51);
	rect(0,0,600,600);
	if(!current) {
		noLoop();
	}

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







//
