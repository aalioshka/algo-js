/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // https://leetcode.com/problems/course-schedule/discuss/383060/JavaScript-DFS-solution-with-comments
    // https://www.youtube.com/watch?v=eL-KzMXSXXI
    // https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/
    const seen = {};
    const seeing = {};
    const adj = {};

    for (let [course, prereq] of prerequisites) {
        if(!adj[prereq]) adj[prereq] = [];
        adj[prereq].push(course);
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }
    return true;

    function dfs(v) {
        if(!adj[v]) return true;
        if (seen[v]) return true;
        if (seeing[v]) return false;

        seeing[v] = true;

        for (let nv of adj[v]) {
            if (!dfs(nv)) {
                return false;
            }
        }

        seeing[v] = false;
        seen[v] = true;
        return true;
    }
}

