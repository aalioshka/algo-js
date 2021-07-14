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
    // 1: Two pass algorithm
    // let dummy = {next:head};
    // let len = 0;
    // let temp = head;
    // while (temp) {
    //     len++;
    //     temp = temp.next;
    // }
    // len -= n;
    // current = dummy;
    // while(len > 0){
    //     len--;
    //     current = current.next;
    // }
    // current.next = current.next.next;
    // return dummy.next;

    // 2: One pass
    let dummy = {next:head};
    let slow = dummy;
    let fast = head;


    while(n > 1) {
        fast = fast.next;
        n--;
    }

    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};
