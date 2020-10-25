const mergeDeepList = (list) => {
    let map = {}
    let result = []
    for(let i =0; i<list.length; i++) {
        map[list[i].id] = list[i]
    }
    for(let i=0; i<list.length; i++) {
        if(list[i].pid) {
           if(map[list[i].pid].child) {
               map[list[i].pid].child.push(list[i])
           } else {
               map[list[i].pid].child = [list[i]]
           }
        } else {
            result.push(list[i])
        }
    }
    // 可以不用这次遍历
    // for(let e in map) {
    //     if(!map[e].pid) {
    //         result.push(map[e])
    //     }
    // }
    return result
}

const test = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4, pid: 1 },
    { id: 5, pid: 2 },
    { id: 6, pid: 4 },
    { id: 7, pid: 5 },
    { id: 8, pid: 7 }
]

console.log(mergeDeepList(test))