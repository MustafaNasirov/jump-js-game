
// player jump
// obstacle movement
// obstacle collision
// start menu / score
// obstacle variation + movement


// variable declarations


// DOM declarations
const player = document.getElementById("player");
const floor = document.getElementById("floor");
const obstacle = document.getElementById("obstacle");


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
   //console.log("player L,Top,R : " + playerLeft + ", " + playerTop + ", " + playerRight);
   //console.log("p " + playerTop)
  
    // pixel position of obstacle element 
    let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
   //console.log("obstacle L,Top,R : " + obstacleLeft + ", " + obstacleTop + ", " + obstacleRight);
   //console.log("o " + obstacleLeft);
    
    // check if elements overlap (if player is inside obstacle there is a collision)
    if(obstacleLeft < (playerLeft + 48) && (playerTop - 48) > obstacleTop){
        console.log("collision")

        alert("Game Over!");
    }
}, 5);

/* const convertRem = (str) =>{
    let strArr = str.join("");
    let newArr = [];
    strArr.forEach(char => {
        if()
    });

}; */


const handleKeyPress = (event) => {
    var key = event.key;
    console.log(key);

    if (key == 'w' || key == ' ') {
        playerJump();
        // up arrow
    }
    else if (key == 'a') {
        player.style.left = "3rem";
       // left arrow
    }
    else if (key == 'd') {
        player.style.left = "6rem";
       // right arrow
    }
};

// Event listeners
document.addEventListener('click', playerJump);
document.addEventListener('keypress', (e) => {
    handleKeyPress(e);
});