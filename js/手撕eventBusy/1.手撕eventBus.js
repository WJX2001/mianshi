class Observer {
    constructor() {
        // 存储所有事件及回调的对应关系
        this.items = {}
    }

    // 监听/订阅
    $on(eventName,cb) {
        // if(!this.items[eventName]){
        //     this.items[eventName] = []
        // }
        // es6写法 上面为详细解释
        this.items[eventName] = this.items[eventName] || []
        this.items[eventName].push(cb)
    }

    // 派发/通知/广播
    $emit(eventName,...args){
        if(this.items[eventName]){
            this.items[eventName].forEach(cb => cb(...args));
        }
    }

    // 删除/解绑
    $off(eventName) {
        if(typeof eventName === 'undefined'){
            this.items = {}
            return 
        }
        if(this.items[eventName]){
            delete this.items[eventName]
        } else {
            throw new Error('没有订阅该事件')
        }
    }
}

// 测试数据
let thing = new Observer();

//累加求和
const add = (...args) => console.log(args.reduce((p, c) => p + c, 0));
//打印参数
const log = (...args) => console.log(...args);
thing.$on('add', add);
thing.$on('log', log);
thing.$emit('add', 1, 2); // 3
thing.$emit('log', 'hi'); // hi
