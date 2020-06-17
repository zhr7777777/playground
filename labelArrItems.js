// ["abc","aaa","abc",111,"111",111]=>["1abc","aaa","2abc",1111,"111",2111]

const labelArrItems = arr => {
    const map = new Map()
    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i])) {
            const labels = map.get(arr[i])
            labels.push(labels.length)
            map.set(arr[i], labels)
        } else {
            map.set(arr[i], [1])
        }
    }
    for(let i=0; i<arr.length; i++) {
        if(map.get(arr[i]).length === 1) continue
        let labels = map.get(arr[i])
        arr[i] = String(labels[0]) + arr[i]
        if(typeof arr[i] === 'number') {
            arr[i] = Number(arr[i])
        }
        labels.shift()
        map.set(arr[i], labels)
    }
    return arr
}

console.log(labelArrItems(["abc","aaa","abc",111,"111",111]))