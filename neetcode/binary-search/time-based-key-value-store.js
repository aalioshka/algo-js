/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map[key]) {
        this.map[key] = [];
    }
    this.map[key].push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const values = this.map[key] || [];
    let left = 0;
    let right = values.length - 1;
    let result = '';

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (values[mid][0] <= timestamp) {
            result = values[mid][1];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */