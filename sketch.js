var cube;
var aktor;

function preload() {
	aktorLeft = loadImage("aktor-left.png");
	aktorRight = loadImage("aktor-right.png");
}
function setup() {
	createCanvas(windowWidth, 500);
	cube = new Cube();
}

function draw() {
	background(100, 50, 250);

	cube.show();
	cube.walking();
	cube.update();
	cube.checkEdgeGround();
	cube.checkEdgeJump();
	cube.jumping();
	cube.edgeWall();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		cube.walkRight = true;
		cube.aktorRight = true;
		cube.aktorLeft = false;
	} else if (keyCode === LEFT_ARROW) {
		cube.walkLeft = true;
		cube.aktorLeft = true;
		cube.aktorRight = false;
	} else if (keyCode === LEFT_ARROW && key == ' ') {
		cube.walkLeft = true;
		cube.jumpWalkLeft = true;
	} else if (keyCode === RIGHT_ARROW && key == ' ') {
		cube.walkLeft = true;
		cube.jumpWalkRight = true;
	} 
	if (key == ' ') {
		cube.jump = true;
	}
}

function keyReleased() {
	cube.walkRight = false;
	cube.walkLeft = false;
	cube.jump = false;
	cube.jumpWalkRight = false;
	cube.jumpWalk = false;
}

