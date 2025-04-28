// neetcode https://youtu.be/UuiTKBwPgAo
 /**
  * @param {number[]} height
  * @return {number}
  */
 var maxArea = function(height) {
    // Linear time solution O(N)
    // Space is O(1)
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, area);
        
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1