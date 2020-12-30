let ball1;
let ball2;
let ballDisplay1;
let ballDisplay2;
let initialPos1;
let initialPos2;
let initialVelocity1;
let initialVelocity2;
let elasticCollision = true;
let twoDCollision = true;
let resetBalls = true;
let b;
let b2;
let collisionOccurred = false;

function setup() {
    const cnv = createCanvas(1200, 600);
    cnv.style("display", "block");
    const color1 = color(230, 57, 70);
    const color2 = color(66, 135, 245);
    ball1 = new Ball(0, 0, "Ball 1", 10, color1);
    ball2 = new Ball(0, 0, "Ball 2", 10, color2);
    initialPos1 = createVector(200, 360);
    initialPos2 = createVector(500, 150);
    initialVelocity1 = createVector(10, -8);
    initialVelocity2 = createVector(1, 0);
    ball1.vel = initialVelocity1;
    ball2.vel = initialVelocity2;
    resetBalls = true;
    ball1.acc.y = 0;
    ball2.acc.y = 0;
    ballDisplay1 = new DisplayBox(ball1, width - 300, 20);
    ballDisplay2 = new DisplayBox(ball2, width - 150, 20);
    b = createButton("reset");
    b.mousePressed(changeReset);
    b2 = createButton("start");
    b2.mousePressed(changeVelocities);
}

function draw() {
    if (resetBalls) {
        setInitialStates();
        b2.show();
    } else b2.hide();
    background(241, 250, 238);
    if (!twoDCollision) {
        fill(62);
        rect(0, 337.5, 1200, 300);
        ball1.vel.y = 0;
        ball2.vel.y = 0;
        ball1.pos.y = 300;
        ball2.pos.y = 300;
    }
    ball1.update();
    ball2.update();
    ball1.render();
    ball2.render();
    ballDisplay1.render();
    ballDisplay2.render();
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

const changeReset = () => {
    resetBalls = true;
};

const changeVelocities = () => {
    resetBalls = false;
};
