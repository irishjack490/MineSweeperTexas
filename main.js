 


 //Variables 
let board = [];
const rows = 5;
const columns = 5; 
const numberOfMines = 5;
let minesLocation = [];
let boxesClicked = 0;

let gameOver = false;


window.onload = function(){
    startGame();
}
function setMines () { 
let minesRemaining = 0;
while(minesRemaining < numberOfMines){
const row = Math.floor(Math.random () * rows);
const column = Math.floor(Math.random ()* columns);
       let id = row.toString + "-" + column.toString; 
 if (!minesLocation.includes(id)){
    minesLocation.push(id);
    minesRemaining =+ 1;
    }
       
  }

}

//Create board with rows and columns
 function startGame() {
  setMines();
    //create div tags using JS
    for (let i = 0; i < rows; i++){
    let row = [];
      for (let j = 0; j < columns; j++){
        let box = document.createElement("div");
        box.id = i.toString() + "-" + j.toString();
        box.addEventListener('click', boxClicked);
        document.getElementById("board").append(box);
        row.push(box);   
    }
    board.push(row);
  } 
 console.log(board);
}

function boxClicked() {
  
 if (minesLocation.includes(box.id)) {
    gameOver = true;
    revealMines();
    return;
 }

}

function revealMines(){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            let box = board[i][j];
            if (minesLocation.includes(box.id)){
                box.innerText = "💣";
                box.style.backgroundColor = "yellow";
            } else {
               if (!board[i][j].isOpen){
                revealCell(i,j);
               }
            }
        }
    }
}
function revealCell (){
  const box = document.querySelectorAll('clicked-box');
  board[i][j].isOpen = true; 

  const adjacentMines = countAdjacentMines (i,j);
  if (adjacentMines > 0){
    box.textContent = adjacentMines;
    box.classList.add('number');
    box.classList.add('opened');
  } else 
  box.classList.add('opened');
  const neighbors = getNeighbors(i, j);

  for (const neighbor of neighbors){
    const { i: neighborRow, j: neighborColumn } = neighbor; 
    if(!board[neighborRow][neighborColumn].isOpen){
      revealCell(neighborRow,neighborColumn);
    }

  }

}
function countAdjacentMines(i, j){
  const neighbors = getNeighbors (i, j);
  let count = 0;

  for (const neighbor of neighbors){
    const { i: neighborRow, j: neighborColumn } = neighbor; 
    if(!board.includes(box.id)){
      count++;
    }
  }
  return count;
}
function getNeighbors(i,j){
  const neighbors = [];
  for (let i = i - 1; i <= i + 1; i++){
    for(let j = j -1; j <= j +1 ; j++){
      neighbors.push(i,j);
      
    }
    
  }
  return neighbors;
}
