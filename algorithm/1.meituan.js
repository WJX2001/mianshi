// 查找字符子串，子串长度为10，且子串出现的不止一次
// 输入 s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
// 输出['AAAAACCCCC','CCCCCAAAAA']
let s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'

function lengthOfLongestSubstring(s) {
    let windows = new Map()

    // 初始化一个滑动窗口
    let left = 0, right = 10

    while (right < s.length) {
        let subStr = s.slice(left, right) // 获取当前滑动窗口中的子串
        if (windows.has(subStr)) {
            windows.set(subStr, windows.get(subStr) + 1)
        } else {
            windows.set(subStr, 1)
        }
        left++
        right++
    }
    let res = []
    for (let [subStr, count] of windows) {
        if (count > 1) {
            res.push(subStr)
        }
    }
    return res
    
}
console.log(lengthOfLongestSubstring(s)) 
