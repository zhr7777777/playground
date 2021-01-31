// 方法一：
// try catch避免value存在循环引用时抛错，以及value是BigInt
// 如果对象属性值是不可序列化对象时，会被丢弃，所以此方法并不准确
// const emptyObject = value => {
//   try {
//     return JSON.stringify(value) === '{}' // 如果value是个很大的对象，可能有性能问题
//   } catch(err) {
//     return false
//   }
// }

// 方法二：
// const emptyObject = value => {
//   if (value === null || value === undefined) return false // 排除null和undefined，因为null和undefined不能转化成对象，基础数据类型会被自动装箱（转化成对象）
//   return Object.getPrototypeOf(value) === Object.prototype && Object.getOwnPropertyNames(value).length === 0
// }

const emptyObject = value => {
  if (value === null || value === undefined) return false // 排除null和undefined，因为null和undefined不能转化成对象，基础数据类型会被自动装箱（转化成对象）
  return Object.getPrototypeOf(value) === Object.prototype && Reflect.ownKeys(value).length === 0
}

console.log(emptyObject({})) // true
console.log(emptyObject(1)) // false
console.log(emptyObject(BigInt)) // false
console.log(emptyObject([])) // false
console.log(emptyObject(function() {})) // false

let obj1 = {}
let a = Symbol()
obj1[a] = 1

let obj2 = {
  a: function () {}
}
console.log(emptyObject(obj1)) // false

Object.keys() // 自身可枚举属性
Object.getOwnPropertyNames() // 自身可枚举属性 + 自身不可枚举属性
Object.getOwnPropertySymbols() // 自身可枚举Symbol属性 + 自身不可枚举Symbol属性
Reflect.ownKeys() // 自身可枚举属性 + 自身不可枚举属性 + 自身Symbol属性

