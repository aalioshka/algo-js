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