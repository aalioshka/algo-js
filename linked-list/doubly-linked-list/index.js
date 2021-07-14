function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {
    this.length = 0;
    this.head = null;
    this.tail = null;

    this.insert = function (position, element){
        if(position >= 0 && position <= this.length){
            let node = new Node(element);
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0){ // add on a first position
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            }  else if (position === this.length) { // last item
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while (index < position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            this.length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function (position) {
        if(position >= 0 && position < this.length) {
            let current = this.head;
            let previous;
            let index = 0;

            if(position === 0){
                this.head = current.next;

                //if there is only one item, update tail
                if(this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length - 1) { // last item
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }

            this.length--;
            return current.element;
        } else {
            return null;
        }
    }
}

let list = new DoublyLinkedList();
list.insert(0,15);
list.insert(1,10);
list.insert(2,8);
list.insert(3,5);
list.insert(4,1);
list.insert(5,0);
list.removeAt(2);
list.removeAt(3);
list.removeAt(0);
list.insert(0, 100);
list.removeAt(1);
list.insert(1, 50);
console.log(list);
