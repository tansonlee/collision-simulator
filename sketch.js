let ball1;
let ball2;
let ballDisplay1;
let ballDisplay2;

function setup() {
	const cnv = createCanvas(1200, 600);
	cnv.style("display", "block");
	ball1 = new Ball(640, 600, "Ball 1", 10);
	ball2 = new Ball(600, 150, "Ball 2", 10);
	// ball1 = new Ball(200, 500, "Ball 1", 10);
	// ball2 = new Ball(500, 200, "Ball 2", 10);
	ball1.vel.x = 0;
	ball1.vel.y = -20;
	ball2.vel.x = 0;
	ball2.vel.y = 0;
	ball1.acc.y = 0.3;
	ball2.acc.y = 0.3;
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
	if (isColliding(ball1, ball2)) {
		// setInelasticVelocities(ball1, ball2);
		setElasticVelocities(ball1, ball2);
	}
}
