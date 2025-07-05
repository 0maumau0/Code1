namespace eventInspektor{

  window.addEventListener("load",handleLoad);
  
  function handleLoad(_event: Event):void{

    eventListener();
    moveonMouse
    


  }
  
  function eventListener():void{

    const divs =document.querySelectorAll('div')
     document.addEventListener("mousemove", moveonMouse );
    divs.forEach(div => {
      div.addEventListener("click", mouseclick);
      div.addEventListener("keyup", key);
    });

  }

  function moveonMouse(_event: MouseEvent){
    console.log(_event)
    console.log(_event.target)
    
    
    


  }
  
  

}