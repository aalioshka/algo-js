# Binary search
```typescript
// arr expected to be sorted,
// if not - sort it first
function binarySearch(arr, elem) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    while(arr[middleIndex] !== elem && startIndex < endIndex) {
        if(elem < arr[middleIndex]){
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startIndex + endIndex) / 2);
    }

    return arr[middleIndex] === elem ? middleIndex : -1;
}
```
[implementation](./index.js)

## Big O

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| -------------         | -------------            | -------------          | -------------    |
| O(1)                  | O(log n)                 | O(log n)               | O(n)             |

### Resources
* [bigocheatsheet.com](http://bigocheatsheet.com/)
