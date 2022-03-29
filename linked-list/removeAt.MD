```javascript
function Node(val) {
    this.val = val;
    this.next = null;
}

function  LinkedList() {
    this.head = null;
    this.length = 0;

    this.removeAt = function (position) {
        if(position >= 0 && position < this.length) {
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0){
                this.head = current.next;
            } else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }

            this.length--;
            return current.val;
        } else {
            return null;
        }
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

list.removeAt(2);
list.removeAt(3);
list.removeAt(0);
console.log(list);
```