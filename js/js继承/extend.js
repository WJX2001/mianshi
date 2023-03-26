function parent() {
    this.name = 'pjw';
    this.age = 23
}

// 默认原型上有一个constructor属性
parent.prototype.getMoney = function() {
    console.log('获取100元')
}

const child = new parent()
child.getMoney() // 获取100元

// 手动绑定到构造函数的原型上
const simpleChild = {}
simpleChild.__proto__ = parent.prototype
simpleChild.getMoney()  // 获取100元