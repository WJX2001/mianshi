let obj = { name: 'wjx', age: 30 ,n: [1,2,3,4,5]};

let handler = {
    get(target,key){
        // 收集effect
        let temp = target[key]
        if(typeof temp === 'object'){
            return new Proxy(temp,handler )
        }

        return temp
    },
    set(target,key,value){
        // 触发effect更新
        target[key] = value
        console.log(key)
    }
}

function reactive(target){
    return new Proxy(target,handler)
}


const proxy =  reactive(obj)

// 此时会触发get方法
// proxy.name 

// 此时会触发set方法
proxy.name = 100
console.log(proxy.n)