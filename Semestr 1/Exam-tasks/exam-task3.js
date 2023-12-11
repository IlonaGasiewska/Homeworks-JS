let sudokuBoard =[
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];


function getResolvedSudoku() {
    while (isIncludesZero()) {
        for (let i = 0; i < sudokuBoard.length; i++) {
            for (let j = 0; j < sudokuBoard[i].length; j++) {
                let currentNum = sudokuBoard[i][j];
                if (currentNum === 0) {
                    board[i][j] = findNumber(i, j);
                   
                }
            }
        }
    }
    return sudokuBoard.map(row => console.log(`${row} \n`));
}

function findNumber(row, column) {
    const allowNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let numberCandidates = [];

    for (const num of allowNum) {
        if (checkRow(row, num) && checkColumn(column, num) && checkSquare(row, column, num)) {
            numberCandidates.push(num);
        }
    }

    if (numberCandidates.length === 1) {
        return numberCandidates[0];
    } else {
        return 0;
    }
}

function checkRow(row, num) {
    return !sudokuBoard[row].includes(num);
}

function checkColumn(column, num) {
    for (let i = 0; i < sudokuBoard.length; i++) {
        if (sudokuBoard[i][column] === num) {
            return false;
        }
    }
    return true;
}

function checkSquare(startRow, startColumn, num) {
    const squareSize = 3;
    const squareRow = Math.floor(startRow / squareSize) * squareSize;
    const squareColumn = Math.floor(startColumn / squareSize) * squareSize;

    for (let i = 0; i < squareSize; i++) {
        for (let j = 0; j < squareSize; j++) {
            if (sudokuBoard[squareRow + i][squareColumn + j] === num) {
                return false;
            }
        }
    }
    return true;
}

function isIncludesZero() {
    return sudokuBoard.some(row => row.includes(0));
}

getResolvedSudoku();
