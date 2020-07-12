// 乱序输出数组

var arr = [1, 2, 3, 4, 5]

var generateRandomArr = function (arr) {
  var randomArr = []
  var arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    let randomIndex = parseInt(Math.random() * arr.length)
    randomArr.push(arr[randomIndex])
    // arr.splice(randomIndex, 1) 性能不好
    arr[randomIndex] = arr[arr.length - 1]
    arr.length--
  }
  return randomArr
}

console.log(generateRandomArr(arr))