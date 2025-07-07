namespace animation {

    type Vector = { x: number, y: number };
    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
    }


    window.addEventListener("load", handleLoad);
    const balls: Ball[] = [];

    function handleLoad(): void {

        for (let i: number = 0; i <= 3; i++) {
            const ball: Ball = {
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

    function move(): void {

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
}


