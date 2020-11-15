function mockRequest(i) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(i)
      } else {
        reject(-1)
      }
    }, 1000)
  })
}

class MyPromise {
  constructor(executor) {
    this.state = 'PENDING'
    this.value = null
    this.reason = null
    this.fulfilledHandlers = []
    this.rejectedHandlers = []
    function resolve(value) {
      this.state = 'RESOLVED'
      this.value = value
      this.fulfilledHandlers.forEach(cb => cb(value))
    }

    function reject(reason) {
      this.state = 'REJECTED'
      this.reason = reason
      this.rejectedHandlers.forEach(cb => cb(reason))
    }
    executor(resolve.bind(this), reject.bind(this))
  }

  then(onFulfilled, onRejected) {
    if (onFulfilled && this.state === 'RESOLVED') {
      return onFulfilled(this.value)
    }
    if (onRejected && this.state === 'REJECTED') {
      return onRejected(this.reason)
    }
    if (this.state === 'PENDING') {

      let newPromise = new MyPromise((resolve, reject) => {
        // this.fulfilledHandlers.push(onFulfilled)
        // this.rejectedHandlers.push(onRejected)
        this.fulfilledHandlers.push(value => {
          let nextPromise = onFulfilled(value)
          if (nextPromise) {
            nextPromise.then(resolve, reject)
          }
        })

        if(onRejected) {
          this.rejectedHandlers.push(reason => {
            let nextPromise = onRejected(reason)
            if(nextPromise) {
              nextPromise.then(resolve, reject)
            }
          })
        }

      })
      return newPromise
    }
  }

  catch(onRejected) {
    if (this.state === 'PENDING') {
      this.rejectedHandlers.push(onRejected)
    }
    onRejected(this.reason)
  }
}

MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let res = new Array(promises.length)
    let resolvedNum = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(response => {
        res[i] = response
        resolvedNum++
        if (resolvedNum === promises.length) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

// MyPromise.all([mockRequest(1), mockRequest(2)]).then(res => {
//   console.log('res', res)
// }).catch(err => {
//   console.log('err', err)
// })
console.time()
mockRequest(1).then(value1 => {
  console.log(value1)
  return mockRequest(2)
}, reason => {
  console.log(reason)
}).then(value2 => {
  console.log(value2)
  return mockRequest(3)
}).then(value3 => {
  console.log(value3)
  console.timeEnd()
})