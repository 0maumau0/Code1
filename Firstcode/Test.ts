namespace Test {

    console.log("I like Overlord");
    let v: number = 1;
    v = v + 1;
    console.log(v);
    let a = ["hi", 7, "bye"]
    let greek: number;
    let speek: string;
    let right: boolean;
    speek = "Hallo";
    greek = 8;
    right = true;
    greek = greek + greek;
    console.log(greek)
    console.log(0.1 + 0.2); // flawed calculation
}

// area calculation Triangle Rectangle w*h
let w: number = 5;
let h: number = 3;
let c: number;
c = 2;
w = w / c;
c = w * h;
console.log(c)

//oh noo task
let t: string = "Oh no! ";
t = t + t;
t = t + t;
console.log(t)

//nim try 
let z0: number = 4;
let z1: number = 7;
let z2: number = 5;
let z3: number = 3;
let result: number;
result = z0 ^ z1;
result = result ^ z2;
result = z1 ^ z2;
result = result ^ z3;
console.log(result);

{
    let x: number = 0;
    {
        //let x: number = 1;
        console.log(x);
    }
    console.log(x);
}

namespace IF_branch 
{
    let x: number = 1
    if (x == 1) {
        console.log("hello world");}
    else {
        console.log("goodbye");
    }
    console.log("done");
}
