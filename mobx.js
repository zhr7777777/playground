let obj = {
  a: 0,
  b: 1
}

const collection = {}
let currentObserver = null

const observerable = obj => {
  const objCopy = { ...obj }
  for (let e in obj) {
    collection[e] = []
    Object.defineProperty(obj, e, {
      get() {
        console.log('getter ' + objCopy[e])
        if (currentObserver) {
          collection[e].push(currentObserver)
        }
        return objCopy[e]
      },
      set(value) {
        console.log('setter ' + value)
        objCopy[e] = value
        collection[e].forEach(cb => {
          cb()
        })
      }
    })
  }
}

const autoRun = fn => {
  currentObserver = fn
  fn()
  currentObserver = null
}

observerable(obj)

autoRun(() => {
  console.log('run ' + obj.a)
})

obj.a = 3