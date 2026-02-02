/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/* 
            3(g)
        1       4(g)
    3(g)      1      5(g)

*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    return dfs(root, root.val);
};

function dfs(node, maxVal){
    if(!node){
        return 0;
    }

    let res = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(node.val, maxVal);
    res += dfs(node.left, maxVal);
    res += dfs(node.right, maxVal);
    return res;
}