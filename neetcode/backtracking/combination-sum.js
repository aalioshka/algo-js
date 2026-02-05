// neetcode: https://www.youtube.com/watch?v=GBKI9VSKdGg

/*

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

n = candidates.length
T = target
m = min(candidates)

Time Complexity:
Exponential, approximately O(2^(target / min(candidates)))

Space Complexity:
O(target / min(candidates)) for recursion stack and current combination (excluding output)

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    function dfs(i, cur, total){
        if(total === target){
            res.push([...cur]);
            return;
        }

        if(i >= candidates.length || total > target){
            return;
        }

        cur.push(candidates[i]);
        dfs(i, cur, total + candidates[i]);

        cur.pop();
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);

    return res;
};