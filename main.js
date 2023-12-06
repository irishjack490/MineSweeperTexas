 


 //Establish Variables 
let board = [];
const rows = 8;
const columns = 8; 
const numberOfMines = 10;
let minesLocation = [];
let boxesClicked = 0;

let gameOver = false;

//function to load game on window
window.onload = function(){
    startGame();
}
//This function will randomly place mines upon loading game, mines will be placed on coordin
function setMines () { 
let minesRemaining = 0;
while (minesRemaining < numberOfMines){
const row = Math.floor(Math.random () * rows);
const column = Math.floor(Math.random ()* columns);
       let id = row.toString () + "-" + column.toString(); //setting coordinates for minesLocation
 if (!minesLocation.includes(id)){
    minesLocation.push(id);
    minesRemaining += 1;
    }
   }
       
 }

//Create board with rows and columns with id div
 function startGame() {
  restartGame();
  setMines();
    //create div tags using JS
    for (let i = 0; i < rows; i++){
    let row = [];
      for (let j = 0; j < columns; j++){
        let box = document.createElement("div");
        box.id = i.toString() + "-" + j.toString(); //creating id for the boxes in the array to manipulate them later in the code
        box.addEventListener('click', boxClicked);
        document.getElementById("board").append(box);
        row.push(box);   
    }
    board.push(row);
  } 
 console.log(board);
}
//function that will prevent player for clicking on more boxed once the game is over, playes must click button to play again
function boxClicked() {
  if(gameOver) {
    return;
  }

  let currentBox = this;
  let boxId = currentBox.id; 
 if (minesLocation.includes(boxId)) {
    gameOver = true;
    revealMines();
    return;
  }else {
    let count = countAdjacentMines (boxId);
    currentBox.innerText = count; 
    currentBox.style.color = numberColors[count];//this is going to give each number in count a color from the numberColors object list
    
  }
  
}
//const numberColors = ["red", "blue", "green", "magenta", "orange", "purple"]//converted this to an object below
const numberColors = {
  0: "red",
  1: "blue",
  2: "green",
  3: "magenta",
  4: "orange",
  5: "purple"
}
//Function that will count adjacent mines and will display the result in each box 
function countAdjacentMines(boxId){

   let count = 0;
   const [row, col] = boxId.split("-").map(Number);
   
   for(let i = row -1; i <= row +1; i++){
    for (let j = col -1; j <= col +1; j++){
      if(i >= 0 && i < rows && j >= 0 && j < columns){
        let neighborId = i.toString() + "-" + j.toString();
            if(minesLocation.includes(neighborId)){
          count++;
        }
      }
    }
  }

   return count; 
}
// This function will reveal the mines if a box containing a mine is clicked
function revealMines(){
  for (let i = 0; i < rows; i++){
      for (let j = 0; j < columns; j++){
          let box = board[i][j];
          if (minesLocation.includes(box.id)){
              box.innerText = "💣"; 
              box.style.backgroundColor = "yellow";
              document.getElementById("header").innerHTML = "Game Over" + "😵";// instert new emojie if player lost
            

          } 
      }
   }
}
//This function will restartGame, and will set everything how it was at the beginning 
function restartGame (){
  board = [];
  minesLocation = [];
  boxesClicked = 0;
  gameOver = false; 

  document.getElementById("board").innerHTML = " "; //insert blank space to start game again
  document.getElementById("header").innerHTML = "Welcome to Minesweeper" + "🤠"; //insert title and make it look how it used to look before loosing 

}
  document.getElementById("restart-button").addEventListener("click", startGame);//play again button will call the start game function 

