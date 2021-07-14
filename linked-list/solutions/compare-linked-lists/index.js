// Compare strings stored in two Linked Lists . Return true if the strings stored in both the lists are simillar.
//
// List 1 : "He" -> " llo" -> "wor" -> "ld"
// List 2 : "H" --> "e" --> "ll" --> "owo" --> "r" --> "ld"
//
// Both the lists store "helloworld". Invterviewer was looking for more optimal algorithm.

function Node(val) {
    this.val = val;
    this.next = null;
}

let list1 = new Node('He');
list1.next = new Node('llo');
list1.next = new Node('wor');
list1.next = new Node('ld');

let list2 = new Node('H');
list2.next = new Node('e');
list2.next = new Node('ll');
list2.next = new Node('owo');
list2.next = new Node('r');
list2.next = new Node('ld');

function solution(list1, list2){
 // TODO: https://leetcode.com/discuss/interview-question/913010/facebook-phone-compare-linked-lists
}
