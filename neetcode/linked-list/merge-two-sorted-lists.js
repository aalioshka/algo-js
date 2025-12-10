/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = {
        val: -1,
        next: null
    }
    
    let current = dummyHead;
    
    while(list1 && list2) {
        // 1) while both not null
        if(list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        
        // move current
        current = current.next
    }
    
    // 2) one of the list might be not null
    current.next = list1 || list2;
    
    return dummyHead.next;
};