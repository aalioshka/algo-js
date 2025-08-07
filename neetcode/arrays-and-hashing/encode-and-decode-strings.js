function encode(strs) {
    let res = '';
    strs.forEach(str => {
        res += `${str.length}#${str}`;
    });
    return res;
}

function decode(s) {
    const result = [];
    let i = 0;

    while(i < s.length){
        let j = i;

        // get number before #
        while (s[j] !== "#") {
            j++
        }

        const wordLen = Number(s.slice(i, j));
        const word = s.slice(j + 1, j + 1 + wordLen);
        result.push(word);
        i = j + 1 + wordLen;
    }

    return result;
}

console.log(decode(encode(["Hello", "Worl#d"]))); // output: ["Hello", "Worl#d"]