const once = fn => {
  let revoked = false
  return (...args) => {
    if(revoked) return
    fn(...args)
    revoked = true
  }
}

const test = () => {
  console.log('exec first')
}

const oncedTest = once(test)
oncedTest()
oncedTest()
oncedTest()
