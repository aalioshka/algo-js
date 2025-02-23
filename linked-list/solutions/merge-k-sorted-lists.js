/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*

Time & Space Complexity

N = total number of elements across all lists
k = number of lists

1. Not optimal - easy to write

Time: O(k log k * n)
Space: O(1) (or O(n) for recursion)

2. Optimal

Time: O(N log k)
Space: O(k)

*/

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }

    // do loop till we merge all lists into one
    while (lists.length > 1) {
        let a = lists.pop(); // remove last list form lists array
        let b = lists.pop(); // remove another last list form lists array

        const c = mergeTwoLists(a, b); // get merged sorted list and put it back to lists array
        lists.push(c);
    }
    return lists[0];
};

function mergeTwoLists(l1, l2) {
    let dummyHead = {
        val: -1,
        next: null
    }

    let current = dummyHead

    while(l1 && l2){
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next
    }

    current.next = l1 || l2;

    return dummyHead.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists2 = function(lists) {
    let minHeap = new MinHeap();

    // Push the head of each list into the priority queue
    for (let list of lists) {
        if (list) minHeap.enqueue(list);
    }

    let dummy = new ListNode(-1);
    let current = dummy;

    while (!minHeap.isEmpty()) {
        let smallest = minHeap.dequeue();
        current.next = smallest;
        current = current.next;

        if (smallest.next) {
            minHeap.enqueue(smallest.next);
        }
    }

    return dummy.next;
};



class MinHeap {
    constructor() {
        this.heap = [];
    }

        enqueue(node) {
        this.heap.push(node);
        this._heapifyUp();
    }

    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }


    isEmpty() {
        return this.heap.length === 0;
    }

    _getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    _getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    _getRightChildIndex(i) {
        return 2 * i + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[this._getParentIndex(index)].val > this.heap[index].val
        ) {
            this._swap(index, this._getParentIndex(index));
            index = this._getParentIndex(index);
        }
    }

    _heapifyDown() {
        let index = 0;
        while (this._getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this._getLeftChildIndex(index);
            let rightChildIndex = this._getRightChildIndex(index);

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].val < this.heap[smallerChildIndex].val
            ) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index].val < this.heap[smallerChildIndex].val) {
                break;
            }

            this._swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }
}
