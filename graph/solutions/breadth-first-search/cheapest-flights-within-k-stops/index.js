/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const graph = makeGraph(flights);

    const visited = {};
    const queue = [];
    queue.push([src, 0]);

    let minPrice = Infinity;

    while (queue.length) {
        if (k < 0) break;
        k--;
        const level = queue.length;
        for (let i = 0; i < level; i++) {
            const [to, totalPrice] = queue.shift();
            const paths = graph[to] || [];

            for (let [connection, cost] of paths) {
                const newCost = cost + totalPrice;

                if (visited[connection] < newCost) continue;

                visited[connection] = newCost;

                if (connection === dst) {
                    minPrice = Math.min(minPrice, newCost);
                }

                queue.push([connection, newCost]);
            }
        }
    }

    return minPrice === Infinity ? -1 : minPrice;
};

const makeGraph = flights => {
    const graph = {};
    for (let [from, to, price] of flights) {
        graph[from] = graph[from] || [];
        graph[from].push([to, price]);
    }
    return graph;
}
