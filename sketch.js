let ball1, ball2;
let ballDisplay1, ballDisplay2;

let initialPos1, initialPos2;
let initialVelocity1, initialVelocity2;

let elasticCollision = true;
let twoDCollision = true;

// start at true
// once the simulation has started set it to false
// once they collide set it to true
let collisionOccurred;

let resetButton, startButton;

let updateBallsFlag = false;

let mouseOffset;
let overBall1;
let overBall2;

let collisionSound;

function preload() {
	collisionSound = loadSound("assets/collision.mp3");
}

function setup() {
	const cnv = createCanvas(1200, 600);
	cnv.style("display", "block");

	const canvasWrapper = document.getElementById("canvas-wrapper");
	cnv.parent(canvasWrapper);

	initializeBalls();
	initializeDisplays();
	initializeButtons();
}

function draw() {
	background(241, 250, 238);

	if (!twoDCollision) {
		setupTwoD();
	}

	drawBalls();
	if (updateBallsFlag) {
		updateBalls();
	}
	drawDisplayBoxes();

	if (isColliding(ball1, ball2) && !collisionOccurred) {
		collisionSound.play();
		if (elasticCollision) {
			setElasticVelocities(ball1, ball2);
		} else {
			setInelasticVelocities(ball1, ball2);
		}
		collisionOccurred = true;
	}
}

function mousePressed() {
	if (ball1.mouseOverBall()) {
		overBall1 = true;
	}
	if (ball2.mouseOverBall()) {
		overBall2 = true;
	}
}

function mouseReleased() {
	overBall1 = false;
	overBall2 = false;
}

function mouseDragged() {
	if (overBall2) {
		ball2.pos = createVector(mouseX, mouseY);
	} else if (overBall1) {
		ball1.pos = createVector(mouseX, mouseY);
	}
}
