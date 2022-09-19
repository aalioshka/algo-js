/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sumArray = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            sumArray.push(nums1[i]);
            i++;
        } else {
            sumArray.push(nums2[j]);
            j++;
        }

    }

    // as arrays length can be not equal,
    // but we for sure know that nums1 and nums2 are sorted
    // we simply add what's left at the end
    while (i < nums1.length) {
        sumArray.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        sumArray.push(nums2[j]);
        j++;
    }
    console.log(sumArray);
    return sumArray.length % 2 === 0 ?
        findMedianForEven(sumArray) : findMedianForOdd(sumArray);
};

function findMedianForEven(sumArray){
    // nums1 = [1, 2]
    // nums2 = [3, 4]
    // sumArray = [1, 2, 3, 4];
    // The median is (2 + 3)/2 = 2.5
    const firstArrayPartLastId =  Math.floor((sumArray.length -1) / 2);
    const secondArrayPartFirstId = firstArrayPartLastId + 1;
    return (sumArray[firstArrayPartLastId] + sumArray[secondArrayPartFirstId]) / 2;
}

function findMedianForOdd(sumArray){
    // nums1 = [1, 3]
    // nums2 = [2]
    // sumArray = [1, 2, 3];
    // The median is 2.0
    return sumArray[Math.floor(sumArray.length / 2)];
}