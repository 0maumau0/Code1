namespace eventInspektor {

  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
    eventListener();
  }

  function eventListener(): void {
    const divs = document.querySelectorAll('div');
    document.addEventListener("mousemove", handleMove);
    divs.forEach(div => {
      div.addEventListener("click", handleClick);
      div.addEventListener("keyup", handleKeypress);
    });
  }

  // problem: span dont have settet size and inner text isnt completly
  function handleMove(_event: MouseEvent): void {
    console.log(_event)
    let span = document.getElementById("cursorSpan") as HTMLElement;
    span.innerText = _event.screenX + "x" + _event.screenY + "y" + _event.target;
    console.log(_event.screenX, "x", _event.screenY, "y", "oakdiiosajuifnjaouijfuiohuioashjf");
    span.style.top ='${ _event.screenX + 10}px';
    span.style.left= '${_event.screenY + 10}px';
   //warum klappt das nicht
  }

  function handleClick(_event: Event): void {
    if (_event.currentTarget == window) {
      console.log("ICh mag fische");
    }
  }

  function handleKeypress() {
  }
}