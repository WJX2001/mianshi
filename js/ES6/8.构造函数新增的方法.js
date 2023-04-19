
// Array.from  和 Array.of()
// TODO: Array.from()
let arrayLike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
}
let arr2 = Array.from(arrayLike)
console.log(arr2)
