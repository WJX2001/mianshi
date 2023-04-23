// 假定一个对象a ,访问对象a['k']的会打印'k===0'，
// 现在期望在访问a上任意一个从[a-z]属性的时候，会按照上述的格式打印到a['k']的差值，
// 实例如下 eg a['j'];a['I']. 'j===-1' 'l===1'

const a = new Proxy({}, {
    get(target, prop) {
      // 如果属性名是小写字母，执行以下操作
      if(/[a-z]/.test(prop)) {
        // 如果 k 属性不存在，默认为 0
        const kValue = target['k'] || 0;
        // 如果该属性不存在，默认为0
        const propValue = target[prop] || 0;
        // 输出属性名和该属性与k值的差
        console.log(`${prop}===${propValue - kValue}`);
      }
      // 返回对象的属性值
      return target[prop];
    },
    set(target, prop, value) {
      // 将属性值写入对象
      target[prop] = value;
      // 返回true表示操作成功
      return true;
    }
  });
  
  // 设置属性值并测试
  a['k'] = 0;
  a['j'] = -1;
  a['I'] = 1;
  
  

