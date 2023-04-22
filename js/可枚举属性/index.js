function Person(name,age) {
    this.name = name
    this.age = age
}

Person.prototype.gender = 'unknown'
const john = new Person('John',30)

console.log(Object.keys(john)) // [ 'name', 'age' ] 只返回对象自身的属性，并没有返回gender属性


for(const key in john) {
    console.log(key) // name age gender  
}
/**
 * for in 遍历了所有属性
 * Object.keys() 只返回对象自身的属性，不会返回对象原型链上的属性
 */

// TODO: JSON.stringfy 只能读取对象本身的可枚举属性，并将其序列化为JSON对象，
// 不会读取原型链上的属性，也不会读取对象的方法、访问器属性等非数据属性
 Person.prototype.sayHello = function() {
    console.log('hello,my name is' + this.name)
 }

console.log(JSON.stringify(john)) // {"name":"John","age":30}



