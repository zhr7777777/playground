// 限制一段时间内，函数只执行一次
// const throttle = (fn, timeout) => {
//   let last = 0
//   return (...args) => {
//     let now = Date.now()
//     if(now - last >= timeout) {
//       fn(...args)
//       last = now
//     }
//   }
// }

// const throttle = (fn, timeout) => {
//   let timer
//   return (...args) => {
//     if(!timer) {
//       timer = setTimeout(() => {
//         fn(...args)
//         timer = null
//       }, timeout)
//     }
//   }
// }

const throttle = (fn, timeout) => {
  let last = Date.now()
  let timer
  return (...args) => {
    let now = Date.now()
    let remain = timeout - (now - last)
    clearTimeout(timer)
    if(remain <= 0) {
      fn(...args)
      last = Date.now()
    } else {
      timer = setTimeout(() => {
        fn(...args)
      }, remain)
    }
  }
}

const mockRequest = order => {
  console.log(`Request ${order} is sent`)
}

const throttledMockRequest = throttle(mockRequest, 100)

throttledMockRequest(1)
throttledMockRequest(2)
throttledMockRequest(3)
throttledMockRequest(4)
setTimeout(() => {
  throttledMockRequest(5)
}, 1000)