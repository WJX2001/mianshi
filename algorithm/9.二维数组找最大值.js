/**
 * // 输入: [
  [4,5,1,3],
  [13,27,18,26],
  [32,35,37,39],
  [1000,1001,857,1]
]
//输出：
[5,27,39,1001]
 */

function fnArr(arr) {
    var newArr = [];

    // 进行循环
    arr.forEach(item => {
        newArr.push(Math.max(...item))
    });
    return newArr
}
console.log(fnArr([
    [4,5,1,3],
    [13,27,18,26],
    [32,35,37,39],
    [1000,1001,857,1]
  ]))   // [ 5, 27, 39, 1001 ]