// Neetcode: https://www.youtube.com/watch?v=gs2LMfuOR9k

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*

        6
    2       8
  0   4   7    9
     3 5

p = 2, q = 8
Output: 6

p = 0, q = 3
Output: 2

*/

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let curr = root;
    while(curr) {
        if(p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        } else if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        } else {
            // we found the split: this is our lowest common ancestor
            return curr;
        }
    }
    
};