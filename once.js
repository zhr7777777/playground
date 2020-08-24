const test = (a, b) => {
  console.log('exec')
  return a + b 
}

const once = fn => {
  let revoke = false
  let result
  return (...args) =>  {
    if (revoke) return result
    result = fn(...args)
    revoke = true
    return result
  }
}

const oncedTest = once(test)
console.log(oncedTest(1, 2))
console.log(oncedTest(2, 3))

const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const mockRequest = value => {
  console.log('mock requested sent')
  console.log(value)
}
const debouncedMockRequest = debounce(mockRequest, 2000)

const handleInputChange = value => {
  debouncedMockRequest(value)
}

handleInputChange(1)
handleInputChange(2)
handleInputChange(3)
