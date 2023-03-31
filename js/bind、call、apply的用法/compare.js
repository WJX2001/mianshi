/**
 * apply 
 */
function fn(...args){
   console.log(args)
   console.log(this)
   
}
let obj = {
    myname:"张三"
}

fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
console.log('如果不改变this指向 ----------')
fn(1,2) // this指向window