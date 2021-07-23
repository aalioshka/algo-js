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
    /*
    n = 4
    
    p1(fast)
    p2(slow)
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
    
                            p1 (n + 1)
    p2
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
    
                                  p1
         p2
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8    
    
    .....
    
                                          p1
                   p2
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8  null 
    
    
    1 -> 2 -> 3 -> 4 -> X -> 6 -> 7 -> 8 
    */

    // use dummy head to handle removing head edge case (input: [1] , 1)
    let dummyHead = {
        val: -1,
        next: head
    };

    let fast = dummyHead;
    let slow = dummyHead;

    // Move fast n + 1 nodes ahead of slow
    for (let i = 0; i < n + 1; i++) {
        fast = fast.next;
    }

    // Move fast to end, slow will be (n + 1)th from last node, just before the node to remove
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    // Remove the nth from last node
    slow.next = slow.next.next;
    return dummyHead.next;
};
