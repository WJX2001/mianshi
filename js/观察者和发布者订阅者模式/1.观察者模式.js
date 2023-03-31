// Subject(小宝宝)
class Subject{
    constructor(name){
        // 小宝宝状态
        this.name = name
        this.state = '开心'
        this.observers = [] // 存放观察者
    }
    // 需要将观察者放在自己身上
    attach(ther) {
        this.observers.push(ther)
    }
    // 更新观察者的状态
    setState(state){
        this.state = state
        // 循环取出每个观察者
        this.observers.forEach(ther => {
            ther.update(this)
        })

    }
}

// 观察者
class Oberser {
    constructor(name) {
        this.name = name
    }
    // 观察小宝宝的状态
    update(subject) {
        console.log(this.name +':'+subject.name+'当前状态是：'+subject.state)
    }
}

let baby = new Subject('小宝宝')

let father = new Oberser('爸爸')
let mother = new Oberser('妈妈')


baby.attach(father)
baby.attach(mother)

baby.setState('不开心')
baby.setState('非常开心')
