let arr = [123,13,13,1,31,1,2,4]


var brr = arr.some(val => {
    return val > 4
})

var crr = arr.every(val => {
    return val >4
})

console.log(brr,crr)