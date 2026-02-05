// neetcode: https://www.youtube.com/watch?v=FOyRpNUSFeA

/*

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]


*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    res = [];
    candidates.sort((a,b) => a - b);

    function dfs(i, cur, total) {
        if(total === target){
            res.push([...cur]);
            return;
        }

        if(total > target || i >= candidates.length){
            return;
        }

        // include candidates[i]
        cur.push(candidates[i]);
        dfs(i + 1, cur, total + candidates[i]);
        cur.pop()

        // skip candidates[i]
        while(i + 1 < candidates.length && candidates[i] === candidates[i + 1]){
            i++;
        }
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
};