namespace RolltheDice {

    console.log("Hello World")

    // let x: number;
    let r: number;
    // let d: number;
    // let a: number;
    let s: number;
    // let n: number;

    console.log(data[1]["min"]);


    newLoop();


    function newLoop():void {

        promptforDicesandRows();
        startLoop();
    }



    function promptforDicesandRows():void {

        let p: string = prompt("how much rollls you wanna have? ")!;
        const absolute:number = Number(p);
        r = absolute;

        p = prompt("how much d4 Dices ??")!;
        data[0]["dice"] = absolute;

        p = prompt("how much d6 Dices ??")!;
        data[1]["dice"] = absolute;

        p = prompt("how much d8 Dices ??")!;
        data[2]["dice"] = absolute;

        p = prompt("how much d12 Dices ??")!;
        data[3]["dice"] = absolute;

        p = prompt("how much d20 Dices ??")!;
        data[4]["dice"] = absolute;


        // d = data[0]["dice"] + data[1]["dice"] + data[2]["dice"] + data[3]["dice"] +
        //     data[4]["dice"];


        //console.log(data[0]["dice"]);
        //console.log(d);
        // i gues works also in 1 array
    }


    function startLoop():void {

        for (let i:number  = r ; i > 0; i--) {

            rolltheDices();
        }
    }


    function rolltheDices():void {

        rollD4();
        rollD6();
        rollD8();
        // rollD12();
        // rollD20();

    }



    function rollD4():void {


        console.log("roll the d4 Dices");
        s = 0;

        //Dice d4
        for (let i: number = data[0]["dice"]; i > 0; i--) {

            const n: number  = Math.floor((Math.random() * data[0]["max"]) + data[0]["min"]);

            console.log(n);

            data[5][0 + i] = n;

            //console.log( "new data 5",data[5][0+i]);

            s = s + data[5][0 + i];
            //console.log("new sum", s);

        }

        data[0]["sum"] = (s);
        console.log(data[0]["sum"], "sum of data d4")
    }


    function rollD6():void {

        console.log("roll the d6 Dices");
        s = 0;

        //Dice d6

        for (let i:number = data[1]["dice"]; i > 0; i--) {

            const n:number = Math.floor((Math.random() * data[1]["max"]) + data[1]["min"]);

            console.log(n);

            data[5][0 + i] = n;

            //console.log( "new data 5",data[5][0+i]);

            s = s + data[5][0 + i];
            //console.log("new sum", s);

        }

        data[1]["sum"] = (s);
        console.log(data[1]["sum"],"sum of d6")



    }

    function rollD8():void {

         console.log("roll the d8 Dices");
        s = 0;

        //Dice d8

        for (let i:number = data[2]["dice"]; i > 0; i--) {

            const n:number = Math.floor((Math.random() * data[2]["max"]) + data[2]["min"]);

            console.log(n);

            data[5][0 + i] = n;

            //console.log( "new data 5",data[5][0+i]);

            s = s + data[5][0 + i];
            console.log("new sum", s);

        }

        data[2]["sum"] = (s);
        console.log(data[2]["sum"], "sum of d8")

    }

    // function rollD12() {

    // }

    // function rollD20() {

    // }
} 