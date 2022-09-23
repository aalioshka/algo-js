```javascript
function Node(val) {
    this.val = val;
    this.next = null;
}

function  LinkedList() {
    this.head = null;
    this.length = 0;

    // adds new item to the end of the list
    this.append = function (element) {
        let node = new Node(element);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }
}

// test
let list = new LinkedList();
list.append(15);
list.append(10);
list.append(8);
list.append(5);
list.append(1);
list.append(0);
console.log(list);
```
[all code](index.js)