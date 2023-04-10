let set = new Set([1, 4, 9]);
/** TODO: 通过 forEach 遍历 */
set.forEach((value,key) => {
    console.log(key + ':' +value)
})
// 1 : 1
// 4 : 4
// 9 : 9


/** TODO: 扩展运算符和Set结构可用于数组去重*/
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]
console.log(unique) // [ 3, 5, 2 ]

// 字符串去重
let str = '352255'
let uniqueStr = [...new Set(str)].join('')   
console.log(uniqueStr) //352


/**TODO:实现 并集、交集、和差集 */
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a,...b])
console.log(union)

// 交集
let interset = new Set([...a].filter(x => b.has(x)))

// a相对于b的差集
let difference = new Set([...a].filter(x => !b.has(x)))

