// solution is based on algo-js/graph/solutions/topological-sort/course-schedule.js
// neetcode: https://youtu.be/Akt3glAwyfY
// based on https://leetcode.com/problems/course-schedule

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
    // unvisited -> crs not added to output or cycle
    
    let output = []; // new, diff from algo-js/graph/solutions/topological-sort/course-schedule.js
    
    let visited = {};
    let visiting = {};
    
    for(let cource = 0; cource < numCourses; cource++) {
        if(!dfs(cource)) { // we detected a cyrcle
            return []; // new, diff from algo-js/graph/solutions/topological-sort/course-schedule.js
        }
    }
    
    return output; // new, diff from algo-js/graph/solutions/topological-sort/course-schedule.js

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
        visited[crs] = true;
        output.push(crs); // new, diff from algo-js/graph/solutions/topological-sort/course-schedule.js
        return true;
    }
};