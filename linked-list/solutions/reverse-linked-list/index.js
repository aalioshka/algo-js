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
             1 -> 2 -> 3 -> 4
         p   c
            (n)  n
             p   c
    null <- 1    2 -> 3 -> 4
             p   c
                (n)   n
                 p    n
            1 <- 2    3 -> 4
                 p     n
                      (n)  n
                       p   c
            1 <- 2 <-  3   4
                       p   c
                          (n)   n
                           p   c
            1 <- 2 <- 3 <- 4
    end: ****

    */
    let previous = null; // previous
    let current = head; // current
    let next = head; // next
    while(current){
        // 1)
        next = current.next; // save reff from current to next
        // 2)
        current.next = previous; // change pointer from right to left

        // 3)
        // now move both previous and current pointers to the right
        // until we rich end of the list
        previous = current; // move previous to the right
        current = next; // move current to the right
    }
    return previous;
};
