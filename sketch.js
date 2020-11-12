let ball1;
let ball2;

function setup() {
	createCanvas(600, 400);
	ball1 = new Ball(100, 220);
	ball2 = new Ball(500, 180);
	ball1.vel.x = 4;
	ball2.vel.x = -4;
}

function draw() {
	background(62);
	ball1.update();
	ball2.update();
	ball1.render();
	ball2.render();
}
