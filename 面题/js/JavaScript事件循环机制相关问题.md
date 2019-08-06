# JavaScript 事件循环机制相关问题

- 事件循环的机制概念: 单线程非阻塞、执行栈、事件队列、宏任务（setTimeout...）、微任务（new

```js
setTimeout(function() {
  console.log(1);
});

new Promise(function(resolve, reject) {
  console.log(2);
  resolve(3);
}).then(function(val) {
  console.log(val);
});
console.log(4);
// 2
// 4
// 3
// 1
```

- 执行顺序先执行同步任务，promise 新建后输出 2 接着输出 4 ，异步任务等同步任务执行后，且在同一事件循环中，微任务永远在宏任务之前执行，。这个时候执行栈空了，执行队列先取出微任务 输出 3 ，最后输出 1

--参考文档 https://juejin.im/post/5af3cc4af265da0ba3521028
