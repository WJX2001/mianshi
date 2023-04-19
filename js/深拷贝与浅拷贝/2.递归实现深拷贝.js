
// 深拷贝实现方式是递归地遍历对象及其属性，并创建一个新的对象或数组，
// 然后将原对象或数组的属性值递归地复制到新的对象或数组中
function deepCopy(obj) {
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    let copy = Array.isArray(obj) ? []: {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key])
        }
    }
    return copy
}