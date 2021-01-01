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
		fill(this.ballColor);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
		this.arrow(0, 0, true);
		noStroke();
	}

	update() {
		this.pos.add(this.vel);
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

	mouseOverBall() {
		return (
			Math.abs(mouseX - this.pos.x) < this.d / 2 &&
			Math.abs(mouseY - this.pos.y) < this.d / 2
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
