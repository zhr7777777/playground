// process.nextTick队列由node管理，微任务队列由v8管理，process.nextTick总在执行任务队列之前执行

// setImmediate在当前"任务队列"的尾部添加事件

setImmediate(function A() {
  console.log(1);
  setImmediate(function B() { console.log(2); });
});
setTimeout(function C() {
  console.log(3);
}, 0);

// setImmediate的回调和setTimeout(() => (), 0)，执行顺序不确定
// 执行栈没有代码，直接执行任务队列，A和C执行顺序不确定，完成一次事件循环，B在下一次事件循环执行

process.nextTick(function foo() {
  process.nextTick(foo);
});

// 嵌套的process.nextTick语句总是在当前"执行栈"一次执行完，嵌套的setImmediate需要多次loop才能执行完
// 所以不能递归调用process.nexTick，否则任务队列中代码不会被执行，setImmediate可以递归调用