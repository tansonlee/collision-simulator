class Ball {
	constructor(x, y) {
		this.pos = createVector(x, y); // createVector is equivalent to PVector in processing
		this.mass = 10;
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.d = 30; // diameter
	}

	render() {
		noStroke();
		fill(135, 230, 51);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
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
}
