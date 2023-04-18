// var arr1 = ['a','b','c','d']
// let arr2 = arr1

// 浅拷贝
// arr1[0] = '你好吗'
// arr2[1] = '还行'
// console.log(arr1,arr2)

// var obj1 = {a:1,b:2}
// var obj2 = Object.assign(obj1)
// obj1.a = '100'
// obj2.b = 'hahah'
// console.log(obj1,obj2)


var obj3 = {
    a:1,
    b:2
}
// JSON.stringify() 将js对象obj 转换为一个JSON字符串形式
// JSON.parse(jsonString) 将 JSON 字符串 jsonString 转换回 JavaScript 对象。
var obj4 = JSON.parse(JSON.stringify(obj3))
// obj3.a = '100'
// obj4.b = '你怎么样'
// console.log(obj3,obj4)

var obj5 = {
    a:1,
    b:2
}

function copyObj(obj) {
    if(Array.isArray(obj)) {
        var newObj = []
    }else {
        var newObj = {};
    }
    for(var key in obj) {
        if(typeof obj[key] === 'object'){
            newObj[key] = copyObj(obj[key])
        }else {

            newObj[key] = obj[key]
        }
    }
    return newObj
}

console.log(copyObj(obj5))





