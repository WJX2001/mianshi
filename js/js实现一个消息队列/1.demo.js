class MessageQueue {
    constructor() {
        this.queue = []
    }

    // 将消息添加到队列的末尾
    enqueue(message) {
        this.queue.push(message)
    }
    
    // 从队列的头部移除一个消息并返回该消息
    dequeue() {
        return this.queue.shift()
    }

    // 返回队列中的消息数量
    size() {
        return this.queue.length
    }

    // 检查队列是否为空
    isEmpty() {
        return this.queue.length === 0;
    }
}

// 测试用例
const queue = new MessageQueue()
queue.enqueue('hello')
queue.enqueue('world')

console.log(queue)
console.log(queue.dequeue()) // hello  队列满足先进先出
console.log(queue.dequeue()) // world  后进入的后出
