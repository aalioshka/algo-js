// neetcode: https://neetcode.io/solutions/remove-nth-node-from-end-of-list

/*
Time Complexity: O(N)
Space Complexity: O(1)
*/


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
  let dummy = {
    val: 0,
    next: head
  };

  let right = head;
  let left = dummy;
   
  while(right && n){
    right = right.next;
    n--
  }

    // Move right to the end,
    // Start move left
    // So we maintain gap (n) between them
    while (right) {
       right = right.next;
       left = left.next;
    }

    left.next = left.next.next;
    return dummy.next;
};