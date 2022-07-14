# 2D Retro Platformer - inspired by Chrome's 'Dinosaur Game'

## Description
Platformer Live-Site: https://mustafanasirov.github.io/jump-js-game/

A retro inspired chrome-dino 2D platformer with obstacles & Mega Man. Programmed using languages learned and  JavaScript, HTML, and SCSS. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/86935457/179026692-9fe5920a-3de5-434f-b23a-7e88303a6ef9.png">
</p>

## Gameplay
- The player has the ability to move left, right and jump in the game environment.
- 'A' and 'D' to move left & right, 'W' or Space to jump.

<p align="center">
 <img src="https://user-images.githubusercontent.com/86935457/179027774-d0b190f0-7789-424e-9922-30b26554b248.png">
</p>

- An obstacle will continuously come at the player which will end the game if hit.
- When 'Game Over', any key press will reset the game to it's original state and the game will restart.

<p align="center">
  <img src="https://user-images.githubusercontent.com/86935457/179027664-dc3f5dfe-00f7-49fc-adb9-8139d9b63844.png">
</p

## Implementation
- The movements and animations were made using keyframes and transitions triggered by events in the JavaScript. 
- When a certain user input is entered an action is performed and the CSS properties of a game element is updated to represent the action of the user.
- The game container that holds the game environment is drawn behind the TV screen with the score, title and other elements held in a seperate flex/grid container.

## Improvements / Bug Fixes
- Improvements
  - Improve obstacle aesthetics.
  - Add variety to obstacles (size, direction and aesthetics).
  - Add running and idle animation to player model.
  - Start/Restart button.
  - Interactable joystick on the side of the TV to control movements.
  - Change aesthetics of score and title to match TV.
  
- Bugs
  - A bug with the score caused by the interval being set.
  - The score being frozen and then saved/displayed when 'Game Over'.
  - Scaling the game container with the size of the screen to still be contained in the TV screen.
  - Clean code on resetting the game to it's original state.

 
