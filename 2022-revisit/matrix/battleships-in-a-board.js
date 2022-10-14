/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    let dirs = [
        [0, 1], // down
        [1, 0], // right
    ]

    if(!board || !board[0]){
        return count;
    }

    let rows = board.length;
    let cols = board[0].length;

    for(let x = 0; x < rows; x++){
        for(let y = 0; y < cols; y++){
            if(board[x][y] === 'X') {
                board[x][y] = 0; // visited
                count++;
                if(!board[x]?.[y -1] || board[x]?.[y -1] === '.') {
                    bfs(x, y, dirs[0]);
                }
                if(!board[x-1]?.[y] || board[x-1]?.[y] === '.') {
                    bfs(x,y , dirs[1]);
                }
            }
        }
    }

    function bfs(x, y, dirs) {
        while(board[x + dirs[0]]?.[y + dirs[1]] === 'X') {
            board[x + dirs[0]][y + dirs[1]] = 0; // visited
            x = x + dirs[0];
            y = y + dirs[1];
        }
    }

    return count;

};