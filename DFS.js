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

// var DFS = function(data, target) {
// 	for(let i=0; i<data.length; i++) {
// 		if(stop) return
// 		path.push(data[i].id)
// 		if(data[i].id === target) {
// 			stop = true
// 			break
// 		}
// 		if(data[i].children && data[i].children.length) {
// 			DFS(data[i].children, target)
// 		}
// 		if(!stop) {
// 			path.pop()
// 		}
// 	}
// 	return
// }
// DFS(data, 2)

// console.log(path)

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