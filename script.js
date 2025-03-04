let text = document.getElemenyById("text")
let button1 = document.getElementById("button1")
let clickcount= 0;
button1.addEventListener ("click", yell);
function yell() {
clickcount++;
if( clickcount == 1){
    text.innerHTML = "PLEASE STOP TOUCHING ME, IM WARNING YOU PAL";
}

}