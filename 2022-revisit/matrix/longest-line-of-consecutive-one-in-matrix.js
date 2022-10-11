/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
    const directions = {
        'down': [0,1],
        'right': [1,0],
        'diag': [1,1],
        'antidiag': [1, -1],
    }
    let max = 0

    const rec = (i, j, directions) =>{
        const [dy, dx] = directions;
        let count = 0;
        while(mat?.[i]?.[j]){
            count++
            i = i + dy
            j = j + dx
        }
        if(max < count) max = count
    }


    for(let i = 0; i < mat?.length; i++){
        for(let j = 0; j < mat[i]?.length; j++){
            if(mat[i][j] === 1){
                if(mat?.[i-1]?.[j] !== 1) rec(i, j, directions['right'])
                if(mat?.[i]?.[j-1] !== 1) rec(i, j, directions['down'])
                if(mat?.[i-1]?.[j-1] !== 1) rec(i, j, directions['diag'])
                if(mat?.[i-1]?.[j+1] !== 1) rec(i, j, directions['antidiag'])
            }
        }
    }

    return max
};