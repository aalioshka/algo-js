'use strict';

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this._moveUp();
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this._moveDown();
        }
        return min;
    }

    _moveUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    _moveDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swapIdx = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swapIdx = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority < element.priority) ||
                    (swapIdx !== null && rightChild.priority < leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }
            if(swapIdx === null) break;
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever",4);
ER.enqueue("broken arm",2);
ER.enqueue("glass in foot",3);

let el = true;
while(el){
    el = ER.dequeue();
    console.log(el);
}
/*
Output:
Node { val: 'gunshot wound', priority: 1 }
Node { val: 'broken arm', priority: 2 }
Node { val: 'glass in foot', priority: 3 }
Node { val: 'high fever', priority: 4 }
Node { val: 'common cold', priority: 5 }
 */
