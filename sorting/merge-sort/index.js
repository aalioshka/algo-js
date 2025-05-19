// 1) At each level of recursion, you split the array into two halves (arr.slice(...))
//  — so the recursion tree has log n levels.
// 2) At each level, you merge all elements once: 
// O(n) total work to merge.
// Time Complexity = O(n log n) in all cases
//
// 1) Arrays: O(n)
// 2) Stackstace: O(log n)
// Space Complexity: O(n)


// Merges two already sorted arrays
function merge(left, right){
    let results = [];
    let l = 0;
    let r = 0;
    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            results.push(left[l]);
            l++;
        } else { // case if right[r] less or equal
            results.push(right[r]);
            r++;
        }
    }
    // as arrays length can be not equal,
    // but we for sure know that left and right are sorted
    // we simply add what's left at the end
    while(l < left.length) {
        results.push(left[l]);
        l++;
    }
    while(r < right.length) {
        results.push(right[r]);
        r++;
    }
    return results;
}

// Recursive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid)); // selected from start to end (end not included)
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// tests
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // [3, 9, 10, 27, 38, 43, 82]
