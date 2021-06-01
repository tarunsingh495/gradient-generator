var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var bt=document.getElementById("new-bg");
var show=document.getElementById("display-style");
function setgradient(){
    body.style.background= "linear-gradient(to right,"+color1.value+"," +color2.value + ")";
    show.value=body.style.background;
}

function generate_Bg(){
    var randomColor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor2=  '#'+Math.floor(Math.random()*16777215).toString(16);
    body.style.background="linear-gradient(to right,"+randomColor1+","+randomColor2+")";
    show.value=body.style.background;
}
bt.addEventListener("click",generate_Bg);
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);