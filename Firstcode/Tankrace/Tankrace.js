"use strict";
var Tankrace;
(function (Tankrace) {
    window.addEventListener("load", handleload);
    let tank;
    let timePreviousFrame = 0;
    const keys = {};
    function handleload() {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: 0,
            rotation: 0,
        };
        document.body.appendChild(tank.element);
        document.body.addEventListener("mousemove", hndMouseMove);
        document.body.addEventListener("keydown", hndKeys);
        document.body.addEventListener("keyup", hndKeys);
        //start game loop
        update(0);
    }
    function hndMouseMove(_event) {
        tank.rotation += _event.movementX;
    }
    function hndKeys(_event) {
        const down = _event.type == "keydown";
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
    function update(_time) {
        const timeCurrent = Date.now();
        let timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        processInput();
        move(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }
    function processInput() {
        tank.velocity = 0;
        if (checkKey("w")) {
            tank.velocity = 100;
        }
    }
    function checkKey(_key) {
        //console.log(keys)
        return keys[_key];
    }
    function move(_timeDelta) {
        const radians = Math.PI * tank.rotation / 180;
        tank.position.x += tank.velocity * Math.cos(radians) * _timeDelta;
        tank.position.y += tank.velocity * Math.sin(radians) * _timeDelta;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "matrix(" + matrix.toString() + ")";
    }
})(Tankrace || (Tankrace = {}));
//# sourceMappingURL=Tankrace.js.map