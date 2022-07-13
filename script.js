// variable declarations
var isGameStart = false;

// DOM declarations
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
//const floor = document.getElementById("floor");

const tutorialScreen = document.getElementById("tutorial-screen");
const gameScreen = document.getElementsByClassName("game-container");

const startGame = () => {
    isGameStart = true;
    obstacle.classList.add("moveObstacle");

    hideTutorial();
};

const hideTutorial = () =>{
    tutorialScreen.style.display = "none";
};

// Animate player element to jump
const playerJump = () => {
    // If player is already in jump animation (jump animation class is attached)
    if(player.classList === true){
        return;
    }
    // otherwise play animation
    player.classList.add("animateJump");
    setTimeout(removeJump, 750);
 };

 // Remove jump animation class
const removeJump = () =>{
    player.classList.remove("animateJump");
};

// Checks for collisions every 5ms
const checkCollision = setInterval(() => {

    // pixel position of player element 
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  
    // pixel position of obstacle element 
    let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    
    // check if elements overlap (if player is inside obstacle there is a collision)
    if(((obstacleLeft < (playerLeft + 48)) && (obstacleLeft > playerLeft)) && ((playerTop) > obstacleTop)){
        //alert("Game Over!");
    }
}, 5);


const handleKeyPress = (event) => {
    if(!isGameStart){ 
        startGame() };

    var key = event.key;

    if (key == 'w' || key == ' ') {
        //move up
        playerJump();
    }
    else if (key == 'a') {
        //move left
        moveElement(player, -10);
    }
    else if (key == 'd') {
        // move right
        moveElement(player, 10);
    }
};

// Function to change position pixel value of element
const moveElement = (element, pixels) =>{
    let newVal = (parseInt(window.getComputedStyle(element).getPropertyValue("left"))) + pixels;
    newVal = newVal.toString() + "px";

    player.style.left = newVal;
    return newVal;
}; 



// Event listeners
document.addEventListener('click', playerJump);
document.addEventListener('keypress', (e) => {
    handleKeyPress(e);
});



/* const removeMovement = () =>{
    player.classList.remove("animatePlayerRight");
    player.classList.remove("animatePlayerLeft");
}

const playerMovementRight = () => {

    //player.style.left = "6rem"
    player.classList.add("animatePlayerRight")
    setTimeout(removeJump, 300);
    
};

const playerMovementLeft = () => {

    player.classList.add("animatePlayerLeft")
    setTimeout(removeMovement, 300);
};  */