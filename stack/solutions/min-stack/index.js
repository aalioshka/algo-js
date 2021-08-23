// https://leetcode.com/problems/min-stack/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push({
        val: x,
        min: this.data.length ? Math.min(this.getMin(), x) : x
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.data.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.data[this.data.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
