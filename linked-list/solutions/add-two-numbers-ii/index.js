// https://leetcode.com/problems/add-two-numbers-ii/discuss/1351044/JavaScript-stack-solution

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];

    let current = l1;
    while(current){
        stack1.push(current.val);
        current = current.next;
    }
    current = l2;
    while(current){
        stack2.push(current.val);
        current = current.next;
    }

    let sum = 0;
    let list = new ListNode(sum);

    while(stack1.length || stack2.length) {
        if(stack1.length) sum += stack1.pop();
        if(stack2.length) sum += stack2.pop();

        list.val = sum % 10;
        let dummyHead = new ListNode(Math.floor(sum / 10));
        dummyHead.next = list;
        list = dummyHead;
        sum  = Math.floor(sum / 10);
    }

    return list.val === 0 ? list.next : list;
};
