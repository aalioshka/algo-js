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
 * @return {number[][]}
 */
var findLeaves = function(root) {
    const leaves = {};

    function dfs(node) {
        if(!node){
            return 0;
        }

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);
        const depth = Math.max(leftDepth, rightDepth);

        if(leaves[depth]){
            leaves[depth].push(node.val);
        } else {
            leaves[depth] = [node.val];
        }

        return depth + 1;
    }

    dfs(root);

    return Object.values(leaves);
};