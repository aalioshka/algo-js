// neetcode https://youtu.be/wgFPrzTjm7s

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let cur = dummy;
    
    let carry = 0;
    while(l1 || l2 || carry) {
        let v1 = l1?.val || 0;
        let v2 = l2?.val || 0;
        
        // Calculate new digit
        let val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        val = val % 10;
       
        // Create new node and update pointers
        cur.next = new ListNode(val);
        cur = cur.next;

        // Move to the next nodes
        l1 = l1?.next;
        l2 = l2?.next;
    }
    
    return dummy.next;
};
