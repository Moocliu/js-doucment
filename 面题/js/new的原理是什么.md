# new

## 任何一个函数都可以使用 new 来调用，因此其实并不存在构造函数，而只有对于函数的“函数调用”。

使用 new 会自动执行以下操作：

### 1.创建一个新对象

### 2.将构造函数的作用域赋值给这个新对象，即 this 指向这个新对象

### 3.执行构造函数中的代码

### 4.返回新对象

```js
function sayHi(name) {
  this.name = name;
}
var Hi = new sayHi("Yevtte");
console.log("Hello,", Hi.name);
```





#### 如何实现一个new 

1. 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
2. 把构造函数的作用域指向空对象~~把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象~~
3. 如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象

```js
//  fn 为构造传入的构造函数

function _new(fn, ...arg){
   const obj = Object.create(fn.prototype);
  const ret = fn.apply(obj, arg);
  return ret instanceof  Object ? ret:obj;
}
```

