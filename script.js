const gameContainer = document.querySelector(".game-container")
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

const gameMode = document.querySelector(".game-mode")
const vsPlayerBtn = document.getElementById("vs-player");
const vsComputerBtn = document.getElementById("vs-computer");


const scoreBoard = document.querySelector(".score-board")
const playerOScore = document.getElementById("p1ayer-O-score");
const playerXScore = document.getElementById("player-X-score");
const newRoundBtn = document.getElementById("new-round-btn");
const resetScoresBtn = document.getElementById("reset-scores-btn");

const whoGoesFirstContainer = document.querySelector(".who-goes-first");
const OCheckbox = document.getElementById("O");
const XCheckbox = document.getElementById("X");

gameContainer.style.display = "none";
scoreBoard.style.display = "none";
whoGoesFirstContainer.style.display = "none"

let OScore = 0;
let XScore = 0;

let turn = true;



// game mode
vsPlayerBtn.addEventListener("click", () => {
    gameContainer.style.display = "grid";
    scoreBoard.style.display = "flex";
    whoGoesFirstContainer.style.display = "flex"
    gameMode.style.display = "none"
});



// game logic
gameBox.forEach(function (box) {
    box.addEventListener("click", draw);      
});
function draw (event) {
    if (event.target.classList.contains("circle") || event.target.classList.contains("cross")){
        return;
    }
    if (turn) {
        event.target.classList.add("circle")
        turn = false;
        
    } else {
        event.target.classList.add("cross");
        turn = true;
    }
    checkWinner();
}


OCheckbox.addEventListener("change", function () {
    if (this.checked){
        turn = true;
    }
});

XCheckbox.addEventListener("change", function () {
    if(this.checked) {
        turn = false;
    }
});



// resetting game options
newRoundBtn.addEventListener("click", newRound);
function newRound () {
    gameBox.forEach(function (box) {
        box.classList = "game-box";
    });
    OCheckbox.checked = false;
    XCheckbox.checked = false;
}


resetScoresBtn.addEventListener("click", resetScores);
function resetScores () {
        OScore = 0;
        XScore = 0;
        playerOScore.textContent = `O SCORE = ${OScore}`;
        playerXScore.textContent = `X SCORE = ${XScore}`;
}




// game logic
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
            
        setTimeout( () => {
            alert("O WINS! Allow X to go first in new round")
        },500);

        OScore +=1;
        playerOScore.textContent = `PLAYER O SCORE = ${OScore}`;

        gameBox.forEach(function (box) {
            box.removeEventListener("click", draw);
        });
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
        
        setTimeout( () => {
            alert("X WINS! Allow O to go first in new round");
        }, 500);

        XScore +=1;
        playerXScore.textContent = `PLAYER X SCORE = ${XScore}`;

        gameBox.forEach(function (box) {
            box.removeEventListener("click", draw);
        });
    }
}


// using modl to display pop-up message
const modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
vsComputerBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}