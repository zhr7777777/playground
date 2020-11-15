// 限制一段时间内，函数只执行一次
const throttle = (fn, timeout) => {
  let canRun = true
  return (...args) => {
    if (canRun) {
      fn(...args)
      canRun = false
      setTimeout(() => {
        canRun = true
      }, timeout)
    }
  }
}

const mockRequest = order => {
  console.log(`Request ${order} is sent`)
}

const throttledMockRequest = throttle(mockRequest, 100, true)

throttledMockRequest(1)
throttledMockRequest(2)
throttledMockRequest(3)
throttledMockRequest(4)
setTimeout(() => {
  throttledMockRequest(5)
}, 1000)