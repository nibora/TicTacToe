const gameboard = document.querySelector("#gameboard")
let currentPlayer = true;
const cell1 = document.querySelector("#Cell1");
// const cell2 = document.querySelector("#Cell2");
// const cell3 = document.querySelector("#Cell3");
// const cell4 = document.querySelector("#Cell4");
// const cell5 = document.querySelector("#Cell5");
// const cell6 = document.querySelector("#Cell6");
// const cell7 = document.querySelector("#Cell7");
// const cell8 = document.querySelector("#Cell8");
// const cell9 = document.querySelector("#Cell9");

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

gameboard.addEventListener("click", (e) => {

    currentPlayer ? e.target.textContent = "X" : e.target.textContent = "O"
    switchPlayer();
    console.log(cell1.textContent) 
})

function switchPlayer() {
    currentPlayer = !currentPlayer;
}

