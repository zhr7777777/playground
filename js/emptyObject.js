// 方法一：
// try catch避免value存在循环引用时抛错，以及value是BigInt
const emptyObject = value => {
  try {
    return JSON.stringify(value) === '{}'
  } catch(err) {
    return false
  }
}

// 方法二：
const emptyObject = value => {
  if (value === null || value === undefined) return false // 排除null和undefined，因为null和undefined不能转化成对象，基础数据类型会被自动装箱（转化成对象）
  return Object.getPrototypeOf(value) === Object.prototype && Object.getOwnPropertyNames(value).length === 0
}

console.log(emptyObject({})) // true
console.log(emptyObject(1)) // false
console.log(emptyObject(BigInt)) // false
console.log(emptyObject([])) // false
console.log(emptyObject(function() {})) // false
