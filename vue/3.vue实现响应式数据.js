// Object.defineProperty 实现数据响应式

const obj = {}
Object.defineProperty(obj, 'foo', {
    get() {
        console.log(`get foo:${val}`)
        return val
    },
    set(newVal) {
        if (newVal !== val) {
            console.log(`set foo:${newVal}`)
        }
        val = newVal
    }
})

// obj.foo
// obj.foo = 'new'

// 此时我们访问foo属性或者设置foo值的时候都能触发setter与getter
// 但是当我们为obj添加属性的时候，却无法触发事件属性的拦截
obj.bar = '新属性'

/**
 * 这是因为：一开始obj的foo属性被设置为响应式数据，bar 是后面新增的数据，并没有通过Object.defineProperty设置为响应式
 */


//TODO: 解决方法：通过再次调用defineReactive方法，内部还是通过Object.defineProperty实现属性的拦截
// 这样就实现了新增属性的响应式更新
function definReactive(obj,key,val) {
    Object.defineProperty(obj,key,{
        get() {
            console.log(`get ${key}:${val}`)
        },
        set(newVal) {
            if(newVal !== val) {
                console.log(`set ${key}:${newVal}`)
                val = newVal
            }
        }
    })
}


// Vue3的解决方法 
// TODO: 使用Proxy

let handler = {
    get(target,key) {
        let temp = target[key]
        if(typeof temp ==='object'){
            return new Proxy(temp,handler)
        }
    },
    set(target,key,value){
        // 触发effect更新
        target[key] = value
    }
}



function reactive(target) {
    return new Proxy(target,handler)
}