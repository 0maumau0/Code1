namespace JumpingBall {

    type Vector = { x: number, y: number }
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
    };
    type Obstacle = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
    };
    type Wall = {
        element: HTMLSpanElement,
        position: Vector,
    };
    let ball: Ball;
    const walls:Wall[] =[];
    let obstacles:Obstacle[] = [];
    let counter:number=0;
    let accelerator:number= 0;
    let limit:boolean=false;
    
    


    window.addEventListener("load", hndLoad);

    function hndLoad(): void {
        
        console.log(document.body.clientHeight);
        document.addEventListener("keypress", hndKeypress);
        setUp();
       // gameLoop();

    }


    function hndKeypress(_event: KeyboardEvent): void{
      
        if ( _event.code == "Space" && ball.position.y <=450){
           ball.velocity.y = 1+ accelerator /100;
           console.log("Jump");  
             }
             if (_event.code == "Space" && ball.position.y>=450) {
                ball.velocity.y = -1 - accelerator/ 100;

             } else {
                gameLoop();
                
             }
    }

    function setUp(): void{
        
        ball =createBall();
        createWall();

    }

    function gameLoop(): void {
        adjustObstacle();
        displayState();
        checkCollision();

        requestAnimationFrame(gameLoop);
    }

    function displayState():void{

        ball.position.y = ball.position.y + ball.velocity.y
        ball.element.style.transform = "matrix(20,0,0,20,"+ ball.position.x+","+ball.position.y+")";

        console.log(obstacles.length);
       
        if (obstacles.length >0){
            console.log(obstacles.length);
            console.log(obstacles[0]);
             console.log(obstacles[1]);
            for (let n:number = obstacles.length; n=0; n-- );{
            let b:number =obstacles.length;
            obstacles[b].position.x= obstacles[b].position.x + obstacles[b].velocity.x;
             obstacles[b].element.style.transform = "matrix(10,0,0,40,"+ obstacles[b].position.x+","+obstacles[b].position.x+")";
             b--;
        }
        }
    };



    function adjustObstacle(): void {
        counter++;
        if (counter + accelerator == 360 && limit == false ){

            createObstacle();
           
            counter = 0;
             accelerator++;
        }

        if( accelerator>=240 && counter== 120){

            createObstacle();

            limit= true;
            accelerator ++;
            counter=0;
        }
        //console.log(counter);
    }



    function createObstacle():Obstacle{
        
        let barrier: Obstacle= {
                element: document.createElement("wall"),
                position: {x: 1500, y: Math.floor(Math.random() * (630 - 270 + 1) + 270)},
                velocity: {x: 1 + accelerator/100 ,y:0},
            }

            barrier.element.style.transform = "matrix(10,0,0,40,"+barrier.position.x+","+barrier.position.y+")";
            document.body.appendChild(barrier.element);
            obstacles.push(barrier);
            return barrier;
    }

    function checkCollision():void{
        
        //check ball
        if ( ball.position.y <= 270 || ball.position.y >= 630){
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
            //console.log("first wall");
            walls [i] = wall;
            break;
            
           case (1):
             wall.element.style.transform = "matrix("+1500+",0,0,50,0,"+700+" )";
            document.body.appendChild(wall.element);
            //console.log("second wall");
            walls [i] = wall;
            break;

            }
        };

 };
}