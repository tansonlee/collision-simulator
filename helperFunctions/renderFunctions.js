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
    if (updateBallsFlag) {
        return;
    }

    const newMass1 = massSlider1.value();
    const newMass2 = massSlider2.value();

    ball1.mass = newMass1;
    ball2.mass = newMass2;
};

const addDescriptiveText = () => {
    const dimension = twoDCollision ? "2D" : "1D";
    const collisionType = elasticCollision ? "elastic" : "inelastic";
    textSize(28);
    fill(80);
    text(dimension + " " + collisionType + " collision", 10, 30);
};
