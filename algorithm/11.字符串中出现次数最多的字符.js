let str = 'aaabbbcccaaabbbaaabbbbbbbbbb'

function sum(str) {
    let map = new Map()
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1)
        } else {
            map.set(str[i], 1)
        }
    }
    let maxChar = '' // 出现最多的字符
    let maxCount = 0 // 最多出现的次数
    // 遍历map ，找出出现次数最多的字符
    for (let [char, count] of map) {
        if (count > maxCount) {
            maxCount = count
            maxChar = char
        }
    }
    let obj = {}
    obj[maxChar] = maxCount
    console.log(obj)
    return obj

}
sum(str)
