const gameboard = document.querySelector("#gameboard")



gameboard.addEventListener("click" ,(e) => {
    console.log(e.target)
    e.target.textContent = "X"
})