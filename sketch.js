let ball1;
let ball2;
let ballDisplay1;
let ballDisplay2;

function setup() {
    const cnv = createCanvas(1200, 600);
    cnv.style("display", "block");
    ball1 = new Ball(900, 60, "Ball 1", 10);
    ball2 = new Ball(100, 60, "Ball 2", 10);
    ball1.vel.x = 9;
    ball1.vel.y = 10;
    ball2.vel.x = 10;
    ball2.vel.y = -10;
    ballDisplay1 = new DisplayBox(ball1, width - 300, 20);
    ballDisplay2 = new DisplayBox(ball2, width - 150, 20);
}

function draw() {
    background(62);
    ball1.update();
    ball2.update();
    ball1.render();
    ball2.render();
    fill(255, 253, 208);
    ballDisplay1.render();
    ballDisplay2.render();
    if (isColliding(ball1, ball2)) {
        setInelasticVelocities(ball1, ball2);
    }
}

const isColliding = (ball1, ball2) => {
    const distanceNeeded = (ball1.d + ball2.d) / 2;
    // distance betweeen balls needed to collide - sum of radius
    const currentDistance = p5.Vector.dist(ball1.pos, ball2.pos);
    return currentDistance < distanceNeeded;
};

const calculateInelasticVelocity = (ball1, ball2) => {
    const ball1Momentum = p5.Vector.mult(ball1.vel, ball1.mass);
    const ball2Momentum = p5.Vector.mult(ball2.vel, ball2.mass);
    const totalMomentum = p5.Vector.add(ball1Momentum, ball2Momentum);
    const totalMass = ball1.mass + ball2.mass;
    return p5.Vector.div(totalMomentum, totalMass);
};

const setInelasticVelocities = (ball1, ball2) => {
    const finalVelocity = calculateInelasticVelocity(ball1, ball2);
    ball1.vel = finalVelocity;
    ball2.vel = finalVelocity;
};
