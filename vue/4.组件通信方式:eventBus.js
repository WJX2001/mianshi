class Observer{
    constructor() {
        this.items = {}
    }

    // 监听，订阅
    $on(eventName,cb){
        this.items[eventName] = this.items[eventName] || []
        this.items[eventName].push(cb)
    }

    // 派发广播 触发指定事件名 eventName 对应的所有回调函数
    $emit(eventName,...args){
        // 做一个判断，如果存在eventName，那么就去触发
        if(this.items[eventName]){
            this.items[eventName].forEach(cb => {
                cb(...args)
            });
        }
    }

    // 取消订阅
    $off(eventName) {
        if(typeof eventName === 'undefined'){
            this.items = []
            return
        }
        if(this.items[eventName]){
            delete this.items[eventName]
        }else {
            throw new Error('没有订阅该事件')
        }
    }
}