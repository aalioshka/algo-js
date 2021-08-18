// https://leetcode.com/problems/course-schedule/discuss/1412042/JavaScript-DFS-Topological-Sort

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // https://www.youtube.com/watch?v=eL-KzMXSXXI
    const seen = {};
    const seeing = {};

    // 1. build graph
    const adj = {};
    for (let [course, prereq] of prerequisites) {
        if(!adj[prereq]) adj[prereq] = [];
        adj[prereq].push(course);
    }

    // 2. Do DFS on each course
    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            // There is a cycle, this course cannot be finished
            return false;
        }
    }
    return true;

    function dfs(v) {
        if(!adj[v]) return true;
        if (seen[v]) return true;
        if (seeing[v]) return false;

        // Add the course to courses we are seeing during the current search
        seeing[v] = true;

        for (let nv of adj[v]) {
            // do search from root till the end through all children
            if (!dfs(nv)) {
                return false;
            }
        }
        // Remove course from courses we are seeing during the current search
        // As we are done with current search
        seeing[v] = false;
        seen[v] = true;
        return true;
    }
}
