
// variables and consts;
let direction = {x :0 , y : 0};

const foodSound = new Audio('food.mp3');
const moveSound = new Audio('turn.mp3');
const gameOversound = new Audio('gameOver.mp3');
const musicSound = new Audio('bg.mp3');

let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x : 13 , y : 15}
]

// game functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime) / 1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        snakeElement.classList.add('food');
        board.appendChild(snakeElement);
    });
}


// main logic starts here
window.requestAnimationFrame(main);