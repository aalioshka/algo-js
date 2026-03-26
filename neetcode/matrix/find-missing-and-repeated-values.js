/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let twice = 0;
    let missing = 0;
    const N = grid.length;

    let hashMap = {};

    for(let row = 0; row < N; row++){
        for(let col = 0; col < N; col++){
            hashMap[grid[row][col]] = (hashMap[grid[row][col]] || 0) + 1;
        }
    }

    for(let i = 1; i <= N*N; i++){
        if(hashMap[i] === 2){
            twice = i;
        }
        if(hashMap[i] === undefined){
            missing = i;
        }
    }
    
    return [twice, missing];
};