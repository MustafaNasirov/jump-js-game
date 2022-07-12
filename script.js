
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



const playerJump = () => {

    // If player is already in jump animation (jump animation class is attached)
    if(player.classList === true){
        return;
    }

    // otherwise play animation
    player.classList.add("animateJump");
    setTimeout(removeJump, 750);
    
 };

const removeJump = () =>{
    player.classList.remove("animateJump");
};

const checkCollision = setInterval(() => {

    // pixel position of player element 
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let playerRight = parseInt(window.getComputedStyle(player).getPropertyValue("right"));
  // console.log("player L,Top,R : " + playerLeft + ", " + playerTop + ", " + playerRight);
  console.log("p " + playerTop)
  


    // pixel position of obstacle element 
    let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    let obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));
   //console.log("obstacle L,Top,R : " + obstacleLeft + ", " + obstacleTop + ", " + obstacleRight);
   //console.log("o " + obstacleTop);
    
    // check if elements overlap (if player is inside obstacle there is a collision)
    if(obstacleLeft < (playerLeft + 48) && playerTop > obstacleTop){
        console.log("collision")
        
        alert("Game Over!");
    }


}, 10);


document.addEventListener('click', playerJump);