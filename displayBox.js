class DisplayBox {
    constructor(ball, x, y) {
        this.ball = ball;
        this.x = x;
        this.y = y;
    }

    render() {
        fill(224, 251, 252, 150);
        stroke(160);
        rect(this.x, this.y, 100, 150);
        noStroke();
        fill(0);
        textSize(16);
        text(this.ball.name, this.x + 30, this.y + 20);
        textSize(12);
        text(
            `Velocity: ${this.ball.vel.mag().toFixed(2)}`, // displays rounded velocity
            this.x + 10,
            this.y + 40
        );
        text(`Acceleration: ${this.ball.acc.x}`, this.x + 10, this.y + 140);
        this.ball.arrow(this.x + 52, this.y + 80, false);
    }
    resize(newX) {
        this.x = newX;
    }
}
