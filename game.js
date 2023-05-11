const gameboard = document.querySelector("#gameboard")
const O_text = "O"
const X_text = "X"
let currentPlayer = true;
const feld1 = document.querySelector("#Feld1");

gameboard.addEventListener("click" ,(e) => {
    
    if(currentPlayer) {
        e.target.textContent = "X"
    } else (e.target.textContent = "O")
    switchPlayer();
    
    console.log(feld1.textContent)
})

function switchPlayer() {
    currentPlayer =!currentPlayer;
}