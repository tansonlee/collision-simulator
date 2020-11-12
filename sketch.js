let ball1;
let ball2;

function setup() {
	createCanvas(600, 400);
	ball1 = new Ball(100, 260);
	ball2 = new Ball(500, 180);
	ball1.vel.x = 4;
	ball1.vel.y = 1
	ball2.vel.x = -4;
}

function draw() {
	background(62);
	ball1.update();
	ball2.update();
	ball1.render();
	ball2.render();
	fill(255, 253, 208);
	triangle(0, 250, 600, 400, 0, 400);
}
