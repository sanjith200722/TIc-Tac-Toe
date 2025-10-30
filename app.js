let box=document.querySelectorAll(".button");
let val="O";
let par=document.createElement("p");
let box2=document.createElement("div");
let Return=document.createElement("button");
let plyagn=document.createElement("button");
box2.id="box2";
par.id="par";
Return.id="Return";
plyagn.id="plyagn";
Return.innerHTML="Home";
plyagn.innerHTML="Play again";
function winpage(s){
    if(s==="Draw"){
    par.innerHTML=s;
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
    }else
    par.innerHTML=s+" wins";
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
box.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        if(val==="O"){
            box[i].innerHTML="X";
            val="X";
        }else{
            box[i].innerHTML="O";
            val="O";
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
