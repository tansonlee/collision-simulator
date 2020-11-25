let ball1;
let ball2;
let ballDisplay1;
let ballDisplay2;

function setup() {
	const cnv = createCanvas(1200, 600);
	cnv.style("display", "block");
	ball1 = new Ball(100, 260, "Ball 1");
	ball2 = new Ball(500, 180, "Ball 2");
	ball1.vel.x = 4;
	ball1.vel.y = 1;
	ball2.vel.x = -4;
	ballDisplay1 = new DisplayBox(ball1, width - 300, 20);
	ballDisplay2 = new DisplayBox(ball2, width - 150, 20);
}

function draw() {
	background(62);
	ball1.update();
	ball2.update();
	ball1.render();
	ball2.render();
	fill(255, 253, 208);
	ballDisplay1.render();
	ballDisplay2.render();
}
