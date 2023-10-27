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
MinBinaryHeap - parent nodes are always smaller than child nodes.

              1
     19              36
 27      22      45      55
 
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    extractMin(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this._heapify();
        }
        return min;
    }

    _heapify(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
```
[all code](min-binary-heap.js)
