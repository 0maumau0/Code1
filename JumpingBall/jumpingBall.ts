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
    const walls:Wall[] =[];
    
    


    window.addEventListener("load", hndLoad);

    function hndLoad(): void {
        
        console.log(document.body.clientHeight);
        document.addEventListener("keypress", hndKeypress);
        setUp();
        gameLoop();

    }


    function hndKeypress(_event: KeyboardEvent): void{
      
        if ( _event.code == "Space" && ball.position.y <=450){
           ball.velocity.y = 1;
           console.log("Jump");  
             }
             if (_event.code == "Space" && ball.position.y>=450) {
                ball.velocity.y = -1;

             } else {
                console.log("error");
                
             }
    }

    function setUp(): void{
        
        ball =createBall();
        createWall();

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
        if ( ball.position.y == 270 || ball.position.y == 630){
            ball.velocity.y = 0;
        }
        //check obstacles

    };



    function createBall(): Ball {
        const ball: Ball= {
            element: document.createElement("span"),
            position: { x: 100, y: 270},
            velocity: { x: 0, y: 0 },
        };

        ball.element.style.transform = "matrix(20,0,0,20, " + ball.position.x + "," + ball.position.y + ")";
        document.body.appendChild(ball.element);

        return ball;
    }



    function createWall(): void {
        
            for (let i:number =0; i<=1; i++){

             
            const wall: Wall = {
            element: document.createElement("wall"),
            position: {x: 0,y: 200}
            }
  
            switch (i){
            case (0):
            wall.element.style.transform = "matrix("+1500+",0,0,50,"+wall.position.x+","+wall.position.y+" )";
            document.body.appendChild(wall.element);
            console.log("first wall");
            walls [i] = wall;
            break;
            
           case (1):
             wall.element.style.transform = "matrix("+1500+",0,0,50,0,"+700+" )";
            document.body.appendChild(wall.element);
            console.log("second wall");
            walls [i] = wall;
            break;

            }
        };

 };
}