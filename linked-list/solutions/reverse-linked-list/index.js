/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let previous = null;
    let current = head;
    let next = head;
    
    while(current) {
        // 1) save reff from current to next
        next = current.next;
        
        // 2) change pointer from right to the left
        current.next = previous;
        
        // 3) now move both prev and curr to the right
        previous = current;
        current = next;
        
        // and repeat while loop until we rich end of the list
    }
    
    return previous;
};

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
                           p    c
            1 <- 2 <- 3 <- 4
    end: ****
*/
