/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // https://www.youtube.com/watch?v=EgI5nU9etnU
    const preMap = {};
    let visited = {}; // https://leetcode.com/problems/course-schedule/submissions/
                      // need to add one extra var to track already completed cources
    let result = [];

    for(let i = 0; i < numCourses; i++){
        preMap[i] = [];
    }

    for (const [crs, pre] of prerequisites) {
        preMap[crs].push(pre);
    }

    const visiting = new Set();

    function dfs(crs) {
        if (visiting.has(crs)) {
            return false;
        }

        // https://leetcode.com/problems/course-schedule/submissions/
        // need to comment this, as we need to collect all completed cources
        // if (preMap[crs].length === 0) {
        //     return true;
        // }

        visiting.add(crs);
        for (const pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting.delete(crs);

        preMap[crs] = []; // this course can be finished, no need to repeat
        if(!visited[crs]) {
            result.push(crs);
            visited[crs] = 1;
        }
        return true;
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return [];
        }
    }
    return result;
};