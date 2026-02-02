// https://github.com/aalioshka/algo-js/blob/master/tree/binary-search-tree/depthFirstSearchInOrder.MD

//      10
//   5     13
// 2  7  11  16
// [2, 5, 7, 10, 11, 13, 16]

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let visited = [];
    
    function traverse(node) {
        if(node.left) traverse(node.left);
        visited.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(root);
    
    return visited[k-1];
};