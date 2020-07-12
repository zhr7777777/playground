// 给2元，3元，5元纸币，凑整n元

// const countChange = n => {
//   let count = 0
//   for (let i = 0; i * 2 <= n; i++) {
//     for (let j = 0; j * 3 <= n; j++) {
//       for (let k = 0; k * 5 <= n; k++) {
//         if (i * 2 + j * 3 + k * 5 === n) count++
//       }
//     }
//   }
//   return count
// }

// console.log(countChange(10))

const countChangeCommon = (list, n) => {
  let c = 0
  const count = (sum, index) => {
    if(index >= list.length) {
      if (sum === n) c++
      return
    }
    for (let i = 0; i * list[index] <= n; i++) {
      count(sum + i * list[index], index + 1)
      // sum = sum + i * list[index]
    }
  }
  count(0, 0)
  return c
}

console.log(countChangeCommon([2, 3, 5], 2))
