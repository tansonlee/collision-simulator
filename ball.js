class Ball {
    constructor(x, y, name, mass, ballColor) {
        this.pos = createVector(x, y); // createVector is equivalent to PVector in processing
        this.mass = mass;
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.d = 75; // diameter
        this.name = name;
        this.ballColor = ballColor;
    }

    render() {
        //stroke(0, 90, 25);
        fill(this.ballColor);
        ellipse(this.pos.x, this.pos.y, this.d, this.d);
        this.arrow(0, 0, true);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // this.wrapEdges();
    }

    wrapEdges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    arrow(posx, posy, dynamic) {
        const start = createVector(posx, posy);
        const end = this.vel.copy().setMag(30);
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
