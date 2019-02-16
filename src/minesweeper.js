const generatePlayerBoard  = (numberOfRows, numberOfColumns) => {
    let board = [];
    for(let i=0; i<numberOfRows; i++){
        let row=[];
        for(let j=0; j<numberOfColumns; j++){
            row.push(' ');
        }
        board.push(row);
    }
    return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for(let i=0; i<numberOfRows; i++){
        const row=[];
        for(let j=0; j<numberOfColumns; j++){
            row.push(' ');
        }
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
       //The code in me while loop has the potential to place bombs on top of already existing bombs
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if(board[randomRowIndex][randomColumnIndex] != 'B'){
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        }
    }
    return board;
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {

}

const printBoard = (board) => {
    console.log(board.map(row =>
        row.join('|')).join('\n'));
}

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3, 4, 7);
console.log('Player board:');
printBoard(playerBoard);
console.log('Bomb board:');
printBoard(bombBoard);
































