// Merges two already sorted arrays
function merge(left, right){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(right[j] > left[i]){
            results.push(left[i]);
            i++;
        } else { // case if right[j] less or equal
            results.push(right[j]);
            j++;
        }
    }
    // as arrays length can be not equal,
    // but we for sure know that left and right are sorted
    // we simply add what's left at the end
    while(i < left.length) {
        results.push(left[i]);
        i++;
    }
    while(j < right.length) {
        results.push(right[j]);
        j++;
    }
    return results;
}

// Recursive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// tests
console.log(mergeSort([1, 6, 5, 7, 0, 3, 25])); // [0, 1, 3, 5, 6, 7, 25]
