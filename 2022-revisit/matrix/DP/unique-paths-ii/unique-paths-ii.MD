This solution is based on DP [unique-paths](../unique-paths/unique-paths.MD)

![1](1.png)
![1](2.png)
![1](3.png)
![1](4.png)
![1](5.png)
![1](6.png)
![1](7.png)
![1](8.png)
![1](9.png)
![1](10.png)
![1](11.png)
![1](12.png)
![1](13.png)
![1](14.png)
![1](15.png)

```javascript
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
// 1) Dynamic programming
// Time O(mn)
// Space O(mn)
    
    if(obstacleGrid[0]?.[0] === 1) {
        return 0;
    }
    
    const rows = obstacleGrid.length; // m
    const cols = obstacleGrid[0].length; // n
    
    let dp = new Array(rows).fill([]).map(() => {
        return new Array(cols).fill(1);
    });
    
    // correction for calculation: A); B)
    
    // A) iterate first row
    for(let i = 1; i < rows; i++){
        if(obstacleGrid[i][0] === 1){
            dp[i][0] = 0;
        } else {
            dp[i][0] = dp[i-1][0];
        }
    }
    
    // B) iterate first col
    for(let j = 1; j < cols; j++){
        if(obstacleGrid[0][j] === 1){
            dp[0][j] = 0;
        } else {
            dp[0][j] = dp[0][j-1];
        }
    }
    
    
    for(let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i][j-1] + dp[i-1][j];
            }
        }
    }
    
    return dp[rows-1][cols-1];
};
```