// publish-subscribe pattern
// function Observer(name) {
// 	this.name = name
// }

// Observer.prototype.observe = function (subject, eventName, cb) {
// 	subject.observe(this, eventName, cb)
// }

// Observer.prototype.notify = function (subject, eventName) {
// 	subject.notify(eventName)
// }

// function Subject() {
// 	this.observerMap = {}
// }

// Subject.prototype.observe = function (observer, eventName, cb) {
// 	console.log(observer.name + ' subscribed ' + eventName)
// 	if(eventName in this.observerMap) {
// 		this.observerMap[eventName].push(cb)
// 	} else {
// 		this.observerMap[eventName] = [cb]
// 	}
// }

// Subject.prototype.notify = function (eventName) {
// 	if(eventName in this.observerMap) {
// 		this.observerMap[eventName].forEach(cb => {
// 			cb()
// 		})
// 	} else {
// 	 	throw new Error('This event is not observered!')
// 	}
// }

// var sub = new Subject()
// var obs1 = new Observer('Haoran')
// var obs2 = new Observer('Xiaoyu')
// obs1.observe(sub, 'Chinese new year', () => {
// 	console.log(obs1.name + ' is happy')
// })

// obs2.observe(sub, 'Chinese new year', () => {
// 	console.log(obs2.name + ' is excited')
// })

// setTimeout(() => {
// 	console.log('Chinese new year is coming!!!')
// 	obs1.notify(sub, 'Chinese new year')
// }, 1000)



// observer pattern
function Observer(name) {
	this.name = name
	this.list = []
}

Observer.prototype.observe = function (target, cb) {
	target.list.push(cb)
}

Observer.prototype.notify = function(msg) {
	this.list.forEach(cb => {
		cb(msg)
	})
}

var obs1 = new Observer('Haoran')
var obs2 = new Observer('Xiaoyu')
var obs3 = new Observer('Jingqiu')

// obs1.observe(obs3, msg => {
// 	console.log(`${obs1.name} got ${msg} from ${obs3.name}`)
// })

// obs2.observe(obs3, msg => {
// 	console.log(`${obs2.name} got ${msg} from ${obs3.name}`)
// })

// obs3.notify(`Chinese new year is coming!!!`)

obs1.observe(obs2, msg => {
	console.log(msg + ' and DOM should rerender')
})

obs1.observe(obs3, msg => {
	console.log(msg + ' and DOM should rerender')
})

obs3.notify(obs3.name + ' changed')



