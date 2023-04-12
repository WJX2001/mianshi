let obj = {
    a: 'a',
    b: [1, { c: true }, [3]],
    d: { e: undefined, f: 3 },
    g: null,
  }
  
  function test(obj) {
    const res = {} // 用于存放扁平化后的结果
   
    function _test(obj, prev = null) {
      // 如果当前值是一个数组，则对数组中的每个元素进行遍历
      if (Array.isArray(obj)) {
        for (const index in obj) {
          const val = obj[index]
          if (val instanceof Object) { // 如果元素是一个对象，则递归调用 _test 函数处理该对象
            _test(val, `${prev ? prev : +''}[${index}]`) // 将当前属性名传递到下一级 _test 函数中
          } else { // 如果元素不是一个对象，则将其添加到结果对象 res 中
            res[`${prev ? prev : +''}[${index}]`] = val
          }
        }
        return
      }
   
      // 如果当前值是一个对象，则对对象中的每个属性进行遍历
      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          // 如果属性的值是一个对象，则递归调用 _test 函数处理该对象
          if (obj[key] !== null) { // 对于 null 类型的值，不再递归调用 _test 函数
            _test(obj[key], `${prev ? prev + '.' : ''}${key} `) // 将当前属性名传递到下一级 _test 函数中
          }
        } else {
          // 如果属性的值是基本类型，则将其添加到结果对象 res 中
          if (obj[key] !== undefined) { // 对于 undefined 类型的值，不添加到结果对象 res 中
            res[`${prev ? prev + '.' : ''}${key} `] = obj[key]
          }
        }
      }
    }
   
    _test(obj) // 从根级别开始递归调用 _test 函数
   
    return res // 返回扁平化后的结果
  }
  
  console.log(test(obj)) // 输出扁平化后的结果
  