// Approach 4: Merge lists one by one
// Time complexity : O(kN) where k is the number of linked lists.
// Space complexity : O(kN)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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

// https://leetcode.com/problems/merge-two-sorted-lists/
function mergeTwoLists(l1, l2) {
    let mergedHead = { val : -1, next : null }; // set dummy value to the head
    let pointer = mergedHead;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            pointer.next = l1;
            l1 = l1.next;
        } else {
            pointer.next = l2;
            l2 = l2.next;
        }
        pointer = pointer.next;
    }
    pointer.next = l1 || l2; // length of the l1 and l2 can be different
                             // we assign the rest to pointer.next

    return mergedHead.next;
};
