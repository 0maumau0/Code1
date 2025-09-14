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
        position: Vector,
    };
    let ball: Ball;
    let wall: Wall;
    const windowheight:number = 10;
    const windowwidtht:number = 10;
    


    window.addEventListener("load", hndLoad);

    function hndLoad(): void {
        
        document.addEventListener("keypress", hndKeypress);
        setUp();
        gameLoop();

    }


    function hndKeypress(_event: KeyboardEvent): void{
      
        if ( _event.code == "Space" && ball.position.y <=300){
           ball.velocity.y = 1;
           console.log("Jump");  
             }
             if (_event.code == "Space" && ball.position.y>=300) {
                ball.velocity.y = -1;

             } else {
                console.log("error");
                
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
        console.log(ball.position.y)

    };

    function createObstacle(): void {

    }

    function checkCollision():void{
        
        //check ball
        if ( ball.position.y > 600 || ball.position.y <=80){
            ball.velocity.y = 0;
        }
        //check obstacles

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

        const wall: Wall = {
            element: document.createElement("wall"),
            position: {x: windowwidtht,y: windowheight}
        }

        wall.element.style.transform = "matrix("+document.body.clientWidth+",0,0,30,0,0 )";
        document.body.appendChild(wall.element);

        return wall
    };
}