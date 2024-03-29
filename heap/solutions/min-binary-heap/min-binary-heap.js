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
MinBinaryHeap - parent nodes are always smaller than child nodes.

                        1
                19              36
            27      22      45      55

 id:        0   1   2   3   4   5   6
 data:     [1, 19, 36, 27, 22, 45, 55]
*********************************************
*********************************************
*/

class MinBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this._moveUp();
    }

    extractMin(){
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
            if(element >= parent) break;
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

let minHeap = new MinBinaryHeap();
minHeap.insert(100);
minHeap.insert(19);
minHeap.insert(36);
minHeap.insert(17);
minHeap.insert(12);
minHeap.insert(25);
minHeap.insert(5);

let min = true;
while(min){
    min = minHeap.extractMin();
    console.log(min);
}
/*
Output:
5
12
17
19
25
36
100
 */
