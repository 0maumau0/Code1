"use strict";
var Events;
(function (Events) {
    console.log("Hello World");
    document.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log(_event);
    }
})(Events || (Events = {}));
//# sourceMappingURL=Event.js.map