https://www.cnblogs.com/hity-tt/p/6729118.html



#### Vue.nextTick()的原理和用途？

##### 疑问

1. DOM 更新循环是指什么？

   ```
   DOM更新；在vue中，你修改的data的某一个值，并不会立即反应到该ele 中。Vue将你对data的更新放到watcher中的一个队列中(异步)，只有当前的任务空闲是才会执行watcher队列任务，这就有了一个延迟时间了，
   ```

   

2. 下次更新循环是什么时候？

3. 修改数据之后使用，是加快了数据更新进度吗？

4. 在什么情况下要用到？



#### [异步更新队列]([https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97](https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列))

```js
可能你还没有注意到，Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

例如，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。
```

​    

##### 异步执行的运行机制：

```js
（1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
（3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
（4）主线程不断重复上面的第三步。

```



#### Vue 的时间循环说明

```
简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新
```

```js
//改变数据
vm.message = 'changed'

//想要立即使用更新后的DOM。这样不行，因为设置message后DOM还没有更新
console.log(vm.$el.textContent) // 并不会得到'changed'

//这样可以，nextTick里面的代码会在DOM更新后执行
Vue.nextTick(function(){
    console.log(vm.$el.textContent) //可以得到'changed'
})
```

图解：

![](https://segmentfault.com/img/bV17xC?w=423&h=512)







####  



# 参考文章

[vue nextTick深入理解－vue性能优化、DOM更新时机、事件循环机制；](https://www.cnblogs.com/hity-tt/p/6729118.html)
[JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
[知乎：vue.js$nextTick的一个问题](https://www.zhihu.com/question/50879936)
[JS 事件循环机制 - 任务队列、web API、JS主线程的相互协同](http://www.cnblogs.com/hity-tt/p/6733062.html)

https://segmentfault.com/a/1190000012861862