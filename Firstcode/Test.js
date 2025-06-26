"use strict";
var Test;
(function (Test) {
    console.log("I like Overlord");
    let v = 1;
    v = v + 1;
    console.log(v);
    let a = ["hi", 7, "bye"];
    let greek;
    let speek;
    let right;
    speek = "Hallo";
    greek = 8;
    right = true;
    greek = greek + greek;
    console.log(greek);
    console.log(0.1 + 0.2); // flawed calculation
})(Test || (Test = {}));
// area calculation Triangle Rectangle w*h
let w = 5;
let h = 3;
let c;
c = 2;
w = w / c;
c = w * h;
console.log(c);
//oh noo task
let t = "Oh no! ";
t = t + t;
t = t + t;
console.log(t);
//nim try 
let z0 = 4;
let z1 = 7;
let z2 = 5;
let z3 = 3;
let result;
result = z0 ^ z1;
result = result ^ z2;
result = z1 ^ z2;
result = result ^ z3;
console.log(result);
{
    let x = 0;
    {
        //let x: number = 1;
        console.log(x);
    }
    console.log(x);
}
var IF_branch;
(function (IF_branch) {
    let x = 1;
    if (x == 1) {
        console.log("hello world");
    }
    else {
        console.log("goodbye");
    }
    console.log("done IF-branch");
})(IF_branch || (IF_branch = {}));
var Switch;
(function (Switch) {
    let x = 1;
    switch (x) {
        case 1:
            console.log("Hello");
            break;
        case 2:
            console.log("Goodbye");
            break;
        default:
            console.log("Hug");
            break;
    }
    console.log("Done Switch");
})(Switch || (Switch = {}));
//# sourceMappingURL=Test.js.map