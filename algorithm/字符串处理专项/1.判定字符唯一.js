
var isUnique = function(astr) {
    // 创建一个新哈希表
    let map = new Map()
    for(let v of astr) {
        if(map.has(v)){
            return false
        } 
        map.set(v,1)
    }
    return true
}