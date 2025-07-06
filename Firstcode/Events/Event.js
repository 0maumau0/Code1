"use strict";
var eventInspektor;
(function (eventInspektor) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        eventListener();
        handleMove();
        handleclick();
        handlekeypress();
    }
    function eventListener() {
        const divs = document.querySelectorAll('div');
        document.addEventListener("mousemove", handleMove);
        divs.forEach(div => {
            div.addEventListener("click", handleclick);
            div.addEventListener("keyup", handlekeypress);
        });
    }
    // problem: span dont have settet size and inner text isnt completly
    function handleMove(_event) {
        console.log(_event);
        //console.log(_event.target)
        document.getElementById("cursorSpan");
        let span = document.getElementById("cursorSpan");
        span.innerText = (_event.screenX, "x", _event.screenY, "y");
        console.log(_event.screenX, "x", _event.screenY, "y", "oakdiiosajuifnjaouijfuiohuioashjf");
    }
    function handleclick(_event) {
        if (_event.currentTarget == window) {
            console.log("ICh mag fische");
        }
    }
    function handlekeypress() {
    }
})(eventInspektor || (eventInspektor = {}));
//# sourceMappingURL=Event.js.map