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
    ball1.vel = initialVelocity1;
    ball2.vel = initialVelocity2;
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

    //ball1VelocitySlider.position(vw / 2 + 310, 230);
    //ball2VelocitySlider.position(vw / 2 + 460, 230);
};

const updateBallVelSlider = () => {
    if (!updateBallsFlag) {
        const newVel1 = velSlider1.value();
        const newVel2 = velSlider2.value();
        if (newVel1 === 0) {
            if (ball1.vel.mag() !== 0) {
                ball1.oldVel = ball1.vel.copy();
            }
            ball1.vel = createVector(0, 0);
        } else {
            if (ball1.oldVel) {
                ball1.vel = ball1.oldVel.copy().setMag(newVel1);
            } else {
                ball1.vel.setMag(newVel1);
            }
        }

        if (newVel2 === 0) {
            if (ball2.vel.mag() !== 0) {
                ball2.oldVel = ball2.vel.copy();
            }
            ball2.vel = createVector(0, 0);
        } else {
            if (ball2.oldVel) {
                ball2.vel = ball2.oldVel.copy().setMag(newVel2);
            } else {
                ball2.vel.setMag(newVel2);
            }
        }
    }
};

const updateBallmassSlider = () => {
    if (!updateBallsFlag) {
        const newMass1 = massSlider1.value();
        const newMass2 = massSlider2.value();

        // change mass
        ball1.mass = newMass1;
        ball2.mass = newMass2;
    }
};
