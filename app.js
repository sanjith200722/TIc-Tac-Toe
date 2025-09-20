let box=document.querySelectorAll(".button");
let val="O";
box.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        if(box[0].innerHTML==="X" && box[1].innerHTML==="X" && box[2].innerHTML==="X"){
            console.log("X win");
        }else if(box[3].innerHTML==="X" && box[4].innerHTML==="X" && box[5].innerHTML==="X"){
            console.log("X win");
        }else if(box[6].innerHTML==="X" && box[7].innerHTML==="X" && box[8].innerHTML==="X"){
            console.log("X win");
        }else if(box[0].innerHTML==="X" && box[3].innerHTML==="X" && box[6].innerHTML==="X"){
            console.log("X win");
        }else if(box[1].innerHTML==="X" && box[4].innerHTML==="X" && box[7].innerHTML==="X"){
            console.log("X win");
        }else if(box[2].innerHTML==="X" && box[5].innerHTML==="X" && box[8].innerHTML==="X"){
            console.log("X win");
        }else if(box[0].innerHTML==="X" && box[4].innerHTML==="X" && box[8].innerHTML==="X"){
            console.log("X win");
        }else if(box[2].innerHTML==="X" && box[4].innerHTML==="X" && box[6].innerHTML==="X"){
            console.log("X win");
        }else if(box[0].innerHTML==="O" && box[1].innerHTML==="O" && box[2].innerHTML==="O"){
            console.log("O win");
        }else if(box[3].innerHTML==="O" && box[4].innerHTML==="O" && box[5].innerHTML==="O"){
            console.log("O win");
        }else if(box[6].innerHTML==="O" && box[7].innerHTML==="O" && box[8].innerHTML==="O"){
            console.log("O win");
        }else if(box[0].innerHTML==="O" && box[3].innerHTML==="O" && box[6].innerHTML==="O"){
            console.log("O win");
        }else if(box[1].innerHTML==="O" && box[4].innerHTML==="O" && box[7].innerHTML==="O"){
            console.log("O win");
        }else if(box[2].innerHTML==="O" && box[5].innerHTML==="O" && box[8].innerHTML==="O"){
            console.log("O win");
        }else if(box[0].innerHTML==="O" && box[4].innerHTML==="O" && box[8].innerHTML==="O"){
            console.log("O win");
        }else if(box[2].innerHTML==="O" && box[4].innerHTML==="O" && box[6].innerHTML==="O"){
            console.log("O win");
        }else
        if(val==="O"){
            box[i].innerHTML="X";
            val="X";
        }else{
            box[i].innerHTML="O";
            val="O";
        }
    })
})