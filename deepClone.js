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

var obj = {
  a: 1,
  b: 2
}

obj.c = obj

const objectRecords = new Map()
function copy(src) {
  // 空或者非对象直接返回（考虑typeof null === 'object'是true）
  if (!src || !(typeof src === 'object')) return src
  // 判断是对象还是数组
  let dest = src instanceof Array ? [] : {}
  //实现拷贝代码，将src的值完整地拷贝给dest
  //在这里实现
  if (src instanceof Array) {
    for (let i = 0; i < src.length; i++) {
      if (typeof src[i] === 'object' && !(src[i] instanceof Function)) {
        if (objectRecords.has(src[i])) {
          throw new Error('Cyclic reference detected')
        }
        objectRecords.set(src[i], 1)
        dest[i] = copy(src[i])
      } else {
        dest[i] = src[i]
      }
    }
  } else {
    // 注意这里！！！
    objectRecords.set(src, 1)
    for (e in src) {
      if (typeof src[e] === 'object' && !(src[e] instanceof Function)) {
        // 处理循环引用问题
        if (objectRecords.has(src[e])) {
          throw new Error('Cyclic reference detected')
        }
        objectRecords.set(src[e], 1)
        dest[e] = copy(src[e])
      } else {
        dest[e] = src[e]
      }
    }
  }
  return dest
}
let jack2 = copy(jack)

//比如修改jack2中的内容，不会影响到jack中的值
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //打印出来的应该是 "black"

// 深拷贝一个对象，首先判断参数是不是对象。如果是对象，分为普通对象，Array和Function分别考虑。
// 检测循环引用可以用一个数组或者Map，记录遍历过的对象。如果当前需要遍历的对象已经遍历过，说明存在循环引用。