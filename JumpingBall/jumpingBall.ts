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
        gameLoop();

    }


    function hndKeypress(_event: KeyboardEvent): void{
      
        if ( _event.code == "Space" && ball.position.y <=450){
           ball.velocity.y = 1+ accelerator /7;
           //console.log("Jump");  
             }
             if (_event.code == "Space" && ball.position.y>=450) {
                ball.velocity.y = -1 - accelerator/ 7;

             } else {
                
                
             }
    }

    function setUp(): void{
        
        ball =createBall();
        createWall();

    }

    function gameLoop(): void {
        spawnObstacle();
        displayState();
        checkCollision();

        requestAnimationFrame(gameLoop);
    }

    function displayState():void{

        ball.position.y = ball.position.y + ball.velocity.y
        ball.element.style.transform = "matrix(20,0,0,20,"+ ball.position.x+","+ball.position.y+")";

        console.log(accelerator)
        
       
            for (const barrier of obstacles ){
            

             //obstacles[i].position.x = obstacles[i].position.x + obstacles[i].velocity.x;
             //obstacles[i].element.style.transform = "matrix(10,0,0,40,"+ obstacles[i].position.x+","+obstacles[i].position.y+")";
             barrier.velocity.x = -1 - accelerator/5;
             barrier.position.x = barrier.position.x + barrier.velocity.x;
             barrier.element.style.transform = "matrix(10,0,0,40,"+barrier.position.x+","+barrier.position.y+")"
             
        }

    };



    function spawnObstacle(): void {
        counter++;
        if (counter + accelerator*3 == 240 && limit == false ){

            createObstacle();
           
            counter = 0;
             accelerator++;
        }

        if( accelerator>=50 && counter+ accelerator/10== 60){

            createObstacle();

            limit= true;
            accelerator ++;
            counter=0;
        }
        //console.log(counter);
    }



    function createObstacle():Obstacle{
        
        let barrier: Obstacle= {
                element: document.createElement("obstacles"),
                position: {x: 1500, y: Math.floor(Math.random() * (630 - 270 + 1) + 270)},
                velocity: {x: -1 - accelerator/7 ,y:0},
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