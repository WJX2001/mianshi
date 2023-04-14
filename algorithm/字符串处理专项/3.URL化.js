var replaceSpaces = function(S, length) {
    let res = ''
    for (let i = 0; i < length; i++) {
        // console.log(S[i]);
        if (S[i] === ' ') res += '%20'
        else res += S[i]
    }
    return res
};

console.log(replaceSpaces("               ", 5))