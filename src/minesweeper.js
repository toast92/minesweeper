class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }
    get playerBoard(){
       return this._playerBoard;
    }

    flipTile = (rowIndex, columnIndex) => {
        if(this._playerBoard[rowIndex][columnIndex] !== ' '){
            console.log('This tile has already been turned!');
            return;
        } else if(this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    }
    getNumberOfNeighborBombs(rowIndex, columnIndex){
        const neighborOffsets = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];
    
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        let numberOfBombs = 0;
    
        neighborOffsets.forEach(offset => {
            const neighborRowIndex = rowIndex + offset[0];
            const neighborColumnIndex = columnIndex + offset[1];
            if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
                    numberOfBombs++;
                }
            }
        });
        return numberOfBombs;
    }

    hasSafeTiles(){
       return this._numberOfTiles == this._numberOfBombs;
    }

    print(){
        console.log(this._playerBoard.map(row =>
            row.join('|')).join('\n'));
    }

    static generatePlayerBoard(numberOfRows, numberOfColumns){
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

//the purpose of this function is to return the number of bombs in an adjacent neighbor.






let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3, 4, 4);
console.log('Player board:');
printBoard(playerBoard);
console.log('Bomb board:');
printBoard(bombBoard);
//--> will flip the tile at the 0,0 location on the board
flipTile(playerBoard, bombBoard, 1, 1); 
console.log('Updated player board:');
printBoard(playerBoard);
































