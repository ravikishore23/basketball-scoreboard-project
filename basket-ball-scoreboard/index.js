//code for team A

//asign board value to numboard for team A
let numBoardA=document.getElementById("num-board-a")

//initial count on borad is 0(zero)
let countA=0

//use function to add value by clicking button based on scores
function add1btnA(){
    countA+=1

    numBoardA.textContent=countA
}

function add2btnA(){
    countA+=2

    numBoardA.textContent=countA
}

function add3btnA(){
    countA+=3

    numBoardA.textContent=countA
}

function AresetAll(){
    countA=0

    numBoardA.textContent=countA

}


//code for team B 
//'lly 

let numBoardB=document.getElementById("num-board-b")

let countB=0


function add1btnB(){
    countB+=1

    numBoardB.textContent=countB
}

function add2btnB(){
    countB+=2

    numBoardB.textContent=countB
}

function add3btnB(){
    countB+=3

    numBoardB.textContent=countB
}

function BresetAll(){
    countB=0

    numBoardB.textContent=countB

}



