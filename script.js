
// player jump
// obstacle movement
// obstacle collision
// start menu / score
// obstacle variation + movement


// variable declarations
var isGameStart = false;

// DOM declarations
const player = document.getElementById("player");
const floor = document.getElementById("floor");
const obstacle = document.getElementById("obstacle");

const tutorialScreen = document.getElementById("tutorial-screen");
const gameScreen = document.getElementsByClassName("game-container");

const startGame = () => {
    isGameStart = true;
    obstacle.classList.add("moveObstacle");
    gameScreen.style.display = "block";
    
    tutorialScreen.style.display = "none";

};

const hideTutorial = () =>{
    tutorialScreen.style.display = "none";
};

// Animate player element to jump
const playerJump = () => {

    console.log(player.classList);
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

const removeMovement = () =>{
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
}; 


// Checks for collisions every 5ms
const checkCollision = setInterval(() => {

    // pixel position of player element 
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
   //console.log("player L,Top,R : " + playerLeft + ", " + playerTop + ", " + playerRight);
   //console.log("p " + playerTop)
  
    // pixel position of obstacle element 
    let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
   //console.log("obstacle L,Top,R : " + obstacleLeft + ", " + obstacleTop + ", " + obstacleRight);
   //console.log("o " + obstacleLeft);
    
    // check if elements overlap (if player is inside obstacle there is a collision)
    if((obstacleLeft < (playerLeft + 48)) && (obstacleLeft > playerLeft) && ((playerTop - 48) > obstacleTop)){
        console.log("collision")

        alert("Game Over!");
    }
}, 5);

/* const convertRem = (str) =>{
    str.replace()

}; */


const handleKeyPress = (event) => {
    if(!isGameStart){ startGame() };

    var key = event.key;
    console.log(key);

    if (key == 'w' || key == ' ') {
        playerJump();
        // up arrow
    }
    else if (key == 'a') {
        //playerMovementLeft();
        player.style.left = "3rem";
       // left arrow
    }
    else if (key == 'd') {
        //playerMovementRight();
        player.style.left = "6rem";
       // right arrow
    }
};

// Event listeners
document.addEventListener('click', playerJump);
document.addEventListener('keypress', (e) => {
    handleKeyPress(e);
});

console.log(tutorialScreen.style)