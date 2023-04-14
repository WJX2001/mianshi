function reactive(obj,callback){
    return new Proxy(obj,{
        // 三个参数分别为 被代理的对象，要访问的值，Proxy对象,指的是代理对象本身
        get(target,property,receiver){
            // Reflect.get 获取对象的属性值，会触发get 操作的拦截器方法，从而实现对对象的拦截和定制
            const value = Reflect.get(target,property,receiver);
            // 如果对象的属性值也是对象，需要递归地将其转换为响应式对象
            if(typeof value === 'object'){
                // 这个递归的过程可以通过在 reactive 函数内部再次调用 reactive 函数来实现。
                return reactive(value,callback)
            }else {
                return value
            }
        },
        // 三个参数分别为 要修改属性的对象，要修改的值 要为属性新设置的值，Proxy对象
        set(target,property,value,receiver){
            // 给对象设置属性值
            const result = Reflect.set(target, property, value, receiver);
            callback(target) // 数据发生变化的时候，调用回调函数
            // 返回结果
            return result
        }

    })
}



// 测试案例
// 创建一个响应式对象
const data = reactive({
    message: 'Hello, world!',
    count: 0
  }, (target) => {
    console.log(target); // 数据发生变化时，打印变化后的对象
  });
  
  // 访问 message 属性
  console.log(data.message); // 输出 "Hello, world!"
  
  // 修改 message 属性
  data.message = 'Hello, JavaScript!';
  console.log(data.message); // 输出 "Hello, JavaScript!"
  
  // 访问 count 属性
  console.log(data.count); // 输出 0
  
  // 修改 count 属性
  data.count++;
  console.log(data.count); // 输出 1