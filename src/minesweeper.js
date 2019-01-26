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
        let row=[];
        for(let j=0; j<numberOfColumns; j++){
            row.push(null);
        }
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
       //The code in me while loop has the potential to place bombson top of already existing bombs
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * (numberOfRows-1));
        let randomColumnIndex = Math.floor(Math.random() * (numberOfColumns-1));
        board[randomRowIndex][randomColumnIndex] == 'B';
        numberOfBombsPlaced++;
    }
    return board;
}

const printBoard = (board) => {
    console.log(board.map(row =>
        row.join('|')).join('/n'));
}
































