/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = {
        val: 0,
        next: head
    };

    let left = dummyHead;
    let right = head;

    while (n > 0) {
        right = right.next;
        n -= 1;
    }

    while (right) {
        left = left.next;
        right = right.next;
    }

    // delete
    left.next = left.next.next
    return dummyHead.next;
};