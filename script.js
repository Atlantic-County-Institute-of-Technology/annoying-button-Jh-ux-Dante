let message = document.getElementById("message");
let button1 = document.getElementById("button1");
let body = document.getElementById("body");
let button = document.getElementById("body")

let clicks=0

button1.addEventListener("click" , annoy);

function annoy (){
    clicks++;
    if(clicks == 3) {
        message.innerHTML = "STOP TOUCHING ME IM WARNING YOU PAL";
    }
    else if(clicks == 6){
        message.innerHTML = "WHAT DID I JUST SAY!!"
    }
}