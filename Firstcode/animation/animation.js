"use strict";
var animation;
(function (animation) {
    const position = { x: 100, y: 100 };
    const velocity = { x: 1, y: 1 };
    let ball;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        ball = document.querySelector("span");
        move();
    }
    function move() {
        position.x += velocity.x;
        position.y += velocity.y;
        ball.style.transform = "matrix+(20,0,0,20,+" + position.x + "," + position.y + ")";
        setTimeout(move, 16);
    }
})(animation || (animation = {}));
//# sourceMappingURL=animation.js.map