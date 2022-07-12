
// player jump
// obstacle movement
// obstacle collision
// start menu / score
// obstacle variation + movement


// variable declarations



// DOM declarations
const player = document.getElementById("player");
const floor = document.getElementById("floor");



const playerJump = () => {

    // If player is already in jump animation (jump animation class is attached)
    if(player.classList == true){
        return;
    }

    // otherwise play animation
    player.classList.add("animateJump");
    setTimeout(removeJump, 500);
    
 };

const removeJump = () =>{
    player.classList.remove("animateJump");
};


document.addEventListener('click', playerJump);