const gameBox = document.querySelectorAll(".game-box");
const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");
const box9 = document.getElementById("9");
const newRoundBtn = document.getElementById("new-round-btn");


let turn = true;




gameBox.forEach(function (box) {
    box.addEventListener("click", addSymbol); 
        
        function addSymbol(event) {
            if (event.target.classList.contains("circle") || event.target.classList.contains("cross")){
                return;
            }
            if (turn) {
                event.target.classList.add("circle")
                turn = false;
                
            } else {
                event.target.classList.add("cross");
                turn= true;
            }
            checkWinner();
        }
});

newRoundBtn.addEventListener("click", newRound);

function newRound () {
    gameBox.forEach(function (box) {
        box.classList = "game-box";
    })
}

function checkWinner() {
    const circles = {
        c1: box1.classList.contains("circle"),
        c2: box2.classList.contains("circle"),
        c3: box3.classList.contains("circle"),
        c4: box4.classList.contains("circle"),
        c5: box5.classList.contains("circle"),
        c6: box6.classList.contains("circle"),
        c7: box7.classList.contains("circle"),
        c8: box8.classList.contains("circle"),
        c9: box9.classList.contains("circle")
    } 

    const crosses = {
        x1: box1.classList.contains("cross"),
        x2: box2.classList.contains("cross"),
        x3: box3.classList.contains("cross"),
        x4: box4.classList.contains("cross"),
        x5: box5.classList.contains("cross"),
        x6: box6.classList.contains("cross"),
        x7: box7.classList.contains("cross"),
        x8: box8.classList.contains("cross"),
        x9: box9.classList.contains("cross")
    } 

    if ((circles.c1 && circles.c2 && circles.c3) ||
        (circles.c4 && circles.c5 && circles.c6) ||
        (circles.c7 && circles.c8 && circles.c9) ||  
        (circles.c1 && circles.c4 && circles.c7) ||
        (circles.c2 && circles.c5 && circles.c8) ||
        (circles.c3 && circles.c6 && circles.c9) ||
        (circles.c1 && circles.c5 && circles.c9) ||
        (circles.c3 && circles.c5 && circles.c7)) 
        {
        console.log("O WINS!");
    } 
    
    else if (
        (crosses.x1 && crosses.x2 && crosses.x3) ||
        (crosses.x4 && crosses.x5 && crosses.x6) ||
        (crosses.x7 && crosses.x8 && crosses.x9) ||  
        (crosses.x1 && crosses.x4 && crosses.x7) ||
        (crosses.x2 && crosses.x5 && crosses.x8) ||
        (crosses.x3 && crosses.x6 && crosses.x9) ||
        (crosses.x1 && crosses.x5 && crosses.x9) ||
        (crosses.x3 && crosses.x5 && crosses.x7)) 
        {
        console.log("X WINS!");
    }
}