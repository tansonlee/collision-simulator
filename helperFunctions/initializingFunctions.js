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

	twoDButton = createButton("2D");
	twoDButton.mousePressed(handleTwoD);
	twoDButton.addClass("two-d-button");
	twoDButton.addClass("pressed");

	elasticButton = createButton("elastic");
	elasticButton.mousePressed(handleElastic);
	elasticButton.addClass("elastic-button");
	elasticButton.addClass("pressed");

	const buttonWrapper = document.getElementById("button-wrapper");
	resetButton.parent(buttonWrapper);
	startButton.parent(buttonWrapper);
	twoDButton.parent(buttonWrapper);
	elasticButton.parent(buttonWrapper);
};

const initializeSliders = () => {
	const canvasWrapper = document.getElementById("canvas-wrapper");
	ball1VelocitySlider = createSlider(0, 12, 10, 0.1);
	ball1VelocitySlider.style("width", "80px");
	ball1VelocitySlider.parent(canvasWrapper);
	ball1VelocitySlider.input(updateBallVelSlider);

	ball2VelocitySlider = createSlider(0, 12, 1, 0.1);
	ball2VelocitySlider.style("width", "80px");
	ball2VelocitySlider.parent(canvasWrapper);
	ball2VelocitySlider.input(updateBallVelSlider);
};

const setInitialStates = () => {
	ball1.pos = initialPos1.copy();
	ball2.pos = initialPos2.copy();
	ball1.vel = initialVelocity1.copy();
	ball2.vel = initialVelocity2.copy();
	collisionOccurred = true;
};

const setupOneD = () => {
	fill(62);
	rect(0, 337.5, 1200, 300);
	ball1.vel.y = 0;
	ball2.vel.y = 0;
	ball1.pos.y = 300;
	ball2.pos.y = 300;
};
