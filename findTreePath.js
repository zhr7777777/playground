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

const findTreePath = (tree, id) => {
  const path = []
  let found = false
  const DFS = (tree, id) => {
    for (let i = 0; i < tree.length; i++) {
      if (found) return
      path.push(tree[i])
      if (tree[i].id === id) {
        found = true
        break
      }
      if (tree[i].children && tree[i].children.length) {
        DFS(tree[i].children, id)
      }
      if (!found) {
        path.pop()
      }
    }
  }
  DFS(tree, id)
  return path
}

console.log(findTreePath(data, 5))