/*
        a
	  /   \
	 b     *q
    /
   *p

*/

// Find the depths of p and q (in this case it is 2 and 1 respectively)
// Equalize the depths so that we can start off from the same tree level
// Start bubbling up simultaneously from both nodes until we reach the same node (p === q)

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    let pDepth = getDepth(p);
    let qDepth = getDepth(q);

    while (pDepth !== qDepth) {
        if (pDepth > qDepth) {
            p = p.parent;
            pDepth--;
        } else {
            q = q.parent;
            qDepth--;
        }
    }


    while (p !== q) {
        p = p.parent || p;
        q = q.parent || q;
    }

    return p;
};

var getDepth = function (node) {
    let depth = 0;

    while(node) {
        node = node.parent;
        depth++;
    }

    return depth;
}