/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const orig = image[sr][sc];

    if(orig === color) return image

    const m = image.length;
    const n = image[0].length;
    
    dfs(sr, sc);

    function dfs(r, c){
        if(r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== orig){
            return;
        }

        image[r][c] = color;

        dfs(r + 1, c); // check up
        dfs(r - 1, c); // check down
        dfs(r, c + 1); // check right
        dfs(r, c - 1); // check left
    }

    return image;
};