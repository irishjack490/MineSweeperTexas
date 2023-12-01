 


 //Variables 
const board = [];
const rows = 5;
const columns = 5; 
const numberOfMines = 5;
let minesLocation = [];
let boxesClicked = 0;

const gameOver = false;


window.onload = function(){
    startGame();
}
function setMines () { 
 while(setMines < numberOfMines){
    const row = Math.floor(Math.random () * rows);
    const column = Math.floor(Math.random ()* columns);
    if(!board[row][column].isMine){
        board[row][column].isMine=true;
        setMines++;
    }

  }
  
 }
// minesLocation.push("0-0");
//    minesLocation.push("2-2");
//    minesLocation.push("0-1");//these passed the test, changing to random generator

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

function boxClicked () {
 let box = this; 
 if (minesLocation.isMine) {
    alert("GAMER OVER");
    gameOver = true;
    return;
 }

}


