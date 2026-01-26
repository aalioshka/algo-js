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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // The order is very important for 1), 2), 3) and 4)
    
    // 1)
    if (!subRoot) {
        // if subtree is null, it can be subtree of any tree
        return true;
    }
    
    // 2)
    if (!root) {
        // if tree is empty, but subtree is not, then it can not be a subtree of that tree
        return false;
    }
    
    // 3) check if self are the same tree
    if(isSameTree(root, subRoot)){
        return true;
    }
    
    // 4) check if right or left are the same tree recursively 
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(a, b) {
    if (!a && !b) return true;
    if (!a || !b) return false;
    
    return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
};