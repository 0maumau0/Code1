namespace Tankrace {
    type Vector = { x: number, y: number };
    type Tank = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: number,
        rotation: number,
    }



    window.addEventListener("load", handleload);
    let tank: Tank;
    let timePreviousFrame: number = 0;
    const keys: {[key:string]:boolean} ={};

    function handleload(): void {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: 0,
            rotation: 0,
        }
        document.body.appendChild(tank.element);

        document.body.addEventListener("mousemove", hndMouseMove);
        document.body.addEventListener("keydown", hndKeys);
        document.body.addEventListener("keyup", hndKeys);

        //start game loop
        update(0);
    }

    function hndMouseMove(_event: MouseEvent): void {
        tank.rotation += _event.movementX
    }

    function hndKeys(_event: KeyboardEvent): void {

        const down:boolean = _event.type == "keydown";
        keys[_event.key] = down;


        // if (_event.type == "keyup") {
        //     tank.velocity = 0;
        // }

        // switch (_event.key) {

        //     case "w":
        //         tank.velocity = 100;
        //         checkKey = false

        //         break;

        //     case "s":
        //         const backwards: number = Math.PI * tank.rotation / 180;
        //         tank.velocity = -100;

        //         break;
        //     default:
        //         tank.velocity = 0;
        // }



    }



    function update(_time: number): void {

        const timeCurrent: number = Date.now();
        let timeDelta: number = _time - timePreviousFrame;
        timeDelta /= 1000;

        processInput();
        move(timeDelta);

        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }

    function processInput(): void{
        tank.velocity = 0;
        if (checkKey("w")) {
            tank.velocity = 100;
        }
        if (checkKey("s")) {
             tank.velocity = -100;
             }
    }

    function checkKey(_key:string):boolean{
        console.log(keys)
        return keys [_key];
    }

    function move(_timeDelta: number): void {
        const radians: number = Math.PI * tank.rotation / 180;
        tank.position.x += tank.velocity * Math.cos(radians) * _timeDelta
        tank.position.y += tank.velocity * Math.sin(radians) * _timeDelta

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