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

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next){
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

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

    this.insertAt = function (position, element){
        if(position >= 0 && position <= this.length){
            let node = new Node(element);
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0){
                node.next = current;
                this.head = node;
            } else {
                while (index < position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }

            this.length++;
            return true;
        } else {
            return false;
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
list.insertAt(0, 100);
list.removeAt(1);
list.insertAt(1, 50);
console.log(list);
