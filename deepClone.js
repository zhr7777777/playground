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
  let dest = isArray(src) ? [] : {}

  // 处理循环引用问题
  if (objectRecords.has(src)) {
    // throw new Error('Cyclic reference detected')
    return objectRecords.get(src)
  }
  objectRecords.set(src, dest)
  if (src instanceof Array) {
    for (let i = 0; i < src.length; i++) {
      if (typeof src[i] === 'object') {
        dest[i] = copy(src[i])
      } else {
        dest[i] = src[i]
      }
    }
  } else {
    for (e in src) {
      if (typeof src[e] === 'object') {
        dest[e] = copy(src[e])
      } else {
        dest[e] = src[e]
      }
    }
  }
  return dest
}

//比如修改jack2中的内容，不会影响到jack中的值
const jack2 = copy(jack)
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //打印出来的应该是 "black"
jack2.ride()

// 循环引用
const obj2 = copy(obj)
console.log(obj2)
