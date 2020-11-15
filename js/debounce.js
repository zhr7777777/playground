// 总是延迟一段时间触发执行

// const debounce = (fn, timeout) => {
//   let timer = void 0
//   return (...args) => {
//     if(timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn(...args)
//     }, timeout)
//   }
// }

const debounce = (fn, timeout, triggerFirst) => {
  let timer = void 0
  let firstRevoked = false
  return (...args) => {
    if(triggerFirst) {
      if(!firstRevoked) {
        fn(...args)
        firstRevoked = true
      } else {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          fn(...args)
        }, timeout)
      }
    } else {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn(...args)
      }, timeout)
    }
  }
}

const mockRequest = order => {
  console.log(`Request ${order} is sent`)
}

const debouncedMockRequest = debounce(mockRequest, 1000, true)

debouncedMockRequest(1)
debouncedMockRequest(2)
debouncedMockRequest(3)