// neetcode: https://neetcode.io/solutions/course-schedule-iv

/*
Time Complexity:
* DFS per course: O(N²) in worst case
* Prerequisites list: O(P)
* Queries: O(Q)
Total: O(N² + P + Q)

Space Complexity:
* prereq + allPrereq: up to O(N²) in worst case
* Result array: O(Q)
Total: O(N² + Q)
*/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const allPrereq = {}; // includes all, direct/inderect
    const prereq = {}; // incudes direct only

    for (let i = 0; i < numCourses; i++){
        prereq[i] = [];
    }

    for (const [pre, crs] of prerequisites) {
        prereq[crs].push(pre);
    }


    const dfs = (crs) => {
        if (allPrereq[crs]) {
            return allPrereq[crs];
        }
        const _prereq = new Set();
        for (const pre of prereq[crs]) {
            for (const p of dfs(pre)) {
                _prereq.add(p);
            }
        }
        _prereq.add(crs);
        allPrereq[crs] = _prereq;
        return _prereq;
    };

    for (let crs = 0; crs < numCourses; crs++) {
        dfs(crs);
    }

    return queries.map(([u, v]) => allPrereq[v].has(u));
};

const numCourses = 3;
const prerequisites = [[1,2],[1,0],[2,0]];
const queries = [[1,0],[1,2]];
console.log(checkIfPrerequisite(numCourses, prerequisites, queries)); // [true,true]