
// variables and consts;
let direction = {x :0 , y : 0};

const foodSound = new Audio('food.mp3');
const moveSound = new Audio('turn.mp3');
const gameOversound = new Audio('gameOver.mp3');
const musicSound = new Audio('bg.mp3');
let score = 0;
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x : 13 , y : 15}
]
let food = {x : 6 , y : 7};

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

    if(isCollide(snakeArr)){
        gameOversound.play();
        musicSound.pause();
        direction = {x : 0 , y : 0};
        alert("Game Over !! , press any key to start again");
        snakeArr = [{x : 13 , y : 15}];
        musicSound.play();
        score =0;

    }
    // displaying snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
    });

    // displaying the food;
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;

    foodElement.classList.add('food');
    board.appendChild(foodElement);
}


// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown' , e =>{
    direction = {x : 0 , y :1};
    moveSound.play();
    switch (e.key) {
        case "ArrowUp" :
            console.log("ArrowUp");
            direction.x = 0;
            direction.y = -1;
            break;
    
        case "ArrowDown" :
            console.log("ArrowDown");
            direction.x = 0;
            direction.y = 1;
            break;

        case "ArrowLeft" :
            console.log("ArrowLeft");
            direction.x = -1;
            direction.y = 0;
            break;

        case "ArrowRight" :
            console.log("ArrowRight");
            direction.x = 1;
            direction.y = 0;
            break;

        default:
            break;
    }
})