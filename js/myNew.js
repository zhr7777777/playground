function Person(name, sex) {
  this.name = name
  this.sex = sex
}

let p = myNew(Person, 'haoran', 'man')
// let p = new Person('haoran', 'man')

// function myNew(conFn, ...args) {
//   let o = Object.create(conFn.prototype)
//   conFn.apply(o, args)
//   return o
// }

function myNew(conFn, ...args) {
  let o = Object.create(conFn.prototype) // 创建新对象
  let con = conFn.bind(o, ...args) // 构造函数作用域指向新对象
  con() // 执行构造函数
  return o  // 返回对象
}

console.log(p)