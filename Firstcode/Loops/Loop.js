"use strict";
var RolltheDice;
(function (RolltheDice) {
    console.log("Hello World");
    let x;
    let r;
    let d;
    let a;
    let s;
    let n;
    console.log(RolltheDice.data[1]["min"]);
    newLoop();
    function newLoop() {
        PromptforDicesandRows();
        startLoop();
    }
    function PromptforDicesandRows() {
        let p = prompt("how much rollls you wanna have? ");
        r = Math.abs(p);
        p = prompt("how much d4 Dices ??");
        RolltheDice.data[0]["dice"] = Math.abs(p);
        p = prompt("how much d6 Dices ??");
        RolltheDice.data[1]["dice"] = Math.abs(p);
        p = prompt("how much d8 Dices ??");
        RolltheDice.data[2]["dice"] = Math.abs(p);
        p = prompt("how much d12 Dices ??");
        RolltheDice.data[3]["dice"] = Math.abs(p);
        p = prompt("how much d20 Dices ??");
        RolltheDice.data[4]["dice"] = Math.abs(p);
        d = RolltheDice.data[0]["dice"] + RolltheDice.data[1]["dice"] + RolltheDice.data[2]["dice"] + RolltheDice.data[3]["dice"] +
            RolltheDice.data[4]["dice"];
        console.log(RolltheDice.data[0]["dice"]);
        console.log(d);
        // i gues works also in 1 array
    }
    function startLoop() {
        for (let i = r; i > 0; i--) {
            RolltheDices();
        }
    }
    function RolltheDices() {
        console.log("roll the d4 Dices");
        for (let i = RolltheDice.data[0]["dice"]; i > 0; i--) {
            let n = Math.floor((Math.random() * RolltheDice.data[0]["max"]) + RolltheDice.data[0]["min"]);
            console.log(n);
            RolltheDice.data[4][0 + i] = n;
        }
    }
})(RolltheDice || (RolltheDice = {}));
//# sourceMappingURL=Loop.js.map