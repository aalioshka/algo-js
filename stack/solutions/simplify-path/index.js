/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];

    let skip = new Set(['..', '.', '', ' ']);
    const levelUp = '..';

    const pathArr = path.split('/');

    pathArr.forEach(dir => {
        if(dir === levelUp && stack.length){
            stack.pop();
        } else if (!skip.has(dir)) {
            stack.push(dir);
        }
    });

    let sPath = '';
    for(let i = stack.length - 1; i >= 0; i--){
        sPath = '/' + stack[i] + sPath;
    }
    return sPath || '/' ;
};
