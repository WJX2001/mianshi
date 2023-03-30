/**
 * 
 * 1.创建空对象
 * 2.设置原型链，新对象的__proto__指向构造函数的prototype
 * 3.this指向新对象，执行构造函数的代码
 * 4.判断：如果传入的对象的类型是一个对象，返回新对象；否则直接返回
 */


function mynew(Func,...args){
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象的原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构造函数的this指向指向新对象
    let result = Func.apply(obj,args)  
    // 4.根据返回值判断                   
    return result === 'object' ?result:obj 
    // 此处获取result的结果，如果执行结果有返回值并且是一个对象,返回执行的结果，否则返回新创建的对象
}

function Person(name,age){
    this.name = name
    this.age = age
    //如果此处返回值是一个对象的话，那么这个返回值会被正常使用
    //  return {age:26}  
     
}
Person.prototype.say = function() {
    console.log(this.name)
}

let p = mynew(Person,'wjx',123)
console.log(p)
p.say() 