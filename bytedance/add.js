// 实现一个add方法，使计算结果能够满足如下预期：

// var add = function () {
//   var args = []
//   var adder = function () {
//     // args = args.concat(Array.from(arguments))
//     args = args.concat([...arguments])
//     return adder	// return itself to make add call multiple times
//   }
//   adder.toString = function () {
//     return args.reduce((pre, cur) => pre + cur, 0)
//   }
//   return adder.apply(null, [...arguments]) // pass cur arguments
// }

// function add() {
//   let args = []
//   let adder = function () {
//     console.log([...arguments])
//     args = args.concat([...arguments])
//     return adder
//   }
//   adder.valueOf = function () {
//     return args.reduce((pre, cur) => pre + cur, 0)
//   }
//   return adder.apply(null, [...arguments])
// }

// let add = (...initArgs) => {
//   let allArgs = initArgs
//   let adder = (...curArgs) => {
//     allArgs = allArgs.concat(curArgs)
//     return adder
//   }
//   adder.valueOf = () => {
//     return allArgs.reduce((pre, cur) => pre + cur, 0)
//   }
//   return adder
// }

const add = (...args) => {
  const argCollector = args

  const adder = (...moreArgs) => {
    argCollector.push(...moreArgs)
    return adder
  }

  adder.valueOf = () => argCollector.reduce((pre, cur) => pre + cur, 0)

  return adder
}

console.log(+add(1)(2)(3)) // 6
console.log(add(1, 2, 3)(4).valueOf()) // 10
console.log(add(1)(2)(3)(4)(5).valueOf()) // 15