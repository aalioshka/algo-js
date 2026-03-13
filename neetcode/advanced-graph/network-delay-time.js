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
    // That would sort low → high
  }
}

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  const edges = {};

  // build adjacency list
  for (const [u, v, w] of times) {
    if (!edges[u]) edges[u] = [];
    edges[u].push([v, w]);
  }

  const pq = new FakePriorityQueue();
  pq.enqueue(0, k);

  const visit = new Set();
  let t = 0;

  while (pq.values.length) {
    const { val: n1, priority: w1 } = pq.dequeue();

    if (visit.has(n1)) continue;

    visit.add(n1);
    t = Math.max(t, w1);

    if (edges[n1]) {
      for (const [n2, w2] of edges[n1]) {
        if (!visit.has(n2)) {
          pq.enqueue(w1 + w2, n2);
        }
      }
    }
  }

  return visit.size === n ? t : -1;
};