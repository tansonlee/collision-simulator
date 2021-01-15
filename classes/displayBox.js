class DisplayBox {
    constructor(ball, x, y, velSlider, massSlider) {
        this.ball = ball;
        this.ballColor = ball.ballColor;
        this.x = x;
        this.y = y;
        this.velSlider = velSlider;
        this.massSlider = massSlider;
    }

    render() {
        stroke(0);
        fill(0);
        ellipse(this.x + 52, this.y + 105, 3, 3);
        fill(231, 240, 228, 150);
        stroke(this.ballColor);
        strokeWeight(3);
        rect(this.x, this.y, 100, 200);
        noStroke();
        this.ball.arrow(this.x + 52, this.y + 105, false);
        noStroke();
        fill(0);
        textSize(16);
        text(this.ball.name, this.x + 30, this.y + 20);
        textSize(12);
        text(
            `Velocity: ${this.ball.vel.mag().toFixed(2)}`, // displays rounded velocity
            this.x + 12,
            this.y + 40
        );
        this.velSlider.position(this.x + 10, this.y + 50);
        text(
            `Mass: ${this.ball.mass.toFixed(2)}`, // displays rounded mass
            this.x + 17,
            this.y + 170
        );
        this.massSlider.position(this.x + 10, this.y + 180);
    }
    resize(newX) {
        this.x = newX;
    }
}
