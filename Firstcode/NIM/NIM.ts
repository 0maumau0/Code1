namespace NIM {

    let a: number, b: number, c: number, d: number;
    let aktiveplayer: boolean;
    aktiveplayer = false;
    //console.log(a, b, c, d);

    function fillRows(a: number,b: number,c: number, d: number) {
        let lamp = prompt("how much lamps");
        a = parseInt("lamp");
        d = c = b = a;

        if (a> 10 && a<0) {
            console.log("not valid lamp number");
            return fillRows

        }
        else {
            console.log(a + " lamps are builded");
            return
        }
    }
    

    //need loop function (recurve)
    // function PLayaRound
    //- display satte
    //- choose row and ammount
    //- change state
    //- check win
    //- change player
    //- function PlayaRound
   
    function displayState(a: number,b: number,c: number, d: number, aktiveplayer: boolean) {
        if (aktiveplayer == false) {
            console.log("Player 1's turn");
        }
        else {
            console.log("Player 2's turn");
        }

        console.log("a,b,c,d");
        console.log(a, b, c, d);

    }


}
