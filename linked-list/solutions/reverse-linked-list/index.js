/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    /*
    start: ****
        p1  p2
            (p3) p3
            p1   p2
            1 -> 2 -> 3 -> 4
    null <- 1    2 -> 3 -> 4
            p1   p2
                (p3) p3
                p1   p2
            1 <- 2   3 -> 4
                p1   p2
                    (p3) p3
                    p1   p2
            1 <- 2 <- 3   4
                    p1   p2
                        (p3) p3
                         p1   p2
            1 <- 2 <- 3 <- 4
    end: ****

    */
    let pointer1 = null; // previous
    let pointer2 = head; // current
    let pointer3 = head; // next
    while(pointer2){
        pointer3 = pointer2.next; // save reff from current to next
        pointer2.next = pointer1; // change pointer from right to left
        // now move both previous and current pointers to the right
        // until we rich end of the list
        pointer1 = pointer2; // move previous to the right
        pointer2 = pointer3; // move current to the right
    }
    return pointer1;
};
