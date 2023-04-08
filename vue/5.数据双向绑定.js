
// TODO:先来一个构造函数：执行初始化，对data执行响应化操作
class Vue {
    constructor(options) {
        // 将传入的选项对象 options 保存到实例 $options
        this.$options = options
        // 将选项对象中的`data`属性保存到 实例 `$data`中
        this.$data = options.data

        // 对data选项做响应式处理
        observe(this.$data)

        // 代理data到vm上，使用`proxy` 将 `$data`对象中的属性代理到Vue实例上，
        // 这样我们就可以在Vue实例中直接访问和修改`$data`中的属性，而不需要使用 this.$data
        proxy(this)

        // 执行编译 Compile对象的作用是将模版字符串编译为可执行的函数，并将其插入到DOM中，从而实现数据的动态渲染
        new Compile(options.el,this)
    }

}

// TODO: 对data选项执行响应化具体操作
function observe(obj) {
    if(typeof obj !== 'object' || obj === null){
        return
    }
    new Observer(obj)
}

// TODO: 这个类遍历对象中的每个属性，并为每个属性设置getter 和setter
class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }
    walk(obj) {
        // 返回一个包含给定对象所有可枚举属性名称的数组
        Object.keys(obj).forEach((key) => {
            defineReactive(obj,key,obj[key])
        })
    }
}

// 编译函数
class Compile {  
    constructor(el, vm) {  
      this.$vm = vm;  
      this.$el = document.querySelector(el);  // 获取dom  
      if (this.$el) {  
        this.compile(this.$el);  
      }  
    }  
    compile(el) {  
      const childNodes = el.childNodes;   
      Array.from(childNodes).forEach((node) => { // 遍历子元素  
        if (this.isElement(node)) {   // 判断是否为节点  
          console.log("编译元素" + node.nodeName);  
        } else if (this.isInterpolation(node)) {  
          console.log("编译插值⽂本" + node.textContent);  // 判断是否为插值文本 {{}}  
        }  
        if (node.childNodes && node.childNodes.length > 0) {  // 判断是否有子元素  
          this.compile(node);  // 对子元素进行递归遍历  
        }  
      });  
    }  
    isElement(node) {  
      return node.nodeType == 1;  
    }  
    isInterpolation(node) {  
      return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);  
    }  
  } 

// 负责更新视图
class Watcher {
    constructor(vm,key,updater){
        this.vm = vm
        this.key = key
        this.updaterFn = updater

        
    }
}
 
// // 进行proxy的封装 
// function proxy(vm) {
//     Object.keys(vm.$data).forEach(key => {
//         Object
//     })
// }