// Note:
//
// grid[i][j] is only 0, 1, or 2.
// 0 representing an empty cell;
// 1 representing a fresh orange;
// 2 representing a rotten orange.
//
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
//
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
// If this is impossible, return -1 instead.

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
        const size = queue.length; // we start new depth
        
        for(let i = 0; i < size; i++){
            // The shift() method of Array instances removes the first element from an array and returns that removed element. 
            // This method changes the length of the array.
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

const input1 = [
    [2,1,1],
    [1,1,0],
    [0,1,1]
];

const input2 = [
    [2,1,1],
    [0,1,1],
    [1,0,1]
]

const input3 = [
    [0,2]
]

console.log(orangesRotting(input1)); // 4
console.log(orangesRotting(input2)); // -1
console.log(orangesRotting(input3)); // 0
