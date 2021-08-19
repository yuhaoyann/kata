const generateBoard = function (whiteQueen, blackQueen) {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++){
      board[i][j] = 0;
    }
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}
const queenThreat = function (generatedBoard) {
  let a = [];
  let b = [];
  for (let x = 0; x < generatedBoard.length; x++) {
    for (let y = 0; y < generatedBoard[x].length; y++) {
      if (generatedBoard[x][y] === 1) {
        a.push(x);
        a.push(y);
      }
    }
  }
  b.push(a[2], a[3]);
  a.pop()
  a.pop()
  console.log(a);
  console.log(b);
  if ((a[0] === b[0]) || (a[1] === b[1]) || (a[0] - b[0] + a[1] - b[1] === 0)) {
    return true;
  } else {
    return false;
  }
}


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));