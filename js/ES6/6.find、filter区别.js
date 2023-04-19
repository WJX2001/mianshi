let arr = [123,13,13,1,31,1,2,4]

// 不会更改原数组
console.log(arr.filter(val => {return val >2 })) //[ 123, 13, 13, 31, 4 ]

console.log(arr.find(val => {return val >2}))   // 123

