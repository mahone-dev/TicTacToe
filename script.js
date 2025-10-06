let boxes =  document.querySelectorAll(".box") ;
let reset = document.querySelector("#resetbtn") ;
let msg = document.querySelector("#msg") ;
let msgcont = document.querySelector(".msg-cont");
let newgame = document.querySelector("#newbtn");

let turnx = true ; //player X's turn

const winpatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

const resetgame = () => {
    turnx = true ;
    for(let box of boxes){
        box.disabled=false ;
        box.innerText="" ;
    }
    enableboxes() ;
    msgcont.classList.add("hide") ;
};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(!turnx) { 
            box.innerText = "O" ;
            box.style.color = "green" ;
            turnx = true ;
        }
        else{
            box.innerText = "X" ;
            turnx = false ;
        }
        box.disabled = true ;
        checkWinner() ;
    }) ;
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true ;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false ;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}` ;
    msgcont.classList.remove("hide") ;
    disableboxes();
}

const checkWinner = () => {
    for(pat of winpatterns){
        let pos1 = boxes[pat[0]].innerText ;
        let pos2 = boxes[pat[1]].innerText ;
        let pos3 = boxes[pat[2]].innerText ;

        if(pos1 != ""  && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

newgame.addEventListener("click" , resetgame);
reset.addEventListener("click" , resetgame);