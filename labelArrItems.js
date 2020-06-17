// ["abc","aaa","abc",111,"111",111]=>["1abc","aaa","2abc",1111,"111",2111]

const labelArrItems = arr => {
    const map = new Map()
    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i])) {
            const labels = map.get(arr[i])
            labels.push(labels.length+1)
            map.set(arr[i], labels)
        } else {
            const initLabels = [1]
            initLabels.idx = 0
            map.set(arr[i], initLabels)
        }
    }
    for(let i=0; i<arr.length; i++) {
        let labels = map.get(arr[i])
        if(labels.length === 1) continue
        let labeledItem = String(labels[labels.idx]) + arr[i]
        if(typeof arr[i] === 'number') {
            labeledItem = Number(labeledItem)
        }
        arr[i] = labeledItem
        labels.idx++
        map.set(arr[i], labels)
    }
    return arr
}

console.log(labelArrItems(["abc","aaa","abc",111,"111",111]))