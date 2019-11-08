var stop = false
var path = []
var data = [{
	id: 0,
	children: [{
		id: 2,
		children: [{
			id: 4,
			children: [{
				id: 6,
				children: []
			}, {
				id: 7,
				children: []
			}]
		}, {
			id: 5,
			children: []
		}]
	}, {
		id: 3,
		children: []
	}]
}, {
	id: 1,
	children: []
}]

var DFS = function(data, target) {
	for(let i=0; i<data.length; i++) {
		if(stop) return
		path.push(data[i])
		if(data[i].id === target) {
			stop = true
			break
		}
		if(data[i].children && data[i].children.length) {
			DFS(data[i].children, target)
		}
		if(!stop) {
			path.pop()
		}
	}
	return
}
DFS(data)

console.log(path)