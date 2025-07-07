"use strict";
var eventInspektor;
(function (eventInspektor) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        eventListener();
    }
    function eventListener() {
        const divs = document.querySelectorAll('div');
        document.addEventListener("mousemove", handleMove);
        divs.forEach(div => {
            div.addEventListener("click", handleClick);
            div.addEventListener("keyup", handleKeypress);
        });
    }
    // problem: span dont have settet size and inner text isnt completly
    function handleMove(_event) {
        console.log(_event);
        let span = document.getElementById("cursorSpan");
        span.innerText = _event.screenX + "x" + _event.screenY + "y" + _event.target;
        console.log(_event.screenX, "x", _event.screenY, "y", "oakdiiosajuifnjaouijfuiohuioashjf");
        span.style.top = _event.screenX + 10;
        span.style.left = _event.screenY + 10;
        //geht mit '{$......}' und auch mit array möglich. code von den anderen anschauen.
    }
    function handleClick(_event) {
        if (_event.currentTarget == window) {
            console.log("ICh mag fische");
        }
    }
    function handleKeypress() {
    }
})(eventInspektor || (eventInspektor = {}));
//# sourceMappingURL=Event.js.map