"use strict";
var animation;
(function (animation) {
    window.addEventListener("load", handleLoad);
    const balls = [];
    function handleLoad() {
        for (let i = 0; i <= 3; i++) {
            const ball = {
                element: document.createElement("span"),
                position: { x: 100 + 20 * i, y: 100 + 20 * i },
                velocity: { x: 10, y: 10 },
            };
            document.body.appendChild(ball.element);
            //balls[i] = ball
            balls.push(ball);
        }
        move();
    }
    function move() {
        for (const ball of balls) {
            // for (let i = balls.length; i >= balls.length; i++) { 
            ball.position.x += ball.velocity.x;
            ball.position.y += ball.velocity.y;
            //let ball: Ball = balls[i];
            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
            ball.element.style.transform = "matrix(20,0,0,20," + ball.position.x + "," + ball.position.y + ")";
        }
        setTimeout(move, 16);
    }
})(animation || (animation = {}));
//# sourceMappingURL=animation.js.map