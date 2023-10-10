/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// based on https://leetcode.com/problems/binary-tree-vertical-order-traversal/discuss/76401/5ms-Java-Clean-Solution

// BFS, put node, col into queue at the same time
// Every left child access col - 1 while right child col + 1
// This maps node into different col buckets
// Get col boundary min and max on the fly
// Retrieve result from cols

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    const res = [];
    if (!root) {
        return res;
    }

    const map = {}; // new Map();
    const q = [];
    const cols = [];

    q.push(root);
    cols.push(0);

    let min = 0;
    let max = 0;

    while (q.length > 0) {
        const node = q.shift();
        const col = cols.shift();

        if (map[col] === undefined) { // !map.has(col);
            map[col] = []; // map.set(col, []);
        }
        map[col].push(node.val); // map.get(col).push(node.val);

        if (node.left) {
            q.push(node.left);
            cols.push(col - 1);
            min = Math.min(min, col - 1);
        }

        if (node.right) {
            q.push(node.right);
            cols.push(col + 1);
            max = Math.max(max, col + 1);
        }
    }

    for (let i = min; i <= max; i++) {
        res.push(map[i]); // map.get(i);
    }

    return res;
};
