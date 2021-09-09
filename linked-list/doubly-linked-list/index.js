function DoublyLinkedList(){
    this.length = 0;
    this.head = null;
    this.tail = null;

    this.push = function(val){
        let newNode = new Node(val);
        if(!this.head){ // DLL is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 99 is a tail, 100 is a new data
            this.tail.next = newNode; // 99 -> 100
            newNode.prev = this.tail; // 99 <- 100
            this.tail = newNode; // 99 was a tail before, now 100 is a tail
        }
        this.length++;
        return this;
    }

    this.pop = function(){
        if(!this.head) return undefined;

        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            /*     T
            1)
            1 3 -> 7
            1 3 <- 7

              T
            1 3 -> 7
            1 3 <- 7
            */
            this.tail = poppedNode.prev;
            // 2)
            //   T
            // 1 3 -> 7
            // 1 3    7
            this.tail.next = null;
            // 3)
            //   T
            // 1 3 <- 7
            // 1 3    7
            poppedNode.prev = null;

        }
        this.length--;
        return poppedNode;
    }

    this.shift = function(){
        if(!this.head) return undefined;

        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            // 1)
            // H ->
            // 99 100 // move head from 99 to 100
            //   <-
            this.head = oldHead.next;

            // 2) - remove connections
            this.head.prev = null;
            oldHead.next = null;
            //    H
            // 99 100
            //
        }

        this.length--;
        return oldHead;
    }

    this.unshift = function(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    this.get = function(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index <= this.length / 2) {
            // iterate from the head
            let count = 0;
            let current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
            return current;
        } else {
            // iterate from the tail
            let count = this.length - 1;
            let current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
            return current;
        }
    }

    this.set = function(index, val){
        let foundNode = this.get(index);
        if(!foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    this.insert = function(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    this.remove = function(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}


function Node(val){
    this.val = val;
    this. next = null;
    this.prev = null;
}

let list = new DoublyLinkedList();
list.insert(0,15);
list.insert(1,10);
list.insert(2,8);
list.insert(3,5);
list.insert(4,1);
list.insert(5,0);
list.remove(2);
list.remove(3);
list.remove(0);
list.insert(0, 100);
list.remove(1);
list.insert(1, 50);
console.log(list);
