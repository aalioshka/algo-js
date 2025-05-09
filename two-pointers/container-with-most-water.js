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