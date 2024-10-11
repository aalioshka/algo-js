// Leetcode: Approach 1: Doubly Linked List 

/*
neetcode: https://youtu.be/7ABFKPK2hD4
Time complexity: O(1) for both get and put.

1) add() -> to the end
2) remove() -> removing reff
3) get() -> check map if exists -> call remove -> call add
4) put() -> check map and call remove() if exists ->  add to map and call add() -> if cap exceeded we remove from the Head and from the map


dummyHead <-> 1 <-> 2 <-> 3 <-> dummyTail
*/
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.dummyHead = new Node(null, null);
        this.dummyTail = new Node(null, null);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    add(node) { // add to the end
        const current = this.dummyTail.prev;
        current.next = node;
        node.prev = current;
        node.next = this.dummyTail;
        this.dummyTail.prev = node;
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.add(node);
            return node.val;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.add(newNode);

        if (this.cache.size > this.cap) {
            const lru = this.dummyHead.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}

// Testing

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4
