const stringify = obj => {
  let DFS = obj => {
    let content = ''
    if(obj instanceof Function) {
      return ''
    }
    if (obj instanceof Array) {
      obj.forEach(e => {
        let value = e
        if (typeof e === 'object') {
          value = DFS(e)
        }
        content += `,${value}`
      })
      return `[${content.slice(1)}]`
    }
    for (let e in obj) {
      let value = ''
      if(typeof obj[e] === 'object') {
        value = DFS(obj[e])
      } else {
        value = obj[e]
      }
      if (!(typeof obj[e] === 'function')) {
        content += `,"${e}":${value}`
      }
    }
    return `{${content.slice(1)}}`
  }
  return DFS(obj)
}

let obj = {
  a: 0,
  b: [1, 2, [1, 2]],
  c: function () {
    return this.a
  }
}

console.log(JSON.stringify(obj))
console.log(stringify(obj))
console.log(typeof obj.c === 'object')

