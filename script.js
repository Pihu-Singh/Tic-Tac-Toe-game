console.log("Welcome to Tic Tac Toe")
let turn ="x"
let i5gameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

//Function to check for a win
const checkWin = ()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].ineerText === boxtext[e[1]].innerText) && (boxtext[e[2]].ineerText === boxtext[e[1]].innerText) && (boxtext[e[0]].ineerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].ineerText + "Won"
            i5gameover = true
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!i5gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})