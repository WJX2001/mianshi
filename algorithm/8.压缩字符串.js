// 实现随机输入一串由26个英文字母区分大小写组成的字符串，
// 若字符串有连续出现字符时，则对其进行压缩，压缩格式为字符出现的次数+字符，并输入压缩后的字符串

// abcbcce -> abcb2ce
// aaaaa  -> 5a
// aAAbBBbce -> a2Ab2Bbce



function compressString(str) {
    let res = ""
    let count = 1
    let curStr = str[0]

    // 进行遍历循环
    for(let i=1;i<str.length;i++) {
        if(str[i] === curStr) {
            count++
        } else {
            res += (count >1 ? count: '') + curStr
            curStr = str[i]
            count = 1
        }
    }
    res += (count >1 ? count : '') + curStr
    return res
}
  
  let str = 'aAAbBBbce';
  let compressedStr = compressString(str);
  console.log(compressedStr);
  
  
  