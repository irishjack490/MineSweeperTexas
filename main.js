 


 //Variables 
let board = [];
const rows = 8;
const columns = 8; 
const numberOfMines = 10;
let minesLocation = [];
let boxesClicked = 0;

let gameOver = false;


window.onload = function(){
    startGame();
}
function setMines () { 
let minesRemaining = 0;
while (minesRemaining < numberOfMines){
const row = Math.floor(Math.random () * rows);
const column = Math.floor(Math.random ()* columns);
       let id = row.toString () + "-" + column.toString(); 
 if (!minesLocation.includes(id)){
    minesLocation.push(id);
    minesRemaining += 1;
    }
  }
       
 }

//Create board with rows and columns
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
    
  }
  
}
//added array with colors I want 
const numberColors = ["red", "blue", "green", "magenta", "orange", "purple"]
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
   const numberElement = document.createElement("span");
   numberElement.className = "mine-number";
   numberElement.textContent = count; 
   
   const colorIndex = count % numberColors.length;
   numberElement.style.color = numberColors[colorIndex];//choose color from array by index
   document.getElementById("board").appendChild(numberElement); 

   return count; 
}




function revealMines(){
  for (let i = 0; i < rows; i++){
      for (let j = 0; j < columns; j++){
          let box = board[i][j];
          if (minesLocation.includes(box.id)){
              box.innerText = "💣";
              box.style.backgroundColor = "yellow";
              document.getElementById("header").innerHTML = "Game Over" + "😵";
            

          } 
      }
   }
}
function restartGame (){
  board = [];
  minesLocation = [];
  boxesClicked = 0;
  gameOver = false; 

  document.getElementById("board").innerHTML = " "; 
  document.getElementById("header").innerHTML = "Welcome to Minesweeper" + "🤠";

}
  document.getElementById("restart-button").addEventListener("click", startGame);

