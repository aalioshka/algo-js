// https://leetcode.com/problems/top-k-frequent-elements/discuss/480532/javascript-hash-map-max-heap-priority-queue-solution

// 1) O(N log N) for sort

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // results array
    let results = [];

    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(N), where n is nums.length
    let map = {};
    nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);

    // 2) sort the map keys array based on its frequency
    // it costs O(N log N), where n is nums.length
    let sortedKeys = Object.keys(map).sort((a,b)=>map[b]-map[a]);

    // 3) take first k results
    for(let i = 0; i < k; i++){
        results.push(sortedKeys[i]);
    }

    // as result we have O(n Log n) where n is length of nums
    return results;
};

// 2) O(N Log N) - PriorityQueue: 1) O(N) to build a map; 2) O(Log N) for PriorityQueue operations

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent2 = function(nums, k) {
    // results array
    let results = [];

    // 1) first step is to build a hash map, where "element -> its frequency"
    // it costs O(N), where n is nums.length
    let map = {};
    nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);

    let pq = new PriorityQueueImpl();
    // 2) enqueue each map element to max binary heap priority queue
    for(let key in map){
        pq.enqueue(key, map[key]); // pq.enqueue is O(log N)
    }

    // 3) k times dequeue element from priority queue and push it to results array
    for(let i = 0; i < k; i++){
        results.push(pq.dequeue()); // pq.dequeue() is O(log N)
    }

    // return results array
    return results;
};

class PriorityQueueImpl {
    constructor(){
        this._values = [];
    }

    enqueue(val, priority){
        this._values.push(new Node(val, priority));
        this._traverseUp();
    }

    dequeue(){
        const max = this._values[0];
        const end = this._values.pop();
        if(this._values.length > 0){
            this._values[0] = end;
            this._traverseDown();
        }
        return max.val;

    }

    _traverseUp(){
        let idx = this._values.length - 1;
        const el = this._values[idx];
        while(idx > 0){
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this._values[pIdx];
            if(el.priority <= parent.priority) break;
            this._values[pIdx] = el;
            this._values[idx] = parent;
            idx = pIdx;
        }
    }

    _traverseDown(){
        let leftChildIdx = null;
        let rightChildIdx = null;
        let leftChild = null;
        let rightChild = null;
        let swapIdx = null;

        let idx = 0;
        const el = this._values[idx];
        while(true){
            swapIdx = null;
            leftChildIdx = 2 * idx + 1;
            rightChildIdx = 2 * idx + 2;

            if(leftChildIdx < this._values.length){
                leftChild = this._values[leftChildIdx];
                if(leftChild.priority > el.priority){
                    swapIdx = leftChildIdx;
                }
            }

            if(rightChildIdx < this._values.length){
                rightChild = this._values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority > el.priority) ||
                    (swapIdx !==null && rightChild.priority > leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if(swapIdx === null) break;
            this._values[idx] = this._values[swapIdx];
            this._values[swapIdx] = el;
            idx = swapIdx
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

// 3) O(N Log N) Neetcode

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent3 = function(nums, k) {
    let bucketArray = new Array(nums.length + 1).fill(new Array(0)); // need new Array(nums.length + 1) to handle edge case [1], 1, since bucketArray[1] won't exist
    let frequency = {};

    for(let i = 0; i < nums.length; i++) {
        frequency[nums[i]] = 1 + (frequency[nums[i]] || 0);
    }

    let keys = Object.keys(frequency);

    for(let i = 0; i < keys.length; i++){
        let freq = frequency[keys[i]];
        bucketArray[freq] = [...bucketArray[freq], keys[i]];
    };

    let outPut = [];

    for(let i = bucketArray.length - 1; i >= 0; i--){
        if(bucketArray[i].length !== 0) {
            outPut = [...outPut, ...bucketArray[i]];
        }
        if(outPut.length >= k) {
            break;
        }
    }

    return outPut.slice(0, k);
};