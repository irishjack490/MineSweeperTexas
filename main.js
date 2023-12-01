 
 

 //Variables 

let rows = 5;
let columns = 5; 
const numberOfMines = 5;
let minesLocation = [];
let boxesClicked = 0;

const gameOver = false;



function setMines () { // I will change this to math random function, this is just for testing coordinates in array
   minesLocation.push();
   minesLocation.push();
   minesLocation.push();


}
//Create board with rows and columns
 function startGame(){
    const board = [];
    for(let i = 0; i < rows.length; i++){
    let rows = [];
      for(let j = 0; j < columns.length; i++){
        let box = document.createElement("div");
        document.getElementById(board).append(box);
        rows.push(box);   //boxes not rendering yet 
    }
    board.push(row);
  } 

}

function boxClicked () {

if (minesLocation.includes(box.id)){
    alert("GAME OVER");
    gameOver = true;
    return;
   }
}

