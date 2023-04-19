function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.sayName = function() {
    console.log(this.name)
}

const person1 = new Person('wjx',20)
console.log(person1)

person1.sayName()




