# Binary search
```typescript
// arr expected to be sorted,
// if not - sort it first
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while(l <= r) {
        let middle = Math.floor((l + r) / 2);
        if(target > arr[middle]){
            l = middle + 1;
        } else if (target < arr[middle]) {
            r = middle - 1;
        } else {
            return middle; // target === arr[middle];
        }
    }

    // there is no target in the array
    return -1;
}
```
[implementation](./index.js)

## Big O

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| -------------         | -------------            | -------------          | -------------    |
| O(1)                  | O(log n)                 | O(log n)               | O(n)             |

### Resources
* [bigocheatsheet.com](http://bigocheatsheet.com/)
