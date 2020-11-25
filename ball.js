class Ball {
	constructor(x, y, name) {
		this.pos = createVector(x, y); // createVector is equivalent to PVector in processing
		this.mass = 10;
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.d = 30; // diameter
		this.name = name;
	}

	render() {
		noStroke();
		fill(135, 230, 51);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);

		this.arrow();
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.wrapEdges();
	}

	wrapEdges() {
		if (this.pos.x < 0 || this.pos.x > width) {
			this.vel.x *= -1;
		}
	}

	arrow() {
		const start = createVector(0, 0);
		const end = this.vel.copy().mult(10);
		start.add(this.pos);
		drawArrow(start, end, "black");
	}
}
function drawArrow(base, vec, myColor) {
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
}
