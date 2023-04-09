const user = {
    name: 'wjx',
    age: 30,
    isAdmin: false
}

// 将 user 对象作为 userProxy 对象的原始对象，然后使用 Proxy 对象的 get 和 set 方法拦截
// 对 user 对象属性的访问和修改，以实现对 isAdmin 属性的访问进行拦截并返回 false，
const userProxy = new Proxy(user,{
    get(target,property){
        if(property === 'isAdmin') {
            return false   // 返回 false 表示用户没有权限访问isAdmin 属性
        } else {
            return target[property] // 返回属性的值
        }
    },
    set(target,property,value) {
        if(property === 'isAdmin') {
            throw new Error('Access denied') // 抛出异常表示用户没有权限修改 isAdmin属性
        } else {
            target[property] = value // 修改属性的值
            return true
        }
    }
})

console.log(userProxy.name); // 输出 "John"
console.log(userProxy.age); // 输出 30
console.log(userProxy.isAdmin); // 输出 false，因为用户没有权限访问 isAdmin 属性

userProxy.age = 31; // 修改 age 属性的值
console.log(user.age); // 输出 31

userProxy.isAdmin = true; // 抛出异常，因为用户没有权限修改 isAdmin 属性