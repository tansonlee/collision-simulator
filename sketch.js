let ball1, ball2;
let ballDisplay1, ballDisplay2;

let initialPos1, initialPos2;
let initialVelocity1, initialVelocity2;

let elasticCollision = true;
let twoDCollision = true;
let collisionOccurred = false;

let resetButton, startButton;

let updateBallsFlag = false;

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

	// if (resetBalls) {
	// 	setInitialStates();
	// 	startButton.show();
	// } else startButton.hide();

	if (!twoDCollision) {
		setupTwoD();
	}

	drawBalls();
	if (updateBallsFlag) {
		updateBalls();
	}
	drawDisplayBoxes();

	if (isColliding(ball1, ball2) && !collisionOccurred) {
		if (elasticCollision) {
			setElasticVelocities(ball1, ball2);
		} else {
			setInelasticVelocities(ball1, ball2);
		}
		collisionOccurred = true;
	}
}

const setInitialStates = () => {
	ball1.pos = initialPos1.copy();
	ball2.pos = initialPos2.copy();
	ball1.vel = initialVelocity1.copy();
	ball2.vel = initialVelocity2.copy();
	collisionOccurred = false;
};

const handleReset = () => {
	setInitialStates();
	startButton.show();
	updateBallsFlag = false;
};

const handleStart = () => {
	startButton.hide();
	// ball1.vel = initialVelocity1.copy();
	// ball2.vel = initialVelocity2.copy();
	updateBallsFlag = true;
};

const initializeBalls = () => {
	const ball1Color = color(230, 57, 70);
	const ball2Color = color(66, 135, 245);

	initialPos1 = createVector(200, 360);
	initialPos2 = createVector(500, 150);

	initialVelocity1 = createVector(10, -8);
	initialVelocity2 = createVector(1, 0);

	ball1 = new Ball(null, null, "Ball 1", 10, ball1Color);
	ball2 = new Ball(null, null, "Ball 2", 10, ball2Color);

	setInitialStates();
};

const initializeDisplays = () => {
	ballDisplay1 = new DisplayBox(ball1, width - 300, 20);
	ballDisplay2 = new DisplayBox(ball2, width - 150, 20);
};

const initializeButtons = () => {
	resetButton = createButton("reset");
	resetButton.mousePressed(handleReset);
	resetButton.addClass("reset-button");

	startButton = createButton("start");
	startButton.mousePressed(handleStart);
	startButton.addClass("start-button");

	const buttonWrapper = document.getElementById("button-wrapper");
	resetButton.parent(buttonWrapper);
	startButton.parent(buttonWrapper);
};

const setupTwoD = () => {
	fill(62);
	rect(0, 337.5, 1200, 300);
	ball1.vel.y = 0;
	ball2.vel.y = 0;
	ball1.pos.y = 300;
	ball2.pos.y = 300;
};

const drawBalls = () => {
	ball1.render();
	ball2.render();
};

const updateBalls = () => {
	ball1.update();
	ball2.update();
};

const drawDisplayBoxes = () => {
	ballDisplay1.render();
	ballDisplay2.render();
};
