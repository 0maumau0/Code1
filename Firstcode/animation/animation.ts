namespace animation{

    type Vector = { x: number, y: number };

    const position: Vector = { x: 100, y: 100 };
    const velocity: Vector = { x: 1, y: 1 };
    let ball: HTMLSpanElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
         ball = document.querySelector("span");
         move();
    }

    function move(): void {
        position.x += velocity.x;
        position.y += velocity.y;

        ball.style.transform = "matrix+(20,0,0,20,+" + position.x + "," + position.y + ")";
        setTimeout(move, 16);
    }

}
