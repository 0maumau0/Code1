namespace Level2{
    type Parent = Window & { gameState: number };
    declare let parent: Parent;

    if (parent.gameState == 0){

        console.log("Mond")
    }

}