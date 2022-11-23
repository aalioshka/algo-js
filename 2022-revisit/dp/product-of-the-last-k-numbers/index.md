# Brute force solution

```javascript
 var ProductOfNumbers = function() {
  this.products = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  this.products.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  let sum = 1;

  let i = this.products.length - 1;

  while(k > 0) {
    sum *= this.products[i];
    i--;
    k--;
  }

  return sum;
};
```

# DP

* The idea is to precalculate the products
* if 0 is in calculation - it always returns 0 `(...  * 0 * ...)`

### Now see how it works visually
* add 3:
  * progress: [3]
  * dp:       [3]
* add 0:
  * progress: [3, 0]
  * dp:       []
* add 2:
  * progress: [3, 0, 2]
  * dp:       [2]
* add 5:
  * progress: [3, 0, 2, 5]
  * dp:       [2, 10]
* add 4:
  * progress: [3, 0, 2, 5, 4]
  * dp:       [2, 10, 40]

### getProduct(1) // should return 4
* (2 * 5) * 4 = 40
* 40 / 10 = 4

### getProduct(2) // should return 20 (5*4)
* 2 * (5 * 4) = 40
* 40 / 2 = 20

### this.products[N - 1] / this.products[N - k - 1]

```javascript
var ProductOfNumbers = function() {
  this.products = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  if (num === 0) {
    this.products = [];
  } else {
    const N = this.products.length;
    this.products.push(N == 0 ? num : num * this.products[N - 1]);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  const N = this.products.length;
  if (N - k < 0) return 0;
  if (N === k) return this.products[N - 1];
  return this.products[N - 1] / this.products[N - k - 1];
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
```