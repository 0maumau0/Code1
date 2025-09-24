"use strict";
var JumpingBall;
(function (JumpingBall) {
    let ball;
    const walls = [];
    let obstacles = [];
    let counter = 0;
    let accelerator = 0;
    let limit = false;
    let points = 0;
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        console.log(document.body.clientHeight);
        document.addEventListener("keypress", hndKeypress);
        setUp();
        gameLoop();
    }
    function hndKeypress(_event) {
        if (_event.code == "Space" && ball.position.y <= 450) {
            ball.velocity.y = 1 + accelerator / 5;
            //console.log("Jump");  
        }
        if (_event.code == "Space" && ball.position.y >= 450) {
            ball.velocity.y = -1 - accelerator / 5;
        }
        else {
        }
    }
    function setUp() {
        ball = createBall();
        createWall();
        alert("ready?");
    }
    function gameLoop() {
        spawnObstacle();
        displayState();
        checkCollision();
        requestAnimationFrame(gameLoop);
    }
    function displayState() {
        ball.position.y = ball.position.y + ball.velocity.y;
        ball.element.style.transform = "matrix(" + ball.size.x + ",0,0," + ball.size.y + "," + ball.position.x + "," + ball.position.y + ")";
        console.log(accelerator);
        for (const barrier of obstacles) {
            //obstacles[i].position.x = obstacles[i].position.x + obstacles[i].velocity.x;
            //obstacles[i].element.style.transform = "matrix(10,0,0,40,"+ obstacles[i].position.x+","+obstacles[i].position.y+")";
            barrier.velocity.x = -1 - accelerator / 5;
            barrier.position.x = barrier.position.x + barrier.velocity.x;
            barrier.element.style.transform = "matrix(" + barrier.size.x + ",0,0," + barrier.size.y + "," + barrier.position.x + "," + barrier.position.y + ")";
        }
    }
    ;
    function spawnObstacle() {
        counter++;
        if (counter + accelerator * 3 == 240 && limit == false) {
            createObstacle();
            counter = 0;
            accelerator++;
            points++;
        }
        if (accelerator > 50 && counter + accelerator / 10 >= 60) {
            createObstacle();
            limit = true;
            accelerator++;
            counter = 0;
            points++;
        }
        //console.log(counter);
    }
    function createObstacle() {
        let barrier = {
            element: document.createElement("obstacles"),
            position: { x: 1500, y: Math.floor(Math.random() * (630 - 270 + 1) + 270) },
            velocity: { x: -1 - accelerator / 10, y: 0 },
            size: { x: 10, y: 40 },
        };
        barrier.element.style.transform = "matrix(" + barrier.size.x + ",0,0," + barrier.size.y + "," + barrier.position.x + "," + barrier.position.y + ")";
        document.body.appendChild(barrier.element);
        obstacles.push(barrier);
        return barrier;
    }
    function checkCollision() {
        //check ball
        if (ball.position.y <= 270 || ball.position.y >= 630) {
            ball.velocity.y = 0;
        }
        //check obstacles    
        for (const barrier of obstacles) {
            if (barrier.position.x < ball.position.x && barrier.position.x + barrier.size.x > ball.position.x) {
                console.log(" x ");
                if (barrier.position.y < ball.position.y && barrier.position.y + barrier.size.y > ball.position.y) {
                    console.log(" y ");
                    alert("you Loose with " + points + " points");
                    window.location.reload();
                }
            }
        }
        ;
    }
    ;
    function createBall() {
        const ball = {
            element: document.createElement("span"),
            position: { x: 100, y: 270 },
            velocity: { x: 0, y: 0 },
            size: { x: 20, y: 20 },
        };
        ball.element.style.transform = "matrix(" + ball.size.x + ",0,0," + ball.size.y + ", " + ball.position.x + "," + ball.position.y + ")";
        document.body.appendChild(ball.element);
        return ball;
    }
    ;
    function createWall() {
        for (let i = 0; i <= 1; i++) {
            const wall = {
                element: document.createElement("wall"),
                position: { x: 0, y: 200 }
            };
            switch (i) {
                case (0):
                    wall.element.style.transform = "matrix(" + 1500 + ",0,0,50," + wall.position.x + "," + wall.position.y + " )";
                    document.body.appendChild(wall.element);
                    //console.log("first wall");
                    walls[i] = wall;
                    break;
                case (1):
                    wall.element.style.transform = "matrix(" + 1500 + ",0,0,50,0," + 700 + " )";
                    document.body.appendChild(wall.element);
                    //console.log("second wall");
                    walls[i] = wall;
                    break;
            }
        }
        ;
    }
    ;
})(JumpingBall || (JumpingBall = {}));
//# sourceMappingURL=jumpingBall.js.map