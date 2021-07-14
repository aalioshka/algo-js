/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // https://leetcode.com/problems/course-schedule/discuss/383060/JavaScript-DFS-solution-with-comments
    // https://www.youtube.com/watch?v=eL-KzMXSXXI
    const seen = new Set();
    const seeing = new Set();
    const res = [];

    const adj = [...Array(numCourses)].map(r => []);
    for (let [course, prereq] of prerequisites) {
        adj[prereq].push(course);
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return [];
        }
    }
    return res.reverse();

    function dfs(v) {
        if (seen.has(v)) {
            return true;
        }
        if (seeing.has(v)) {
            return false;
        }

        seeing.add(v);
        for (let nv of adj[v]) {
            if (!dfs(nv)) {
                return false;
            }
        }
        seeing.delete(v);
        seen.add(v);
        res.push(v);
        return true;
    }

};
