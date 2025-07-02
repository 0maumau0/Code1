namespace NIM {

    let Array: number[] = [0, 0, 0, 0];
    let aktiveplayer: boolean;
    aktiveplayer = false;

    fillRows();
    PlayaRound();

    function fillRows() {
        let lamp: any = prompt("how much lamps"); // type string do a problem by lamp
        Array[0] = parseInt(lamp);
        Array[3] = Array[2] = Array[1] = Array[0];

        if (Array[0] > 10 || Array[0] < 0) {
            console.log("not valid lamp number");
            return fillRows()

        }
        else {
            console.log(Array[0] + " lamps are builded");

        }
    }



    function PlayaRound(){

    displayState();
    chooseRowAmmount();
    changeState();
    checkWin();

    //need loop function (recurve)-)
    // function PLayaRound
    //- display state
    //- choose row and ammount
    //- change state
    //- check win
    //- function PlayaRound

    function displayState() {
        if (aktiveplayer == false) {
            console.log("Player 1's turn");
        }
        else {
            console.log("Player 2's turn");
        }

        console.log("a,b,c,d");
        console.log(Array);

    }


    function chooseRowAmmount(){}

    function changeState(){}

    function checkWin(){}

}
}
