const treeData = [{
	id: 0,
	children: [{
		id: 2,
		children: [{
			id: 4,
			children: [{ id: 6 }, { id: 7 }]
		}, {
			id: 5
		}]
	}, {
		id: 3
	}]
}, {
	id: 1
}]

//        		0			1
//        2    	3
//  	4     5
//    6 7

const DFS = tree => {
	for(let i=0; i<tree.length; i++) {
		console.log(tree[i].id)
		if(tree[i].children) {
			DFS(tree[i].children)
		}
	}
}
console.log('DFS:')
DFS(treeData)

const BFS = tree => {
	let queue = [...tree]
	while(queue.length) {
		const top = queue.shift()
		if(top.children) {
			queue = queue.concat(top.children)
		}
		console.log(top.id)
	}
}
console.log('BFS:')
BFS(treeData)