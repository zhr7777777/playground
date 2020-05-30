let compile = str => {
  // let regMatch = /\${[^}]*}/g
  // let attrs = []
  // let matches = str.match(regMatch)
  // for (let i = 0; i < matches.length; i++) {
  //   let attr = matches[i].match(/\${(.*)}/)
  //   attrs.push(attr[1])
  // }
  let regExec = /\${([^}]*)}/g
  let attrs = []
  while(true) {
    let onceMatch = regExec.exec(str)
    if(!onceMatch) {
      break
    }
    attrs.push(onceMatch[1])
  }
  console.log(attrs)

  return function (obj) {
    for(let i=0; i<attrs.length; i++) {
      let pattern = new RegExp('\\${' + attrs[i] + '}') // 这里注意是两个斜杠
      str = str.replace(pattern, obj[attrs[i]]) // 给str重新复制
    }
    return str
  }
}

let str = '${a}-${b}+3'
let render = compile(str)

console.log(render({
  a: 1,
  b: 2
}))

// 1-2+3



