 
 

 //Variables 
const board = [
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
    [0, 1, 2, 3, 4, 5],
]

const numberOfMines = 5;


//let gameOver = false

function setMines (){
let.minesLocation = [0][1]; //testing if alert will come up if I click on c0r4
alert("There is a mine!");

}

function startGame (){
    setMines ();

}

 
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function boxClicked(e) {
        console.log('box clicked', e );
        box.setAttribute('style', 'background-color: lightgray');
    });
});




function boxClicked () {
    let box = this;



}



 

 //Event listeners for click of the player


 //Player will click on a square, a mine or a number will appear, if the square contains a mine the game will be over
 //If the square displays a number, player will have the change to click on another square

 //Set timer upon first click of 5 minutes to allow the player to complete the game, if the player gets a mine th

 //Function to determine if player hit a mine or has another chance

 //Display the numbers that give the hint that a mine is close by (we could use 1 and 2 since the grid is 4x4)

 //Function to end game if player lost

 //Give player the option to play again 