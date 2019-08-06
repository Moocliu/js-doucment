#### js如何继承  ？



```
Es5  构造函数+ 原型

es6 class
```



![](https://img-blog.csdn.net/20170217194104741?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMTc3NDY2MjM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

```js
//父类
function SuperType(name){
    //父类实例属性
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
//父类原型方法
SuperType.prototype.sayName = function(){
    alert(this.name);
};
//子类
function SubType(name, age){
    SuperType.call(this, name);//1.借用构造函数：继承父类的实例属性；
    this.age = age;
}
//2.寄生式继承：将父类原型的副本强制赋值给子类原型，实现继承父类的原型方法。
inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    alert(this.age);
};

function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype); //创建父类原型的副本
    prototype.constructor = subType; //将该副本的constructor属性指向子类
    subType.prototype = prototype; //将子类的原型属性指向副本
}
```

![](https://img-blog.csdn.net/20170217194210929?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMTc3NDY2MjM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### class 的继承？

```js
class Super {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayName(){
    console.log('spuer')
  }
}

class Sub extends Super {
  constructor(name,age){
    super(name,age);
  }
}

var sub = new Sub('liu',23);

 console.log(sub.__proto__ == Sub.prototype) // true
 console.log(sub.name)


sub.constructor === Sub; // ④ true
sub.__proto__ === Sub.prototype; // ⑤ true
Sub.__proto__ === Super; // ⑥ true
Sub.prototype.__proto__ === Super.prototype; // ⑦ true
Sub.prototype.constructor === Sub; // ② true
 
```

es6 继承通过class extend 关键字来实现继承



## 总结

1. ES5中：
   - 利用借用构造函数实现 **实例属性和方法的继承** ；
   - 利用原型链或者寄生式继承实现 **共享的原型属性和方法的继承** 。
2. ES6中：
   - 利用class定义类，extends实现类的继承；
   - 子类constructor里调用super()（父类构造函数）实现 **实例属性和方法的继承**；
   - 子类原型继承父类原型，实现 **原型对象上方法的继承**。





参考文档：https://segmentfault.com/a/1190000015766680



参考文档：https://juejin.im/post/5bd7f8ed5188252a784d2201





