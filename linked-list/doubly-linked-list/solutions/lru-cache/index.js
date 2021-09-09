// Approach 2: Hashmap + DoubleLinkedList https://leetcode.com/problems/lru-cache/discuss/446715/JavaScript-Solution
/*****************************/
// DLL implementation
var Node = function(key, value) {
    this.key = key;
    this.val = value;
    this.prev = null;
    this.next = null;
}

/**
 * DoublyLinkedList Class
 * @constructor initilize head & tail
 * @action insertHead
 * @action removeNode
 * @action moveToHead
 * @action removeTail
 */
var DoublyLinkedList = function() {
    this.head = new Node(); // dummy head
    this.tail = new Node(); // dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

/**
 * Insert a new node right after head
 * @param {Node} node
 */
DoublyLinkedList.prototype.insertHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

/**
 * Remove a node from the linked list
 * @param {Node} node
 */
DoublyLinkedList.prototype.removeNode = function(node) {
    let { prev, next } = node;
    prev.next = next;
    next.prev = prev;
}

/**
 * Move a node to the head
 * @param {Node} node
 */
DoublyLinkedList.prototype.moveToHead = function(node){
    this.removeNode(node);
    this.insertHead(node);
}

/**
 * Remove the tail element and return its key
 * @return {String}
 */
DoublyLinkedList.prototype.removeTail = function() {
    let tail = this.tail.prev;
    this.removeNode(tail);
    return tail.key;
}

/****************************/
// Solution

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.hash = new Map();
    this.dll = new DoublyLinkedList();
};


/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash.get(key);
    if (!node) return -1;
    this.dll.moveToHead(node);
    return node.val;
};

LRUCache.prototype.put = function(key, value) {
    let node = this.hash.get(key);
    if (node==null) { // new node
        let newNode = new Node(key, value);
        this.hash.set(key, newNode);
        this.dll.insertHead(newNode);
        this.currentSize++;
        if (this.currentSize > this.capacity) {
            let tailKey = this.dll.removeTail();
            this.hash.delete(tailKey);
            this.currentSize--;
        }
    } else { // existed node, update its value and move to head;
        node.val = value;
        this.dll.moveToHead(node);
    }
};

// Approach 1: Ordered dictionary

// var LRUCache = function(capacity) {
//     this.cache = new Map();
//     this.capacity = capacity;
// };

/**
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function(key) {
//     if (!this.cache.has(key)) return -1;

//     const v = this.cache.get(key);
//     this.cache.delete(key);
//     this.cache.set(key, v);
//     return this.cache.get(key);
// };

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.has(key)) {
//       this.cache.delete(key);
//     }
//     this.cache.set(key, value);
//     if (this.cache.size > this.capacity) {
//       this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
//     }
// };

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
