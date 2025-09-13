namespace Ballanimation{

    type Vector = { x: number, y: number };
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
    }
    //let blackHole = document.elementFromPoint(2, 2);

    window.addEventListener("load", handleLoad);
    const balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();


    function handleLoad(): void {
        document.body.addEventListener("click", handlClick);

        for (let i: number = 0; i < 2; i++) {
            createball();
        }
        update();
    }

    function update():void {

        const timeCurrent: number = Date.now();
        let timeDelta: number = timeCurrent - timePreviousFrame
        timeDelta /= 1000

        move(timeDelta);
       checkCollisionAll();

        timePreviousFrame = timeCurrent
        setTimeout(update, 16);
    }

    function move(_timeDelta: number): void {

        for (const ball of balls) {
            // for (let i = balls.length; i >= balls.length; i++) { 
            ball.position.x += ball.velocity.x * _timeDelta;
            ball.position.y += ball.velocity.y * _timeDelta;

            //let ball: Ball = balls[i];
            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform = "matrix(20,0,0,20," + ball.position.x + "," + ball.position.y + ")";
        }

    }

    function handlClick(_event: Event):void {
        const target: HTMLElement = <HTMLElement>(_event.target)
        console.log(target.tagName);

        if (target.tagName == "SPAN") {

            const targetParent: HTMLElement = target.parentElement!;
            targetParent?.removeChild(target)

        }
        if (target.tagName === "BODY") {
            createball();
        }
        // zur aufgabe auf den punkt wo geklickt wurde müsste man die funktion variable machen in dem man 
        //die parameter allgemeinhält und jeweils reingibt


    }

    function createball():void {
        const ball: Ball = {
            element: document.createElement("span"),
            position: { x: 100 + Math.floor(Math.random() * 300) + 2, y: 100 + (Math.random() * 300) + 2 },
            velocity: { x: 50 + Math.floor(Math.random() * 100) - 100, y: 50 + Math.floor(Math.random() * 100) - 100 },
        }
        document.body.appendChild(ball.element);

        //balls[i] = ball
        balls.push(ball);

    }

    function checkCollisionAll(): void {
        for (const a in balls) {
            for (let b: number = Number(a) + 1; b < balls.length; b++) {
                // checkCollision(Number(a),b);

                // let distance: number = Math.hypot(balls[a].position.x);
                // let threshhold: number = 2;
                // if (distance < threshhold){

                //     //watch mina to solve
                // }

            }
        }

    }
    // function checkCollision(_a:number, _b:number){
    //     let deltax:number = balls[_a].position.x- balls[_b].position.x; 
    //     let deltay:number = balls[_a].position.y- balls[_b].position.y;
    //     let collision
    // }













    // for (let i = balls.length; i >= 0; i--){



    //war nen versuch
    // console.log (balls[i]);
    //   console.log (target.id);
    //   let ballid = Number(target.id)

    // if (balls[i].id == ballid ){
    //  console.log()



    // else{
    // document.createElement(
    //create objekt
    // }
}

