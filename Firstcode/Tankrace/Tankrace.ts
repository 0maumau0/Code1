namespace Tankrace {
    type Vector = { x: number, y: number };
    type Tank = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
        rotation: number,
    }

    window.addEventListener("load", handleload);
    let tank: Tank;
    let timePreviousFrame:number = 0;

    function handleload(): void {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        }
        document.body.appendChild(tank.element);
        //start game loop
        update(0);
    }


    function update(_time: number): void {

        const timeCurrent: number = Date.now();
        let timeDelta: number = _time - timePreviousFrame;
        timeDelta /= 1000;

        move(timeDelta);

        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }

    function move(_timeDelta: number): void {
        tank.rotation += 1;
        const matrix: string = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }

    function createMatrix(_translation: Vector, _rotation: number, _scale: Vector): string {
        const sin: number = Math.sin(Math.PI * _rotation / 180);
        const cos: number = Math.cos(Math.PI * _rotation / 180);
        const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];

        return "matrix(" + matrix.toString() + ")";
    }
}