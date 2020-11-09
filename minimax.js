function bestMove() {
    //AI to make its move 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // is the spot available?
            if (board[i][j] == ''){
                available.push({i,j});
            }
        }
    }
    let move = random(available);
    board(move.i)(move.j) = ai;
    currentPlayer = human;
}