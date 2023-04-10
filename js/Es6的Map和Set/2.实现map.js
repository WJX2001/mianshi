class Map {
    constructor() {
        this.items = {};
    }

    // 添加属性
    set(key,value) {
        this.items[key] = value
    }
    // 获得属性
    get(key) {
        return this.items[key]
    }
    // 删除属性
    delete(key) {
        if( key in this.items){
            delete this.items[key]
        }
    }

    // 获得键属性
    keys() {
        return Object.keys(this.items)
    }

    // 获得大小
    size() {
        return Object.keys(this.items).length
    }
}