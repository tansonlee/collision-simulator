const handleReset = () => {
	setInitialStates();
	startButton.show();
	updateBallsFlag = false;
};

const handleStart = () => {
	startButton.hide();
	updateBallsFlag = true;
	collisionOccurred = false;
	initialPos1 = ball1.pos.copy();
	initialPos2 = ball2.pos.copy();
};

const handleTwoD = () => {
	if (!updateBallsFlag) {
		twoDCollision = !twoDCollision;
		if (!twoDCollision) {
			twoDButton.removeClass("pressed");
		} else {
			twoDButton.addClass("pressed");
		}
	}
};

const handleElastic = () => {
	elasticCollision = !elasticCollision;
	if (!elasticCollision) {
		elasticButton.removeClass("pressed");
	} else {
		elasticButton.addClass("pressed");
	}
};

const handleResize = () => {
	vw = Math.max(
		document.documentElement.clientWidth || 0,
		window.innerWidth || 0
	);

	ball1VelocitySlider.position(vw / 2 + 310, 230);
	ball2VelocitySlider.position(vw / 2 + 460, 230);
};
