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

    insert(element) {
        this.values.push(element);
        this._bubbleUp();
    }

    _bubbleUp(){
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
}
```
[all code](min-binary-heap.js)
