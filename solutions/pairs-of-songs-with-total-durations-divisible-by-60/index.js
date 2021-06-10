// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60

// based on the https://leetcode.com/problems/two-sum/
/*
var twoSum = function(nums, target) {
    let storage = {};
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let secondNum = target - nums[i];
        if (storage[secondNum] !== undefined) {
            result = [storage[secondNum], i];
        } else {
            storage[nums[i]] = i;
        }
    }
    return result;
};

*/


/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let storage = {};

    // Formula
    // (a + b) % 60 == 0
    // (a % 60) + (b % 60) = 0 or 60:
    // 1) a % 60    + b % 60    === 0   // a % 60 === 0 and b % 60 === 0
    //                                     rem1 === 0 and   rem2 === 0
    // 2) a % 60    + b % 60    === 60  // b % 60 === 60 - a % 60
    //                                     rem2 === 60 - rem1



    for(t of time){
        let rem1 = t % 60;
        let rem2;
        if (rem1 === 0) { // check if a % 60 === 0 and b % 60 === 0
            rem2 = 0;
        } else { // // check if a % 60 + b % 60=== 60
            rem2 = 60 - rem1;
        }

        count += storage[`${rem2}`] || 0;
        storage[`${rem1}`] = (storage[`${rem1}`] || 0) + 1;
    }

    return count;
};
