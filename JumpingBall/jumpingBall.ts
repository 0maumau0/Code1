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
    let wall: Wall;
    


    window.addEventListener("load", hndLoad);

    function hndLoad(): void {
        document.addEventListener("keypress", hndKeypress);

        setUp();
        gameLoop();

    }


    function hndKeypress(_event: KeyboardEvent): void {
        if ( _event.code == "Space"){
            ball.velocity.y = 1
            console.log("Jump");  
             }
    }

    function setUp(): void{
        
        ball =createBall();
        wall =createWall();

    }

    function gameLoop(): void {
        displayState();
        createObstacle();
        checkCollision();

        requestAnimationFrame(gameLoop);
    }

    function displayState():void{
        ball.position.y = ball.position.y + ball.velocity.y
        ball.element.style.transform = "matrix(20,0,0,20,"+ ball.position.x+","+ball.position.y+")";
        //console.log(ball.position.y)

    };

    function createObstacle(): void {

    }

    function checkCollision():void{

    };



    function createBall(): Ball {
        const ball: Ball= {
            element: document.createElement("span"),
            position: { x: 80, y: 80 },
            velocity: { x: 0, y: 0 },
        };

        ball.element.style.transform = "matrix(20,0,0,20, " + ball.position.x + "," + ball.position.y + ")";
        document.body.appendChild(ball.element);

        return ball;
    }


    
    function createWall(): Wall {


        return wall
    };
}