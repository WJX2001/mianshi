// console.log('name'+true)
// console.log(typeof(undefined+1))
// console.log(typeof null)
// console.log(typeof undefined)

// console.log(Number(undefined)) //undefined
// console.log(Number(null))   // 0


// console.log( 1 == '1');   // true
// console.log(true == 1)  // true
// console.log(null == undefined)  // true
// console.log([1,2] == '1,2')     // true

// for(var i=0;i<3;i++) {
//     setTimeout(function() {
//         console.log(i)
//     },1000*i)
// }  // 3 3 3
// var a = 10
// function fun() {
//     var a = 20
//     function foo() {
//         var a = 30
//         console.log(a) // 30
//     }
//     foo()
// }
// fun()


// (function() {
//     var a = b = 10;
// })()
// console.log(b)

// function c() {
//     var b = 1
//     function a() {
//         console.log(b)
//         var b = 2
//         console.log(b)
//     }
//     a()
//     console.log(b)
// }
// c()


// var name = "a"
// (function(){ // var name;
//     if(typeof name === 'undefined') {
//         var name = 'b'
//         console.log('111'+name)
//     } else {
//         console.log('222' +name)
//     }
// }) () /// 111b


// function fun() { 
//     a = 10
//     console.log(a)
//     var a = 20
// }
// fun() //10



// console.log([1,2,3] === [1,2,3])


// var obj1 = {
//     a:1
// }


// var obj1 = {
//     a: 'hello'
// }

// var obj2 = obj1;
// obj2.a = 'world'

// console.log(obj1); //{a:world}
// (function(){
//     console.log(a)  // undefined
//     var a = 1
// })()

// var o = {
//     b: 'bbbbbb'
// }

// var obj1 = {
//     a:1,
//     '张三':'你好'
// }

// obj1[o] = '123'

// for( var k in obj1) {
//     console.log(typeof k)
// }


// var a = {
//     // [object Object]:123
// }
// var b = {
//     key:'a'
// }
// var c = {
//     key: 'c'
// }

// a[b] = '123';
// a[c] = '456';

// console.log(a[b]) ;  // 456
// console.log(a) //[object Object]:456
// for(var k in a) {
//     console.log(typeof k) //string
// }


// 1. 每一个函数都自带一个prototype 原型
// 注意：对象拥有__proto__
// 2. new Fun 该Fun构造函数的原型指向于 对象(new Fun)的原型

// function Fun() {
//     this.a = '在Func函数中添加的'
// }
// Fun.prototype.a = '这是Fun原型添加的'

// let obj = new Fun()
// obj.a = '对象本身'
// obj.__proto__.a = '这是对象原型添加的'

// Object.prototype.a = '这是Object添加的'
// console.log(obj.a)

// console.log(Fun.prototype == obj.__proto__)
// console.log(obj.constructor)





// function Foo() {
//     getName = function() {console.log(1)} // 注意是全局的window
//     return this
// }
// Foo.getName = function() {console.log(2)}
// Foo.prototype.getName = function() {console.log(3)}
// var getName = function() {console.log(4)}
// function getName() {console.log(5)}

// Foo.getName() //2
// getName()  //4

// Foo().getName()     //1
// getName()           // 1
// new Foo().getName() // 3


// var o = {
//     a:10,
//     b: {
//         fn: function() {
//             console.log(this.a) // undefined 因为此时this指向b b没有a属性
//             console.log(this)   // { fn: [Function: fn] }
//         }
//     }
// }
// o.b.fn()

