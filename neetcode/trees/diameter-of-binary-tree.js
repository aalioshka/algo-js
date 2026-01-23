// https://neetcode.io/solutions/diameter-of-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function dfs(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        diameter = Math.max(diameter, leftHeight + rightHeight);

        // returning height
        return Math.max(leftHeight, rightHeight) + 1;
    }

    dfs(root);

    return diameter;
};