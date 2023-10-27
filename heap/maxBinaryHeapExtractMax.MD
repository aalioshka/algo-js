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
![heap](img/heap.jpeg)
```javascript
/*
MaxBinaryHeap - parent nodes are always larger than child nodes.

             100
     19              36
 17      12      25      5
 
 */
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop(); // Array.prototype.pop() removes the last element from an array
        // and returns that element
        if(this.values.length > 0){
            this.values[0] = end;
            this._heapify();
        }
        return max;
    }

    _heapify(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swapIdx = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swapIdx = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild > element) ||
                    (swapIdx !== null && rightChild > leftChild)
                ){
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
```
[all code](max-binary-heap.js)
