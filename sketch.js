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

let resetButton, startButton, twoDButton, elasticButton;

let updateBallsFlag = false;

let mouseOffset;
let overBall1;
let overBall2;

let collisionSound;

let ball1VelocitySlider;
let ball2VelocitySlider;

// used by handleResize()
let vw;

window.addEventListener("resize", handleResize);

function setup() {
	const cnv = createCanvas(1200, 600);
	cnv.style("display", "block");

	const canvasWrapper = document.getElementById("canvas-wrapper");
	cnv.parent(canvasWrapper);

	collisionSound = createAudio("assets/collision.mp3");
	collisionSound.volume(0.1);

	initializeBalls();
	initializeDisplays();
	initializeButtons();
	initializeSliders();

	handleResize();
}

function draw() {
	background(241, 250, 238);

	if (!twoDCollision) {
		setupOneD();
	}

	drawBalls();
	if (updateBallsFlag) {
		updateBalls();
	}
	drawDisplayBoxes();
	addDescriptiveText();

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
	if (!updateBallsFlag) {
		if (overBall2) {
			ball2.pos = createVector(mouseX, mouseY);
		} else if (overBall1) {
			ball1.pos = createVector(mouseX, mouseY);
		}
	}
}
