# Bubble Sort

![Bubble_sort](./img/Bubble_sort.jpg)

```
function simpleBubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
```
[more code](index.js)

## Big O

| Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| ------------- | ------------- | ------------- | ------------- |
| O(n)    | O(n^2)    | O(O(n^2)    | O(1)          |

### Resources
* [bigocheatsheet.com](http://bigocheatsheet.com/)
