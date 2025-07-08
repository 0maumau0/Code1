"use strict";
var Tankrace;
(function (Tankrace) {
    window.addEventListener("load", handleload);
    let tank;
    let timePreviousFrame = 0;
    function handleload() {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        };
        document.body.appendChild(tank.element);
        //start game loop
        update(0);
    }
    function update(_time) {
        const timeCurrent = Date.now();
        let timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        move(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }
    function move(_timeDelta) {
        tank.rotation += 1;
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