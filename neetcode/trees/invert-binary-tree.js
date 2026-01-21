/*

        4
    2       7
1      3 6      9

        4
    7       2
9      6 3      1

*/

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root){
        const temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
    }
    
    return root;
};