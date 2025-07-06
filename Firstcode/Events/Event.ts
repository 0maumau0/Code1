namespace eventInspektor{

  window.addEventListener("load",handleLoad);
  
  function handleLoad(_event: Event):void{

    eventListener();
    handleMove();
    handleclick();
    handlekeypress();


  }
  
  function eventListener():void{

    const divs =document.querySelectorAll('div')
     document.addEventListener("mousemove", handleMove );
    divs.forEach(div => {
      div.addEventListener("click", handleclick);
      div.addEventListener("keyup", handlekeypress);
      
    });

  }

  // problem: span dont have settet size and inner text isnt completly
  function handleMove(_event: MouseEvent):void{
    console.log(_event)
    //console.log(_event.target)
    document.getElementById("cursorSpan")
    let span = document.getElementById("cursorSpan");
    span!.innerText= (_event.screenX ,"x", _event.screenY, "y");
    console.log(_event.screenX ,"x", _event.screenY, "y","oakdiiosajuifnjaouijfuiohuioashjf");
    
    
    

  }

  function handleclick(_event:Event):void{
    if(_event.currentTarget == window){
      console.log("ICh mag fische")
    }


  }
  
  function handlekeypress(){

  }

}