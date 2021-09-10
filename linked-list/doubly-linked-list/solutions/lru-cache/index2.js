// inspired by https://leetcode.com/problems/lru-cache/discuss/617415/JavaScript-2-Solutions-(ES6-Map-vs-Doubly-linked-list)
// Solution 2 - Using Object and Doubly linked list
function Node(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    this.push = function(key, val) {
        const newNode = new Node(key, val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    this.remove = function(node) {
        if(!node.next && !node.prev) { // if there's only 1 node
            this.head === null;
            this.tail === null;
        } else if(!node.next) { // if the node is tail node
            this.tail = node.prev;
            this.tail.next = null;
        } else if(!node.prev) { // if the node is head node
            this.head = node.next;
            this.head.prev = null;
        } else { // if the node is in between
            const beforeNode = node.prev;
            const afterNode = node.next;
            beforeNode.next = afterNode;
            afterNode.prev = beforeNode;
        }
        this.length--;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.DLL = new DoublyLinkedList();
    this.cache = {};
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache[key]) return -1;
    const { val } = this.cache[key];
    this.DLL.remove(this.cache[key]);
    this.cache[key] = this.DLL.push(key, val);
    return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache[key]) this.DLL.remove(this.cache[key]);
    this.cache[key] = this.DLL.push(key, value);
    if(this.DLL.length > this.capacity) {
        const currKey = this.DLL.head.key;
        delete this.cache[currKey];
        this.DLL.remove(this.DLL.head);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
