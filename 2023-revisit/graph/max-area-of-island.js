/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[row].length; col++){
            if(grid[row][col] === 1){
                grid[row][col] = -1; // mark as visited
                max = Math.max(exploreIsland(grid, row, col), max);
            }
        }
    }
    return max;
};

function exploreIsland(grid, r, c){
    let area = 1;

    // check up
    if(grid[r+1] && grid[r+1][c] === 1){
        grid[r+1][c] = -1;
        area = area + exploreIsland(grid, r+1, c);
    }

    // check down
    if(grid[r-1] && grid[r-1][c] === 1){
        grid[r-1][c] = -1;
        area = area + exploreIsland(grid, r-1, c);
    }

    // check right
    if(grid[r][c+1] === 1){
        grid[r][c+1] = -1;
        area = area + exploreIsland(grid, r, c+1);
    }

    // check left
    if(grid[r][c-1] === 1){
        grid[r][c-1] = -1;
        area = area + exploreIsland(grid, r, c-1);
    }

    return area;
}