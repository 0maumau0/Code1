"use strict";
var JumpingBall;
(function (JumpingBall) {
    let ball;
    let wall;
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        document.addEventListener("keypress", hndKeypress);
        setUp();
        gameLoop();
    }
    function hndKeypress(_event) {
        if (_event.code == "Space") {
            ball.velocity.y = 1;
            console.log("Jump");
        }
    }
    function setUp() {
        ball = createBall();
        wall = createWall();
    }
    function gameLoop() {
        displayState();
        createObstacle();
        checkCollision();
        requestAnimationFrame(gameLoop);
    }
    function displayState() {
        ball.position.y = ball.position.y + ball.velocity.y;
        ball.element.style.transform = "matrix(20,0,0,20," + ball.position.x + "," + ball.position.y + ")";
        //console.log(ball.position.y)
    }
    ;
    function createObstacle() {
    }
    function checkCollision() {
    }
    ;
    function createBall() {
        const ball = {
            element: document.createElement("span"),
            position: { x: 80, y: 80 },
            velocity: { x: 0, y: 0 },
        };
        ball.element.style.transform = "matrix(20,0,0,20, " + ball.position.x + "," + ball.position.y + ")";
        document.body.appendChild(ball.element);
        return ball;
    }
    function createWall() {
        return wall;
    }
    ;
})(JumpingBall || (JumpingBall = {}));
//# sourceMappingURL=jumpingBall.js.map