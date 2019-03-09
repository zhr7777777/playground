/*
mock browser download( has concurrent limitation)
饿了么笔试题：
如何最快下载1000张图片，并发量为n
*/

const maxCon = 2
var curCon = 0
var waitingQ = []

var mockRequest = function () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().toLocaleString())
		}, 1000)
	})
}

var createTask = function () {		// use thunk to delay task execution( A thunk is a function that wraps an expression to delay its evaluation. )
	return function () {
		curCon++
		mockRequest().then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		}).finally(() => {
			curCon--
			if(waitingQ.length) {
				let task = waitingQ.shift()
				task()
			}
		})
	}
}

var makeReq = function () {
	var reqFunc = createTask()
	if(curCon < maxCon) {
		reqFunc()
	} else {
		waitingQ.push(reqFunc)
	}
}

for(let i=0; i<5; i++) {
	makeReq()
}