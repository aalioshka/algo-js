/*
********************************************
********************************************
https://en.wikipedia.org/wiki/Heap_(data_structure)
********************************************
********************************************
BIG O:

insertion - O(log N)
removal - O(log N)
search - O(N)
*********************************************
*********************************************
Children:

For any index of an array n...
let leftChildIdx = 2 * index + 1;
let rightChildIdx = 2 * index + 2;
*********************************************
*********************************************
Parent:

For any child node at index n...
Its parent is at:
let parentIdx = Math.floor((index - 1)/2);
*********************************************
*********************************************
MaxBinaryHeap - parent nodes are always larger than child nodes.

                        100
                19              36
            17      12      25      5

 id:         0    1   2   3   4   5  6
 data:     [100, 19, 36, 17, 12, 25, 5]
*********************************************
*********************************************
*/

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this._bubbleUp();
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

    _bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
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

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(100);
maxHeap.insert(19);
maxHeap.insert(36);
maxHeap.insert(17);
maxHeap.insert(12);
maxHeap.insert(25);
maxHeap.insert(5);

let max = true;
while(max){
    max = maxHeap.extractMax();
    console.log(max);
}
/*
Output:
100
36
25
19
17
12
5
 */