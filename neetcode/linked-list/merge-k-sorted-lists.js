/*

divide & conquer

Time: O(N * log K)
Space: O(1)

K = number of lists
N = total number of nodes across all lists

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
            mergedLists.push(mergeTwoLists(lists[i], lists[i + 1] || null));
        }

        lists = mergedLists;
    }
    return lists[0];
};

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