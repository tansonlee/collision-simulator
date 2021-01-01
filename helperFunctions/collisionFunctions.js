const isColliding = (ball1, ball2) => {
	const distanceNeeded = (ball1.d + ball2.d) / 2;
	// distance betweeen balls needed to collide - sum of radius
	const currentDistance = p5.Vector.dist(ball1.pos, ball2.pos);
	return currentDistance < distanceNeeded;
};

const calculateInelasticVelocity = (ball1, ball2) => {
	const ball1Momentum = p5.Vector.mult(ball1.vel, ball1.mass);
	const ball2Momentum = p5.Vector.mult(ball2.vel, ball2.mass);
	const totalMomentum = p5.Vector.add(ball1Momentum, ball2Momentum);
	const totalMass = ball1.mass + ball2.mass;
	return p5.Vector.div(totalMomentum, totalMass);
};

const setInelasticVelocities = (ball1, ball2) => {
	const finalVelocity = calculateInelasticVelocity(ball1, ball2);
	ball1.vel = finalVelocity;
	ball2.vel = finalVelocity;
};

// m1, m2 are the masses, u1, u2 are the initial velocities
const elasticFinalVelocity = (m1, m2, u1, u2) => {
	const firstPart = ((m1 - m2) / (m1 + m2)) * u1;
	const secondPart = ((2 * m2) / (m1 + m2)) * u2;
	return firstPart + secondPart;
};

const calculateElasticVelocity = (ball1, ball2) => {
	const phi = p5.Vector.sub(ball2.pos, ball1.pos).heading();
	const theta1 = ball1.vel.heading();
	const theta2 = ball2.vel.heading();
	const v1 = ball1.vel.mag();
	const v2 = ball2.vel.mag();
	const m1 = ball1.mass;
	const m2 = ball2.mass;

	const numeratorPart1 = v1 * cos(theta1 - phi) * (m1 - m2);
	const numeratorPart2 = 2 * m2 * v2 * cos(theta2 - phi);
	const denominator = m1 + m2;
	const fraction = (numeratorPart1 + numeratorPart2) / denominator;

	// x component
	const xComponentTerm2 = v1 * sin(theta1 - phi) * cos(phi + HALF_PI);
	const finalVelocityX = fraction * cos(phi) + xComponentTerm2;

	// y component
	const yComponentTerm2 = v1 * sin(theta1 - phi) * sin(phi + HALF_PI);
	const finalVelocityY = fraction * sin(phi) + yComponentTerm2;

	return createVector(finalVelocityX, finalVelocityY);
};

const setElasticVelocities = (ball1, ball2) => {
	const ball1FinalVelocity = calculateElasticVelocity(ball1, ball2);
	const ball2FinalVelocity = calculateElasticVelocity(ball2, ball1);

	ball1.vel = ball1FinalVelocity;
	ball2.vel = ball2FinalVelocity;
};
