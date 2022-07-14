// variable declarations
var isGameStart = false;
var gameScore = 0;
var jumpSFX = document.getElementById("jump-sfx-8bit")

// DOM declarations
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("game-score");
//const floor = document.getElementById("floor");

const tutorialScreen = document.getElementById("tutorial-screen");
const gameScreen = document.getElementsByClassName("game-container");
const gameOver = document.getElementById("game-over");

const startGame = () => {
    isGameStart = true;
    gameOver.style.display = "none";
    console.log("started")
    player.style.left = "5rem";

    obstacle.classList.add("moveObstacle");
    updateScore();
    hideTutorial();
};

const hideTutorial = () =>{
    tutorialScreen.innerText = "";
};

// Animate player element to jump
const playerJump = () => {
    // If player is already in jump animation (jump animation class is attached)
    if(player.classList.contains("animateJump")){
        return;
    }
    // otherwise play animation
    player.style.backgroundImage = "url('./assets/mega-man-jump.png')";
    player.classList.add("animateJump");
    jumpSFX.play();
    setTimeout(removeJump, 750);
 };

 // Remove jump animation class
const removeJump = () =>{
    player.classList.remove("animateJump");
    player.style.backgroundImage = "url('./assets/mega-man.png')";
};

 // Remove obstacle animation class
 const removeObstacle = () =>{
    obstacle.classList.remove("moveObstacle");
};

// Checks for collisions every 5ms
const checkCollision = setInterval(() => {

    // pixel position of player element 
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  
    // pixel position of obstacle element 
    const obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    
    // check if elements overlap (if player is inside obstacle there is a collision)
    if(((obstacleLeft < (playerLeft + 48)) && (obstacleLeft > playerLeft)) && ((playerTop) > obstacleTop)){
       // alert("Game Over!");
       gameOver.style.display = "block";
       isGameStart = false;
       gameScore = 0;
       removeObstacle();
    }
    
}, 5);

const handleKeyPress = (event) => {
    if(!isGameStart){ 
        setTimeout(() => { 
            startGame(); 
        }, "1000");
        return;
    }

    var key = event.key;

    if (key == 'w' || key == ' ') {
        //move up
        playerJump();
    }
    else if (key == 'a') {
        //move left
        moveElement(player, -32);
    }
    else if (key == 'd') {
        // move right
        moveElement(player, 32);
    }
};

// Function to change position pixel value of element
const moveElement = (element, pixels) =>{
    let newVal = (parseInt(window.getComputedStyle(element).getPropertyValue("left")));

    if(newVal < 68){newVal = 68}        
    if(newVal > 360){newVal = 360}

    newVal = newVal + pixels;

    newVal = newVal.toString() + "px";
    player.style.left = newVal;
    return newVal;
}; 

const updateScore = () => {
    if(isGameStart == false){
        window.clearInterval(scoreInterval)
        scoreInterval = 0;
        gameScore = 0;
    }
    else{
    const scoreInterval = setInterval(() => {
        gameScore += 1;
        scoreDisplay.innerText = "Score: " + gameScore;
        console.log(scoreInterval)
    }, 2500)
    }
    
};

// Event listeners
document.addEventListener('keypress', (e) => {
    handleKeyPress(e);
});
