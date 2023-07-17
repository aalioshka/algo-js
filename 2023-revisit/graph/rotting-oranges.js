/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let depth = 0; // our minutes
    let queue = []; // to add rotten oranges
    let freshOranges = 0;

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] === 1){
                freshOranges++;
            }
            if(grid[row][col] === 2){
                queue.push([row, col]);
            }
        }
    }

    while (queue.length && freshOranges) {
        let size = queue.length; // we start new depth

        for(let i = 0; i < size; i++){
            let [_row, _col] = queue.shift(); // rotten orange
            rotNeighbors(_row, _col);
        }

        // we are done with current level/depth
        // lets up it and start traversing all neighbors we collected
        depth++;
    }

    if(freshOranges !== 0){
        return -1
    }
    return depth;

    // rot surrounding oranges
    // Add them to the queue
    function rotNeighbors(row, col){
        // check up
        if(grid[row+1] && grid[row+1][col] === 1){
            freshOranges--;
            grid[row+1][col] = 2;
            queue.push([row+1, col]);
        }

        // check down
        if(grid[row-1] && grid[row-1][col] === 1){
            freshOranges--;
            grid[row-1][col] = 2;
            queue.push([row-1, col]);
        }


        // check right
        if(grid[row][col+1] === 1){
            freshOranges--;
            grid[row][col+1] = 2;
            queue.push([row, col+1]);
        }

        // check left
        if(grid[row][col-1] === 1){
            freshOranges--;
            grid[row][col-1] = 2;
            queue.push([row, col-1]);
        }
    }
};