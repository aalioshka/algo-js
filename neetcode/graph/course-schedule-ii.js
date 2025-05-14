// based on neetcode: https://neetcode.io/problems/course-schedule
// https://github.com/aalioshka/algo-js/blob/master/neetcode/graph/course-schedule.js

// Time Complexity: O(V + E)
// V is the number of courses numCourses
// E is the number of prerequisite pairs in prerequisites

// Space Complexity: O(V + E)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let prereq = {};
    
    for(let i = 0; i < numCourses; i++){
        prereq[i] = [];
    }

    for (const [crs, pre] of prerequisites) {
        prereq[crs].push(pre);
    }
    
    // a cource has 3 possible states:
    // visited -> crs has been added to output
    // visiting -> crs not added to output, but added to cycle
    
    let output = []; // new, diff to https://github.com/aalioshka/algo-js/blob/master/neetcode/graph/course-schedule.js
    
    let visited = {};
    let visiting = {};
    
    for(let cource = 0; cource < numCourses; cource++) {
        if(!dfs(cource)) { // we detected a cyrcle
            return []; // new, diff to https://github.com/aalioshka/algo-js/blob/master/neetcode/graph/course-schedule.js
        }
    }
    
    return output; // new, diff to https://github.com/aalioshka/algo-js/blob/master/neetcode/graph/course-schedule.js

    function dfs(crs) {
        if (visiting[crs]) {
            return false;
        }
        
        if (visited[crs]) {
            return true;
        }
        
        visiting[crs] = true; // add to the cycle
        for(let pre of prereq[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting[crs] = false; // remove from the cycle
        visited[crs] = true; // memoization, mark visited
        output.push(crs); // new, diff from algo-js/graph/solutions/topological-sort/course-schedule.js
        return true;
    }
};

console.log(findOrder(2, [[1,0]])); // [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // [0,2,1,3]