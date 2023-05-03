// const objectRecords = new WeakMap()
// function copy(src) {
//   // 空或者非对象直接返回（考虑typeof null === 'object'是true）
//   if (!src || !(typeof src === 'object')) return src
//   // 判断是对象还是数组
//   let dest = Array.isArray(src) ? [] : {}

//   // 处理循环引用问题
//   if (objectRecords.has(src)) {
//     // 这里不一定存在循环引用，可能是有向无环图的结构!!!
//     // throw new Error('Cyclic reference or DAG detected')
//     return objectRecords.get(src)
//   }
//   objectRecords.set(src, dest)
//   if (src instanceof Array) {
//     for (let i = 0; i < src.length; i++) {
//       if (typeof src[i] === 'object') {
//         dest[i] = copy(src[i])
//       } else {
//         dest[i] = src[i]
//       }
//     }
//   } else {
//     for (e in src) {
//       if (typeof src[e] === 'object') {
//         dest[e] = copy(src[e])
//       } else {
//         dest[e] = src[e]
//       }
//     }
//   }
//   return dest
// }

const deepClone = (obj, map = new WeakMap()) => {
  if(typeof obj !== 'object' || obj === null) {
    return obj
  }

  if(map.has(obj)) {
    return map.get(obj)
  }

  const res = Array.isArray(obj) ? [] : {}

  map.set(obj, res)

  for(let key in obj) {
    res[key] = deepClone(obj[key], map)
  }

  return res
}


//比如修改jack2中的内容，不会影响到jack中的值
let jack = {
  name: "jack.ma",
  age: 40,
  like: {
    dog: {
      color: 'black',
      age: 3,
    },
    cat: {
      color: 'white',
      age: [1, 2]
    }
  },
  ride() {
    console.log('Happy!!!')
  }
}

const jack2 = deepClone(jack)
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //打印出来的应该是 "black"
jack2.ride()


// 循环引用，有向图存在环
const obj = {
  a: 1,
  b: 2
}
obj.c = obj

const obj2 = deepClone(obj)
console.log(obj2)


// DAG，有向无环图
const A = {
  a: 1,
  b: 2
}

const B = {
  a: 3,
  b: 4
}

const C = {
  a: 5,
  b: 6
}

A.c = C
A.d = B
C.c = B

const copyA = deepClone(A)
console.log(copyA)

