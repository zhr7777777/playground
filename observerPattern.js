function Observer(name) {
	this.name = name
}

Observer.prototype.observe = function (subject, eventName, cb) {
	subject.addObserver(this, eventName, cb)
}

function Subject() {
	this.observerMap = {}
}

Subject.prototype.addObserver = function (observer, eventName, cb) {
	console.log(observer.name + ' subscribed ' + eventName)
	if(eventName in this.observerMap) {
		this.observerMap[eventName].push(cb)
	} else {
		this.observerMap[eventName] = [cb]
	}
}

Subject.prototype.notify = function (eventName) {
	if(eventName in this.observerMap) {
		this.observerMap[eventName].forEach(cb => {
			cb()
		})
	} else {
	 	throw new Error('This event is not observered!')
	}
}

var sub = new Subject()
var obs1 = new Observer('Haoran')
var obs2 = new Observer('Xiaoyu')
obs1.observe(sub, 'Chinese new year', () => {
	console.log(obs1.name + ' is happy')
})

obs2.observe(sub, 'Chinese new year', () => {
	console.log(obs2.name + ' is excited')
})

setTimeout(() => {
	console.log('Chinese new year is coming!!!')
	sub.notify('Chinese new year')
}, 1000)
