class FakePriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(priority, val) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    // mocking priority queue with sorting O(N log N)
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const N = points.length;

  // Build adjacency list
  const adj = {};
  for (let i = 0; i < N; i++) {
    adj[i] = [];
  }

  for (let i = 0; i < N; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < N; j++) {
      const [x2, y2] = points[j];
      const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      adj[i].push([dist, j]);
      adj[j].push([dist, i]);
    }
  }

  // Prim's algorithm
  let res = 0;
  const visit = new Set();
  const pq = new FakePriorityQueue();

  pq.enqueue(0, 0); // [cost, node]

  while (visit.size < N) {
    const { priority: cost, val: i } = pq.dequeue();

    if (visit.has(i)) continue;

    res += cost;
    visit.add(i);

    for (const [neiCost, nei] of adj[i]) {
      if (!visit.has(nei)) {
        pq.enqueue(neiCost, nei);
      }
    }
  }

  return res;
};