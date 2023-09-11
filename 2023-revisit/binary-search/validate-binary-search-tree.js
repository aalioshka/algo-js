// https://www.youtube.com/watch?v=s6ATEkipzow

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) return true;
    return validate(root, null, null);
};

function validate(node, min, max){
    if(min !== null && node.val <= min) return false;
    if(max !== null && node.val >= max) return false;

    if(node.left && !validate(node.left, min, node.val)) return false;
    if(node.right && !validate(node.right, node.val, max)) return false;

    return true;
}