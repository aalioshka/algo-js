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

/*
Example

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

[2,4,3] -> l1 in reversed order
[5,6,4] -> l2 in reversed order
[7,0,8] -> result in reversed oeder

*/


function ListNode(val) {
    this.val = val;
    this.next = null;
}


let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2))