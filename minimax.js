function bestMove() {
    //AI to make its move 
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // is the spot available?
            if (board[i][j] == ''){
                board[i][j] = ai;
                let score = minimax(board);
                board[i][j] = '';
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = {i, j};
                }
            }
        }
    }
    let move = random(available);
    board(move.i)(move.j) = ai;
    currentPlayer = human;
}

function minimax(board) {
    return 1;
}