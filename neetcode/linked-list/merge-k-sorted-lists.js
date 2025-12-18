import { mergeTwoLists } from './merge-two-sorted-lists';

/*

K - number of linked lists
N - total number of nodes across all lists

a) Not optimal - easy to write

Time: O(N * K) (worst case)
Space: O(1) - The output list itself uses O(n) space, but that’s required and not counted as extra space

*/

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsA = function(lists) {
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

/*

b) divide & conquer

Time: O(N * log K)
Space: O(1) - same as a)

 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }

    
    while (lists.length > 1) {
        let mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = (i + 1 < lists.length) ? lists[i + 1] : null;

            mergedLists.push(mergeTwoLists(l1, l2));
        }

        lists = mergedLists;
    }
    return lists[0];
};