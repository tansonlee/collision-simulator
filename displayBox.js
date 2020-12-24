class DisplayBox {
    constructor(ball, x, y) {
        this.ball = ball;
        this.x = x;
        this.y = y;
    }

    render() {
        fill(231, 240, 228, 150);
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
        this.ball.arrow(this.x + 52, this.y + 90, false);
    }
    resize(newX) {
        this.x = newX;
    }
}
