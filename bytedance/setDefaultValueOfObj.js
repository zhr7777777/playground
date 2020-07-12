const set = (obj, keyStr, defaultValue) => {
    if(typeof obj !== 'object') return obj
    const keys = keyStr.split('.').slice(1)
    let cur = obj
    for(let i=0; i<keys.length; i++) {
        if(!cur[keys[i]]) {
            cur[keys[i]] = defaultValue
            break
        }
        if(typeof cur[keys[i]] === 'object') {
            cur = cur[keys[i]]
        } else {
            break
        }
    }
    return obj
}

let a = { b: { c: 1 } }

console.log(set(a, 'a.b.d', -1))