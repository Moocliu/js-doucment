https://juejin.im/post/5c96d0c751882511c832ff7b#comment

##什么是 this

首先要记住 this 不是指向自身，this 而是一个指针，指向调用函数的对象

怎么能够记住 this 的指向 有这么几类：
xxx.fn();

### 默认绑定

回调函数默认 this 指向全局对象 window 是默认绑定

### 隐式绑定

函数的调用是在某个对象上触发，调用用位置上存在上下文对象，典型的形式为 xxx.fn() 要考虑隐性丢失 ：回调函数 、函数引用

### 显示绑定 也叫硬绑定 （call 、apply、bind ）

call apply bind 的第一个参数，都是对应函数的 this 所指向的对象。 call 和 apply 的作用是一样的 ，只是传参数不一样 call 传的是参数列表 ，apply 传的是一个包含多个参数的数组

### new 绑定

### 绑定优先级

绑定方式的优先级： new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定

### 箭头函数


### 绑定例外

如果我们将 null 或者是 undefined 作为 this 绑定对象传入 call 、apply 或者是 bind ,这些值在调用时会被忽略。实际应用的是 默认绑定 规则

```js
var foo = {
  name: "Selina"
};
var name = "Chirs";
function bar() {
  console.log(this.name);
}
bar.call(null); //Chirs
```
