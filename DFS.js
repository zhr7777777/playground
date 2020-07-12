var stop = false
var path = []
var data = [{
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

const DFS = data => {
	for(let i=0; i<data.length; i++) {
		console.log(data[i].id)
		if(data[i].children) {
			DFS(data[i].children)
		}
	}
}

const BFS = data => {
	let queue = data
	while(queue.length) {
		const top = queue.shift()
		if(top.children) {
			queue = queue.concat(top.children)
		}
		console.log(top.id)
	}
}

DFS(data)
BFS(data)