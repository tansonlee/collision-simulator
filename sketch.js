let ball1;
let ball2;
let ballDisplay1;
let ballDisplay2;
let elasticCollision;
let twoD;

function setup() {
    const cnv = createCanvas(1200, 600);
    elasticCollision = false;
    twoDCollision = true;
    cnv.style("display", "block");
    ball1 = new Ball(500, 150, "Ball 1", 10);
    ball2 = new Ball(640, 100, "Ball 2", 10);
    // ball1 = new Ball(200, 500, "Ball 1", 10);
    // ball2 = new Ball(500, 200, "Ball 2", 10);
    ball1.vel.x = 10;
    ball1.vel.y = -8;
    ball2.vel.x = 0;
    ball2.vel.y = 0;
    ball1.acc.y = 0;
    ball2.acc.y = 0;
    ballDisplay1 = new DisplayBox(ball1, width - 300, 20);
    ballDisplay2 = new DisplayBox(ball2, width - 150, 20);
    b = createButton("click me");
}

function draw() {
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
    if (isColliding(ball1, ball2)) {
        if (elasticCollision) {
            setElasticVelocities(ball1, ball2);
        } else {
            setInelasticVelocities(ball1, ball2);
        }
    }
}
