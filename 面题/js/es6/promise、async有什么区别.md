#### Async/await 和 Promises 区别



#### async/ await的是什么？优势

generator函数 是一种状态机

async / await 

是generator函数的语法糖 

- 让我们写代码更加流畅，增加代码的可读性 是写异步代码的新方式，以前是用回调函数和promise 

- await会返回一个Promise 对象，或者一个表达式的值。

- 其目的是为了让异步操作更优雅，能像同步一样地书写。



单个promise是很简单的。可是，我们编写复杂的异步逻辑时，可能需要组合使用多个promise来处理。大量的`then`语句和匿名回调函数很容易让代码变得不可维护。

### 为何使用async/await编写出来的代码更好呢？

##### 1.书写代码的简洁性

##### 2.错误处理

Promise 中不能自定义使用 try/catch 进行错误捕获，但是在 Async/await 中可以像处理同步代码处理错误

##### 3.条件语句

条件语句也和错误捕获是一样的，在 Async 中也可以像平时一般使用条件语句

##### 4.中间值

在一些场景中，也许需要 `promise1` 去触发 `promise2` 再去触发 `promise3`，这个时候代码应该是这样的

##### 5错误栈

如过 Promise 连续调用，对于错误的处理是很麻烦的。你无法知道错误出在哪里。





参考文档：https://segmentfault.com/a/1190000011935216

https://loveky.github.io/2017/04/09/translate-6-reasons-why-javascripts-async-await-blows-promises-away/