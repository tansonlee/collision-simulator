## Files

Main/JS: sketch.js

Starting point/HTML: index.html

Styling/CSS: styles.css

### classes:
- ball.js
- displayBox.js

### helperFunctions:
- collisionFunctions.js
	- `isColliding(ball1, ball2)`
	- `calculateInelasticVelocity(ball1, ball2)`
	- `setInelasticVelocities(ball1, ball2)`
	- `elasticFinalVelocity(m1, m2, u1, u2)`
	- `calculateElasticVelocity(ball1, ball2)`
	- `setElasticVelocities(ball1, ball2)`
- eventHandlers.js
	- `handleReset()`
	- `handleStart()`
- initializingFunctins.js
	- `initializeBalls()`
	- `initializeDisplays()`
	- `initializeButtons()`
	- `setInitialStates()`
	- `setupTwoD()`
- renderFunctions.js
	- `drawBalls()` 
	- `updateBalls()`
	- `drawDisplayBoxes()`