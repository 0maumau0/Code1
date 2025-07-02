namespace RolltheDice {

    console.log("Hello World")

    let x: number;
    let r: number;
    let d: number;
    let a: number;
    let s: number;
    let n: number;

    console.log(data[1] ["min"]);

    
    newLoop();

   
   function newLoop(){

        PromptforDicesandRows();
        startLoop();
   }
   
   
   
    function PromptforDicesandRows() {

        let p: any = prompt("how much rollls you wanna have? ");
        r = Math.abs(p);

        p= prompt("how much d4 Dices ??");
        data[0]["dice"]= Math.abs(p);

        p= prompt("how much d6 Dices ??");
        data[1]["dice"]= Math.abs(p);

        p= prompt("how much d8 Dices ??");
        data[2]["dice"]= Math.abs(p);

        p= prompt("how much d12 Dices ??");
        data[3]["dice"]= Math.abs(p);

        p= prompt("how much d20 Dices ??");
        data[4]["dice"]= Math.abs(p);


        d= data[0]["dice"] + data[1]["dice"] + data[2]["dice"] + data[3]["dice"] + 
        data[4]["dice"];


        console.log(data[0]["dice"]);
        console.log(d);
        // i gues works also in 1 array
    }


    function startLoop() {

        for (let i = r; i> 0; i--){

            RolltheDices();
        }
    }


    function RolltheDices(){

        console.log("roll the d4 Dices");


        for(let i = data[0]["dice"]; i>0 ; i--){

            let n = Math.floor(( Math.random() *data[0]["max"]) +data[0]["min"]) 

            console.log(n)

            data[4][0+i] = n

        } 

    }
}