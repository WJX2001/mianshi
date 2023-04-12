
// 求最大公共前缀
// ['aaafsd','aawwewer','aaddfff'] => 'aa'


function longestCommonPrefix (strs) {
    let m = strs.length
    // 以第一行为基准
    let n = strs[0].length
    for(let col=0;col<n;col++) {
        for(let row =1;row<m;row++) {
            let thisStr = strs[row],preStr = strs[row-1];
            // 判断每个字符串的 col 索引是否都相等
            if(col >=thisStr.length || col>=preStr.length || thisStr.charAt(col) !== preStr.charAt(col)){
                // 发现不匹配的字符，只有strs[row][col-1]是公共前缀
                return strs[row].substring(0,col)
            }
        }
    }
    return strs[0]
}

console.log(longestCommonPrefix(['aaafsd','aawwewer','aaddfff']))
