/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length){
        return [];
    }

    let rows = matrix.length;
    let columns = matrix[0].length;

    //Use 4 pointes to create wall around the shape
    let up = 0;
    let left = 0;
    let right = columns - 1;
    let down = rows - 1;

    let result = [];

    while(up <= down && left <= right){

        // move from left to right
        for(let col = left; col <= right; col++){
            result.push(matrix[up][col]);
        }
        up++; // mark row as traversed after moving right

        // move from up to down
        for(let row = up; row <= down; row++){
            result.push(matrix[row][right]);
        }
        right--; //mark column as traversed after moving down

        if(up <= down) {
            // move from right to left
            for(let col = right; col >= left; col--){
                result.push(matrix[down][col])
            }
            down--; // moark row as traversed after moving left
        }

        if(left <= right){
            // move up
            for(let row = down; row >= up; row--){
                result.push(matrix[row][left])
            }
            left++; //mark column as traversed after moving up
        }
    }

    return result;
};