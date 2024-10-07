// neetcode: https://youtu.be/EgI5nU9etnU

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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

    let visited = {};
    let visiting = {};
    
    for(let cource = 0; cource < numCourses; cource++) {
        if(!dfs(cource)) { // we detected a cyrcle
            return false;
        }
    }

    return true;

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
        return true;
    }
};