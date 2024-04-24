//access all html element by their class name

let boxes = document.querySelectorAll(".box");
let startButton = document.querySelector(".start-button");
let restartButton = document.querySelector(".restart-button");
let overlay = document.querySelector(".overlay");
let winner = document.querySelector(".Winner");
let draw = document.querySelector(".draw");

//by default first player is O
let turnO = true;

//for draw condition
let count = 0;

//all winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO == true)
        {
            box.innerHTML = "O"
            turnO = false;
        }
        else{
            box.innerHTML = "X"
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
        count++;

        //draw condition output
        if (count == 9){
            winner.innerHTML = `This Match is drawn !!!`
            setTimeout(() =>{
                overlay.classList.add("show");
                restartButton.addEventListener("click", () =>{
                    overlay.classList.remove("show");
                })

            }, 3);
        }
    });
})

//function for checking winner on every box
const checkWinner = () =>{

    for (const pattern of winPatterns) {
        
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winner.innerHTML = `Player ${pos1Val} won the game!`

                setTimeout(() =>{
                    overlay.classList.add("show");
                    restartButton.addEventListener("click", () =>{
                        overlay.classList.remove("show");
                    })

                }, 3);
            }
        }

    }
}

restartButton.addEventListener("click", ()=>{
    window.location.reload();
})

startButton.addEventListener("click", ()=>{
    window.location.reload();
})
