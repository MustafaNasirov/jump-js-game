# 2D Retro Platformer - inspired by Chrome's 'Dinosaur Game' :joystick:

## Description
Platformer Live-Site: https://mustafanasirov.github.io/jump-js-game/

A retro inspired chrome-dino 2D platformer with obstacles and Mega Man as the playable character. Programmed using languages learned in the _nology course, using JavaScript, HTML, and SCSS. Made responsive to screen size using mobile-first responsiveness and following appropriate naming & coding conventions.

<p align="center">
  <img alt="MENU" src="https://user-images.githubusercontent.com/86935457/194715560-ed368cfd-a6db-4189-8f77-f00e57d4ccb0.png" width="640">
</p>

## Gameplay
- The player has the ability to move left, right and jump in the game environment.
- 'A' and 'D' to move left & right, 'W' or Space to jump.
- An obstacle will continuously come at the player which will end the game if hit.
- When 'Game Over', any key press will reset the game to it's original state and the game will restart.

<p align="center">
  <img src="https://user-images.githubusercontent.com/86935457/194715389-06a40def-b471-4f28-a3ae-da6d2fbf299b.gif">
</p





## Implementation
- The movements and animations were made using keyframes and transitions triggered by events in the JavaScript. 
- When a certain user input is entered an action is performed and the CSS properties of a game element is updated to represent the action of the user.
- The game container that holds the game environment is drawn behind the TV screen with the score, title and other elements held in a seperate flex/grid container.

## Future Improvements
  - Improve obstacle aesthetics.
  - Add variety to obstacles (size, direction and aesthetics).
  - Add running and idle animation to player model.
  - Start/Restart button.
  - Interactable joystick on the side of the TV to control movements.
  - Change aesthetics of score and title to match TV.
