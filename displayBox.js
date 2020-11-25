class DisplayBox {
	constructor(ball, x, y) {
		this.ball = ball;
		this.x = x;
		this.y = y;
	}

	render() {
		fill(255, 253, 208);
		rect(this.x, this.y, width * 0.1, height * 0.6);
		fill(0);
		textSize(16);
		text(this.ball.name, (this.x + 30), (this.y + 20));
		textSize(12);
		text(`Velocity: ${this.ball.vel.mag().toFixed(2)}`, (this.x + 5), (this.y + 40));
		text(`Acceleration: ${this.ball.acc.x}`, (this.x + 5), (this.y + 100));
		this.ball.arrow(this.x + 50, this.y + 60, false);
	}
	resize(newX) {
		this.x = newX;
	}
}
