let box=document.querySelectorAll(".button");
let play=document.querySelector("#play");
let turn=document.querySelector("#turn");
let val="O";
let par=document.createElement("p");
let box2=document.createElement("div");
let tutorial=document.createElement("div");
let tpar=document.createElement("p");
let okay=document.createElement("button");
let Return=document.createElement("button");
let plyagn=document.createElement("button");
box2.id="box2";
par.id="par";
Return.id="Return";
plyagn.id="plyagn";
tutorial.id="tutorial";
tpar.id="tpar";
okay.id="okay";
Return.innerHTML="Home";
plyagn.innerHTML="Play again";
tpar.innerHTML="First click is 'X's turn and second is 'O's turn."
okay.innerHTML="Okay";

function ftutorial(){
document.querySelector("body").prepend(tutorial);
tutorial.prepend(okay);
tutorial.prepend(tpar);
okay.addEventListener("click",()=>{
        window.location.href="main.html";
    })
}
if(play){
play.addEventListener("click",()=>{
        ftutorial();
    })
}
function winpage(s){
    if(s==="Draw"){
    par.innerHTML=s;
      if(turn){
    turn.innerHTML="Match Draw";
}
    document.querySelector("body").prepend(box2);
    box2.prepend(Return);
    box2.prepend(plyagn);
    box2.prepend(par);
    Return.addEventListener("click",()=>{
        window.location.href="index.html";
    })
    plyagn.addEventListener("click",()=>{
        window.location.href="main.html";
    })
    }else{
    par.innerHTML=s+" wins";
    if(turn){
    turn.innerHTML=s+" wins";
    }
    document.querySelector("body").prepend(box2);
    box2.prepend(Return);
    box2.prepend(plyagn);
    box2.prepend(par);
    Return.addEventListener("click",()=>{
        window.location.href="index.html";
    })
    plyagn.addEventListener("click",()=>{
        window.location.href="main.html";
    })
}
}
if(val==="O"){
    if(turn){
    turn.innerHTML="Now 'X's turn";
}
 }
box.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        if(val==="O"){
            box[i].innerHTML="X";
            val="X";
             if(turn){
    turn.innerHTML="Now 'O's turn";
}
        }else{
            box[i].innerHTML="O";
            val="O";
              if(turn){
    turn.innerHTML="Now 'X's turn";
}
        }
        if((box[0].innerHTML==="X" && box[1].innerHTML==="X" && box[2].innerHTML==="X")||(box[3].innerHTML==="X" && box[4].innerHTML==="X" && box[5].innerHTML==="X")||
           (box[6].innerHTML==="X" && box[7].innerHTML==="X" && box[8].innerHTML==="X")||(box[0].innerHTML==="X" && box[3].innerHTML==="X" && box[6].innerHTML==="X")||
           (box[1].innerHTML==="X" && box[4].innerHTML==="X" && box[7].innerHTML==="X")||(box[2].innerHTML==="X" && box[5].innerHTML==="X" && box[8].innerHTML==="X")||
           (box[0].innerHTML==="X" && box[4].innerHTML==="X" && box[8].innerHTML==="X")||(box[2].innerHTML==="X" && box[4].innerHTML==="X" && box[6].innerHTML==="X"))
           {
            winpage("X");
           }else if((box[0].innerHTML==="O" && box[1].innerHTML==="O" && box[2].innerHTML==="O")||(box[3].innerHTML==="O" && box[4].innerHTML==="O" && box[5].innerHTML==="O")||
           (box[6].innerHTML==="O" && box[7].innerHTML==="O" && box[8].innerHTML==="O")||(box[0].innerHTML==="O" && box[3].innerHTML==="O" && box[6].innerHTML==="O")||
           (box[1].innerHTML==="O" && box[4].innerHTML==="O" && box[7].innerHTML==="O")||(box[2].innerHTML==="O" && box[5].innerHTML==="O" && box[8].innerHTML==="O")||
           (box[0].innerHTML==="O" && box[4].innerHTML==="O" && box[8].innerHTML==="O")||(box[2].innerHTML==="O" && box[4].innerHTML==="O" && box[6].innerHTML==="O"))
           {
            winpage("O");
           }else if(box[0].innerHTML!=="" && box[1].innerHTML!=="" && box[2].innerHTML!=="" && box[3].innerHTML!=="" && box[4].innerHTML!=="" && box[5].innerHTML!=="" &&
           box[6].innerHTML!=="" && box[7].innerHTML!=="" && box[8].innerHTML!=="")
           {
            winpage("Draw");
           }
    })
})
