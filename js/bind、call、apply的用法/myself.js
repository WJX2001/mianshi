/**
 * 手撕bind
 */

function Fn(a,b,c){
    console.log(this.clothes,a,b,c)
}

const o = {
    clothes:'shirt'
}


Function.prototype.myBind = function(o){
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    
    let that = this
    // 切去函数参数的第一个参数，就是将第一个参数后面的参数取到
    let args1 = Array.prototype.slice.call(arguments,1)
    let args2 = null

    return function(){
        // 当前作用域下,this指向window，但是通过声明that后，this指向变为that
        args2 = Array.prototype.slice.call(arguments)
        that.apply(o,[...args1,...args2])

    }
}

Fn.myBind(o,1,3)(2)