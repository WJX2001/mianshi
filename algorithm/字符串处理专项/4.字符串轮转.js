var isFlipedString = function(s1, s2) {
    if(s1.length !== s2.length) return false
    let map = new Map()
    for(let v of s1){
        map.set(v,(map.get(v) || 0) +1)
    }

    for(let v2 of s2) {
        if(!map.has(v2) || map.get(v2) <=0) {
            return false
        }
        if(map.has(v2)){
                map.set(v2,map.get(v2)-1)
            }
    }
    return true
};

console.log(isFlipedString("aa","aba"))