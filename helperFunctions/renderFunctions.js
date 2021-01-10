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

const addDescriptiveText = () => {
    const dimension = twoDCollision ? "2D" : "1D";
    const collisionType = elasticCollision ? "elastic" : "inelastic";
    textSize(28);
    fill(80);
    text(dimension + " " + collisionType + " collision", 10, 30);
};
