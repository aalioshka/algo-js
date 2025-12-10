/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Approach 1: Hash Table
    let visited = new Set();
    let current = head;

    while(current){
        if(visited.has(current)){
            return true;
        }
        visited.add(current);
        current = current.next;
    }


    return false;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function(head) {
    // Approach 2: Two pointers
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
};