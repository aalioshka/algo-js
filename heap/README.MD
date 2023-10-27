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
![heap](img/heap.svg)

* [max binary heap insert](maxBinaryHeapInsert.MD)
* [max binary heap extract max](maxBinaryHeapExtractMax.MD)
