"use strict";
var eventInspektor;
(function (eventInspektor) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        eventListener();
        moveonMouse;
    }
    function eventListener() {
        const divs = document.querySelectorAll('div');
        document.addEventListener("mousemove", moveonMouse);
        divs.forEach(div => {
            div.addEventListener("click", mouseclick);
            div.addEventListener("keyup", key);
        });
    }
    function moveonMouse(_event) {
        console.log(_event);
        console.log(_event.target);
    }
})(eventInspektor || (eventInspektor = {}));
//# sourceMappingURL=Event.js.map