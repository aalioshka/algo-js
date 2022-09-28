/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    // 1) Build directions for both start and destination from the root.
    // *  Say we get "LLRRL" and "LRR".

    // 2) Remove(ignore) common prefix path.
    // * We ignore "L",
    // * "[L]LRRL" and "[L]RR".
    // * and now start direction is "LRRL", and destination - "RR"

    // 3) Replace all steps in the start direction to "U" and add destination direction.
    // The result is "UUUU" + "RR".

    // 1)
    let start = dfs(root, startValue, '');;
    let dest = dfs(root, destValue, '');

    function dfs(root, val, dirString){
        if(!root) {
            return '';
        } else if(root.val === val) {
            return dirString;
        } else {
            return dfs(root.left, val, dirString + 'L') + dfs(root.right, val, dirString + 'R');
        }
    }

    // 2)
    let i = 0;

    for (; i < start.length && i < dest.length && start[i] === dest[i]; i++);

    // 3)
    let result = '';
    for(let j = i; j < start.length; j++ ){ // first we ignore common path in start
        result = result + 'U';
    }

    return result + dest.substring(i); // second we ignore common path in dest dest.substring(i);
};