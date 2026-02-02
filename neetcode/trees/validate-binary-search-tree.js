// neetcode: https://www.youtube.com/watch?v=s6ATEkipzow

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, -Infinity, Infinity);
};

function validate(node, min, max){
    if(node === null) return true;

    if(!(min < node.val && node.val < max)) return false;

    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}