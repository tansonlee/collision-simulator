class Ball {
    constructor(pos, vel, name, mass, ballColor) {
        this.pos = pos;
        this.mass = mass;
        this.vel = vel;
        this.d = 75; // diameter
        this.name = name;
        this.ballColor = ballColor;
    }

    render() {
        strokeWeight(3);
        if (this.mouseOverBall()) {
            if (mouseIsPressed) {
                stroke(0);
            } else {
                stroke(120);
            }
        }
        const newColor = this.getColor();
        fill(newColor);
        ellipse(this.pos.x, this.pos.y, this.d, this.d);
        this.arrow(0, 0, true);
        noStroke();
    }

    update() {
        this.pos.add(this.vel);
    }

    arrow(posx, posy, dynamic) {
        const start = createVector(posx, posy);
        const temp = this.vel.copy();
        const end = constrainVector(temp.mult(2.7), 6, 32);
        if (dynamic) {
            // whether arrow should follow ball
            start.add(this.pos);
        } else {
            end.mult(1.1);
            const reverseVel = this.vel.copy().mult(-1).setMag(30);
            const lineEnd = p5.Vector.add(start, reverseVel);
            linedash(start.x, start.y, lineEnd.x, lineEnd.y);
            velocityDragger(start.x, start.y, lineEnd.x, lineEnd.y, this);
            // fill("green");
            // ellipse(start.x, start.y, 30, 30);
            // fill("blue");
            // ellipse(lineEnd.x, lineEnd.y, 30, 30);
        }
        if (this.vel.mag() === 0) {
            fill(0);
            ellipse(start.x, start.y, 7, 7);
        } else {
            drawArrow(start, end);
        }
    }

    mouseOverBall() {
        return (
            Math.abs(mouseX - this.pos.x) < this.d / 2 &&
            Math.abs(mouseY - this.pos.y) < this.d / 2
        );
    }

    getColor() {
        return color(
            this.ballColor.levels[0] - this.mass * 5 + 25,
            this.ballColor.levels[1] - this.mass * 5 + 25,
            this.ballColor.levels[2] - this.mass * 5 + 25
        );
    }
}

const drawArrow = (base, vec) => {
    push();
    stroke(0);
    strokeWeight(2);
    fill(0);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 6;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
    noStroke();
};

const drawArrowControl = (base, vec) => {
    push();
    stroke(0);
    let a = 20;
    let b = 80;
    let c = lerp(a, b, 0.2);
    let d = lerp(a, b, 0.5);
    let e = lerp(a, b, 0.8);
};

function linedash(x1, y1, x2, y2, delta) {
    // delta is both the length of a dash, the distance between 2 dots/dashes, and the diameter of a round
    // const delta = 3;
    // stroke(0);
    // fill(0);
    // let distance = 30; //dist(x1, y1, x2, y2);
    let dashNumber = 4; // distance / delta;
    let xDelta = Math.round((x2 - x1) / dashNumber);
    let yDelta = Math.round((y2 - y1) / dashNumber);

    fill(0, 200);

    ellipse(x1, y1, 3, 3);

    stroke(0, 170);
    point(x1 + xDelta * 1, y1 + yDelta * 1);
    point(x1 + xDelta * 2, y1 + yDelta * 2);
    point(x1 + xDelta * 3, y1 + yDelta * 3);
    // point(x1 + xDelta * 4, y1 + yDelta * 4);

    // for (let i = 0; i < dashNumber; i += 2) {
    //     let xi1 = i * xDelta + x1;
    //     let yi1 = i * yDelta + y1;
    //     if (i >= dashNumber - 2) {
    //         ellipse(xi1, yi1, 3, 3);
    //     } else {
    //         point(xi1, yi1);
    //     }
    // }
}

const velocityDragger = (x1, y1, x2, y2, ball) => {
    noStroke();
    let dashNumber = 4; // distance / delta;
    let xDelta = Math.round((x2 - x1) / dashNumber);
    let yDelta = Math.round((y2 - y1) / dashNumber);
    const draggerPositionX = x2 + xDelta * 0.3;
    const draggerPositionY = y2 + yDelta * 0.3;
    const mouseOverDragger = () => {
        if (mouseIsPressed) {
            return (
                dist(mouseX, mouseY, draggerPositionX, draggerPositionY) < 30
            );
        } else {
            return (
                dist(mouseX, mouseY, draggerPositionX, draggerPositionY) < 10
            );
        }
    };
    if (mouseOverDragger()) {
        fill(0);
        if (mouseIsPressed) {
            const originalMagnitude = ball.vel.mag();
            const mouseVector = createVector(mouseX, mouseY);
            const arrowCenter = createVector(x1, y1);
            ball.vel = p5.Vector.sub(arrowCenter, mouseVector);
            ball.vel.setMag(originalMagnitude);
        }
    } else {
        fill(130);
    }
    ellipse(draggerPositionX, draggerPositionY, 10, 10);
};

const constrainVector = (v, min, max) => {
    const copy = v.copy();
    if (copy.mag() < min) {
        copy.setMag(min);
    }
    if (copy.mag() > max) {
        copy.setMag(max);
    }

    return copy;
};
