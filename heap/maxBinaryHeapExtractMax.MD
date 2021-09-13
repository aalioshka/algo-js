```javascript
// MaxBinaryHeap - parent nodes are always larger than child nodes.
/*
                        100
                19              36
            17      12      25      5

       id:         0    1   2   3   4   5  6
       data:     [100, 19, 36, 17, 12, 25, 5]

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
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
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
[all code](max-binary-heap.js)
