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
        }
        if (this.vel.mag() === 0) {
            fill(0);
            ellipse(start.x, start.y, 7, 7);
        } else {
            drawArrow(start, end, "black");
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

const drawArrow = (base, vec, myColor) => {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
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
