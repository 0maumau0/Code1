namespace Level1 {
    type Parent = Window & { gameState: number };
    declare let parent: Parent;
    parent.gameState = 0;
    console.log(parent.gameState);

    if (parent.gameState == 0){
        
    }
    
}