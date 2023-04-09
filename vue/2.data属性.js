
function Component() {

}

const componentA = new Component()
const componentB = new Component()
// 对象形式
// Component.prototype.data = {
//     count: 0
// }




// console.log(componentB.data.count)
// componentA.data.count = 1
// console.log(componentB.data.count)

// 函数形式
Component.prototype.data = function() {
    return {
        count:0
    }
}
console.log(componentB.data.count)
componentA.data.count = 1
console.log(componentB.data.count)