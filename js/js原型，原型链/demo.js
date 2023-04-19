// 构造函数
function test() {}

console.log(test.prototype)

function Person (name, age) {
    this.name = name
    this.age = age
}
Person.prototype.sex = '女' // 构造函数原型上的属性
var p1 = new Person('zxx', 18)
console.log(p1.sex) // 女

console.log(Person.prototype)
console.log(p1)