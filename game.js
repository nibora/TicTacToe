const gameboard = document.querySelector("#gameboard")

const O_text = "O"
const X_text = "X"
let currentPlayer = true;

gameboard.addEventListener("click" ,(e) => {
    
    for(let i = 0; i < 9; i++) {
    if(currentPlayer) {
        e.target.textContent = "X"
    } else (e.target.textContent = "O")
    currentPlayer = !currentPlayer;
    }
    // console.log(e.target)
    // e.target.textContent = "X"
})








