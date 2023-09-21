/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // https://www.youtube.com/watch?v=EgI5nU9etnU
    const preMap = {};

    for (const [crs, pre] of prerequisites) {
        if (!preMap[crs]) {
            preMap[crs] = [];
        }
        preMap[crs].push(pre);
    }

    const visiting = new Set();

    function dfs(crs) {
        if (visiting.has(crs)) {
            return false;
        }
        if (!preMap[crs] || preMap[crs].length === 0) {
            return true;
        }

        visiting.add(crs);
        for (const pre of preMap[crs]) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visiting.delete(crs);

        preMap[crs] = []; // this cource can be finished, no need to repeat
        return true;
    }

    for (let c = 0; c < numCourses; c++) {
        if (!dfs(c)) {
            return false;
        }
    }
    return true;
}

