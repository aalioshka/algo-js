// Leetcode: Approach 1: Doubly Linked List 

/*
1) Store a key-value pair
2) Update a key-value pair
3) Given a key, determine if it exists in the data structure. If it does, return the value. If it doesn't, return -1.
4) When a new key-value pair is added, create a new linked list node and put it at the back.
5) When an existing key is updated or fetched, find its associated linked list node. Move it to the back.
6) When a new key-value pair is added and the size of the data structure exceeds capacity, remove the linked list node at the front.

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
