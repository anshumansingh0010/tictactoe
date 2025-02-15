const parent = document.querySelector('#games');
const child = document.querySelector('#tic');
const boxes=document.querySelectorAll('.tiktak');
const reset=document.querySelector('#reset');
const newbtn =document.querySelector('#new');
const text=document.querySelector('#text');
const button=document.querySelectorAll('.button');
child.addEventListener("mouseover", () => {
    child.style.transform = "scale(1)";
    child.style.transition = "transform 0.3s ease-in-out";
    parent.style.height = '98vh';
    parent.style.width = '99vw';
    parent.style.borderRadius='0';
    parent.style.flexDirection = 'column';
    document.getElementById('head').style.visibility='hidden';
});
child.addEventListener("mouseout", () => {
    child.style.transform = "scale(0.8)";
    child.style.transition = "transform 0.3s ease-in-out";
    parent.style.height = '80vh';
    parent.style.width = '60vw';
    parent.style.borderRadius='40px';
    parent.style.flexDirection = 'column';
    document.getElementById('head').style.visibility='visible';
});
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let turnO=true;
boxes.forEach((tiktak)=>{
    tiktak.addEventListener("click", () => {
        if(turnO){
            tiktak.innerText="O";
            turnO=false;
        }
        else {
            tiktak.innerText="X";
            turnO=true;
        }
        tiktak.disabled=true;
        checkWinner();
    });
});
const nullvalue=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    text.style.display="none";
}
const disableBoard=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p1===p3 ){
                disableBoard();
                text.innerText=`Winner is ${p1}`;
                text.style.display="block";
            }
        }
    }
}
reset.addEventListener("click", () => {
    nullvalue();
})
newbtn.addEventListener("click", () => {
    nullvalue();
})