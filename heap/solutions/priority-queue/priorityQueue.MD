<b>BIG O</b>
```javascript
* insertion - O(log N)
* removal - O(log N)
* search - O(N)
```
<b>Children:</b>
```javascript
For any index of an array n...
let leftChildIdx = 2 * index + 1;
let rightChildIdx = 2 * index + 2;
```
<b>Parent:</b>
```javascript
For any child node at index n...
Its parent is at:
let parentIdx = Math.floor((index - 1)/2);
```
![heap](../../img/heap.svg)
```javascript
/*
Priority Queue is based on the MinBinaryHeap
MinBinaryHeap - parent nodes are always smaller than child nodes.

              1
     19              36
 27      22      45      55
 
Node { val: 'gunshot wound', priority: 1 }
Node { val: 'broken arm', priority: 2 }
Node { val: 'glass in foot', priority: 3 }
Node { val: 'high fever', priority: 4 }
Node { val: 'common cold', priority: 5 }

 
 */
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
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
}
```
[all code](priority-queue.js)
