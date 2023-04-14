var longestPalindrome = function(s) {

    let res = ''
    for(let i=0;i<s.length;i++) {
        // 以s[i]为中心
        let res1 = isHuiwen(s,i,i)
        let res2 = isHuiwen(s,i,i+1)

        res = res.length>res1.length ? res: res1
        res = res.length>res2.length ? res: res2
    }
    return res
};

function isHuiwen(s,l,r) {
    // 防止索引越界
    while(l>= 0 && r<s.length && s.charAt(l) === s.charAt(r)) {
        l--
        r++
    }
    return s.substring(l+1,r)
}


console.log(longestPalindrome("cbbd"))
