namespace Events{
console.log("Hello World");

document.addEventListener("load",handleLoad);


function handleLoad(_event:Event):void{
    console.log(_event)
}
}