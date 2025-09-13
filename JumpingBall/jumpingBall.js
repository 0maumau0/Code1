"use strict";
var JumpingBall;
(function (JumpingBall) {
    let ball;
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        document.addEventListener("keypress", hndKeypress);
        ball = createBall();
        gameLoop();
    }
    function hndKeypress(_event) {
        if (_event.code == " ") {
            ball.velocity.y = 20;
        }
    }
    function gameLoop() {
        createObstacle();
    }
    function createObstacle() {
    }
    function createBall() {
        const ball = {
            element: document.createElement("span"),
            position: { x: 80, y: 80 },
            velocity: { x: 0, y: 20 },
        };
        ball.element.style.transform = "matrix(20,0,0,20, " + ball.position.x + "," + ball.position.y + ")";
        document.body.appendChild(ball.element);
        return ball;
    }
})(JumpingBall || (JumpingBall = {}));
//# sourceMappingURL=jumpingBall.js.map