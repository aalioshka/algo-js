/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // https://www.youtube.com/watch?v=eL-KzMXSXXI
    const seen = {};
    const seeing = {};
    const res = [];

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
            return [];
        }
    }
    return res.reverse();

    function dfs(v) {
        if (seen[v]) return true;
        if (seeing[v]) return false;

        // Add the course to courses we are seeing during the current search
        seeing[v] = true;
        for (let nv of adj[v] || []) {
            // do search from root till the end through all children
            if (!dfs(nv)) {
                return false;
            }
        }

        // Remove course from courses we are seeing during the current search
        // As we are done with current search
        seeing[v] = false;
        seen[v] = true;
        res.push(v);
        return true;
    }

};