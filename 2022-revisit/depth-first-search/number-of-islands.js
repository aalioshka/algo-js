/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0;
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if(grid[i][j] == 1) {
                grid[i][j] = -1; // mark as visited
                num++;
                dfs(grid, i, j);
            }
        }
    }
    return num;
};

function dfs(grid, rid, cid) {
    // check up
    if(grid[rid+1] && grid[rid+1][cid] == 1){
        grid[rid+1][cid] = -1; // mark as visited
        dfs(grid, rid+1, cid);
    }

    // check down
    if(grid[rid-1] && grid[rid-1][cid] == 1) {
        grid[rid-1][cid] = -1; // mark as visited
        dfs(grid, rid-1, cid);
    }

    // check right
    if(grid[rid][cid+1] == 1) {
        grid[rid][cid+1] = -1; // mark as visited
        dfs(grid, rid, cid+1);
    }

    // check left
    if(grid[rid][cid-1] == 1) {
        grid[rid][cid-1] = -1; // mark as visited
        dfs(grid, rid, cid-1);
    }
}