/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const start = 'JFK';
    let adjacencylist = {};

    // building adjacency list
    for(let i = 0; i < tickets.length; i++){
        let [from, to] = tickets[i];
        if(!adjacencylist[from]){
            adjacencylist[from] = [];
        }
        adjacencylist[from].push(to);
    }

    // to satisfy itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"]
    for(let from in adjacencylist){
        adjacencylist[from].sort();
    }

    let results = depthFirstSearchPostOrder(adjacencylist, start);
    return results.reverse();
};

function depthFirstSearchPostOrder(adjacencylist, start){
    let results = [];
    function traverse(from){
        let toArr = adjacencylist[from];
        while(toArr && toArr.length){
            traverse(toArr.shift());
        }
        results.push(from);
    }
    traverse(start)
    return results;
}
