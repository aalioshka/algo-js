```javascript
// MinBinaryHeap - parent nodes are always smaller than child nodes.
/*
                        1
                19              36
            27      22      45      55

       id:         0    1   2   3   4   5  6
       data:     [1, 19, 36, 27, 22, 45, 55]

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
