namespace JumpingBall {

    type Vector = { x: number, y: number }
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
    };
    type Obstacle = {
        element: HTMLSpanElement,
        positon: Vector,
        velocity: Vector,
    };
    type Wall = {
        element: HTMLSpanElement,
        positon: Vector,
    };
    let ball: Ball;


    window.addEventListener("load", hndLoad);

    function hndLoad(): void {
        document.addEventListener("keypress", hndKeypress);

        ball =createBall();
        gameLoop();

    }

    function hndKeypress(_event: KeyboardEvent): void {
        if ( _event.code == " "){
            ball.velocity.y = 20
             }
    }


    function gameLoop(): void {
        createObstacle();


    }

    function createObstacle(): void {

    }

    function createBall(): Ball {
        const ball: Ball= {
            element: document.createElement("span"),
            position: { x: 80, y: 80 },
            velocity: { x: 0, y: 20 },
        };

        ball.element.style.transform = "matrix(20,0,0,20, " + ball.position.x + "," + ball.position.y + ")";
        document.body.appendChild(ball.element);

        return ball;
    }
}