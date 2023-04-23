async function add(...arr) {
    // 你的实现
    let sum = 0
    for(let i=0;i<arr.length;i++) {
        const current = arr[i]
        // 如果是一个数组的话，继续递归下去
        if(Array.isArray(current)) {
            sum += await add(...current)
        } else {
            sum +=current
        }
    }
    return sum
}

// 示例代码运行结果
add([1,2]).then(result => {
    console.log(result)  //3
})

add([3,5,2]).then(result => {
    console.log(result)  //10
})

add([[1,2],[3,4],[5,6]]).then(result => {
    console.log(result)  //21
})