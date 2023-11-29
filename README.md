# Project-1---Browser-Based-Game

The game I have chosen for this projec this project is Minesweeper. This is one of the first games I played as a kid, it will be a great challenge and great experience for me to build a replica. 

Minesweeper renders a table with multiple squares that may contain either a mine which ends the game, OR a number of the mines that could be in the area the player clicked on. The player must be careful not to click on a mine. If this is the case the game will be over. The player will win if they are able to click on all the squares that contain numbers only.

Below is a preliminary drawing of that the game would potentially look like the image below. Further design is under review, foe example, the smiley and the mines may end up being of a different color.


![image](https://github.com/irishjack490/Project-1---Browser-Based-Game/assets/146676274/79f1df3b-7c06-4f3b-b6e5-3904299e13f8)


The player must be able to do the following:
 Click on any square in the table 
 Be able to see if they clicked on a mine OR
 Be able to see a display of a number or group of numbers giving the player a hint of where the mines may be located
 Be able to see the time count
 Be able to see the smiley change it's facial expression so surprised everytime a square is clicked
 Be given the option to start new game upon wining or losing previous game

 Pseudo Code:

 //DOM style grid property, size of grid: 4 rows, 4 columns, total of 16 same size squares

 //Generate 5 mines in random squares, generate numbers. 
 //These must be non-visible until player clicks on the squares

 //Render game upon loading browser

 //Listen for player's click 

 //If  player uncovers a mine the game will be over
 //If player uncovers a number, player will have the chance to click on another square
 
 //set timer of 5 minutes to allow the player to complete the game, if mine is hit this, timer will stop 

 //End game if player hits a mine

 //Give player the option to play again or quit 
