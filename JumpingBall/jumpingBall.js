"use strict";
var JumpingBall;
(function (JumpingBall) {
    let ball;
    const walls = [];
    const windowheight = 10;
    const windowwidtht = 10;
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        document.addEventListener("keypress", hndKeypress);
        setUp();
        gameLoop();
    }
    function hndKeypress(_event) {
        if (_event.code == "Space" && ball.position.y <= 300) {
            ball.velocity.y = 1;
            console.log("Jump");
        }
        if (_event.code == "Space" && ball.position.y >= 300) {
            ball.velocity.y = -1;
        }
        else {
            console.log("error");
        }
    }
    function setUp() {
        ball = createBall();
        createWall();
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
        console.log(ball.position.y);
    }
    ;
    function createObstacle() {
    }
    function checkCollision() {
        //check ball
        if (ball.position.y > 600 || ball.position.y <= 80) {
            ball.velocity.y = 0;
        }
        //check obstacles
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
        for (let i = 0; i <= 1; i++) {
            const wall = {
                element: document.createElement("wall"),
                position: { x: windowwidtht, y: windowheight }
            };
            switch (i) {
                case (0):
                    wall.element.style.transform = "matrix(" + document.body.clientWidth + ",0,0,50,0,0 )";
                    document.body.appendChild(wall.element);
                    console.log("first wall");
                    walls[i] = wall;
                    break;
                case (1):
                    wall.element.style.transform = "matrix(" + document.body.clientWidth + ",0,0,-50,0," + document.body.clientHeight + " )";
                    document.body.appendChild(wall.element);
                    console.log("second wall");
                    walls[i] = wall;
            }
        }
        ;
    }
    ;
})(JumpingBall || (JumpingBall = {}));
//# sourceMappingURL=jumpingBall.js.map