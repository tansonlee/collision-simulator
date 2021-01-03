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
    twoDCollision = !twoDCollision;
};

const handleElastic = () => {
    elasticCollision = !elasticCollision;
};
