const mockRequest = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const random = Math.random()
      console.log(random)
      random > 0.8 ? reslove(1) : reject(-1)
    }, 1000);
  })
}

const requestUtilSuccess = () => {
  const makeRequest = () => {
    console.log('requesting....')
    mockRequest().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
      makeRequest()
    })
  }
  makeRequest()
}

requestUtilSuccess()