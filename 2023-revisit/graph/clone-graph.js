/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = [];
 * };
 */

// BFS
var cloneGraph = function(node) {
    if(!node) {
        return node
    }
    let map = new Map()
    map.set(node, new Node(node.val, []))
    let queue = [node]
    while(queue.length !==0) {
        let curr = queue.shift()
        for(let neighbor of curr.neighbors) {
            if(!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val, []))
                queue.push(neighbor)
            }
            map.get(curr).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(node)
}


// DFS
// let map = new Map()
// var cloneGraph = function(node) {
//     if(!node) {
//         return node
//     }
//     if(map.has(node)) {
//         return map.get(node)
//     }

//     let clone = new Node(node.val, [])
//     map.set(node, clone)

//     for(let neighbor of node.neighbors) {
//         clone.neighbors.push(cloneGraph(neighbor))
//     }
//     return clone
// }
