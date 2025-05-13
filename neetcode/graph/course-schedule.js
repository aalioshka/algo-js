// neetcode: https://neetcode.io/problems/course-schedule

// Time Complexity: O(V + E)
// V is the number of courses numCourses
// E is the number of prerequisite pairs in prerequisites

// Space Complexity: O(V + E)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const preMap = {};
    for (let i = 0; i < numCourses; i++) {
        preMap[i] = [];
    }
    for (const [crs, pre] of prerequisites) {
        preMap[crs].push(pre);
    }

    const visiting = {};

    function dfs(crs) {
        if (visiting[crs]) {
            // Cycle detected
            return false;
        }
        if (preMap[crs].length === 0) {
            // Empty, can be finished
            return true;
        }

        visiting[crs] = true; // adding to visiting for this recursive cycle
        for (const pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting[crs] = false; // removing from visiting for this recursive cycle
        preMap[crs] = []; // set as empty, as we know, we can finish it
        return true;
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }

    return true;
};

console.log(canFinish(2, [[1,0]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false