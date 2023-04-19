const a = {a:1,b:4}
const b = {b:2,c:3}

// let obj1 = Object.assign(a,b)
// console.log(obj1) //{ a: 1, b: 2, c: 3 }

// 方式二：
// let obj2 = {...a,...b}
// console.log(obj2)

function extend (target,source) {
    for(var obj in source) {
        target[obj] = source[obj]
    }
    return target
}
console.log(extend(a,b))