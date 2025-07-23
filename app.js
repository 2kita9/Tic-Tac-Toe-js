/*accessing all the boxes*/
let boxs=document.querySelectorAll(".box");

let resetb=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new-btn");
let msgcontain=document.querySelector(".msgContainer");


let turn0=true;

const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxs.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if (turn0){   //player1
            box.innerText="O";
            turn0=false;

        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
    
});

const checkwinner=()=>{
    for(let pat of winpat){
        let p1=boxs[pat[0]].innerText;
        let p2=boxs[pat[1]].innerText;
        let p3=boxs[pat[2]].innerText;

        if (p1!="" && p2!="" & p3!=""){
            if (p1===p2 && p2===p3){
                console.log("Winner",p1);
                showWinner(p1);
            }
        }

    }

};

const disableboxes=()=>{
    for(let b of boxs){
        b.disabled=true;

    }
};

const enableboxes=()=>{
    for(let b of boxs){
        b.disabled=false;
        b.innerText="";

    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congrats, the winner is ${winner}`;
    msgcontain.classList.remove('hide');
    disableboxes();

};

const resetbut=()=>{
    turn0=true;
    enableboxes();
    msgcontain.classList.remove("hide"); 

};


newgame.addEventListener("click", resetbut);
resetb.addEventListener("click",resetbut)
