//  class 的继承 

// 1. es6 规定 子类普通方法的中通过super调用父类的方法时，
//  父类的方法内部默认指向当前的子类的实例 如果实例没有继续指向父类自己的
// 2. super 有两种方式 构造函数 和实例对象

class Ponit {
     constructor(x, y) {
          this.x = x;
          this.y = y;

     }
     toValue() {
          return `${this.x}--${this.y}`
     }

}

class ColorPonit extends Ponit {
     constructor({
          x,
          y,
          color
     }) {
          super(x, y); //  调用父类的constructor(x,y)
          this.x = 3;
          this.color = color;

     };
     toValue() {
          return `${this.color}--${super.toValue()}`
     }
}

var color = new ColorPonit({
     x: 1,
     y: 2,
     color: 'red'
})

// console.log(color.toValue());

// Object.defineProperty()


var o = {
     age: 12
}; // 创建一个对象

var value;
Object.defineProperty(o, 'age', {
     enumerable: true,
     configurable: true,
     get: function (value) {
          console.log(`value:${value}`)
          return value;
     },
     set: function (newvalue) {
          console.log(`newvalue:${newvalue}`)
          value = newvalue;

     }

})
55
o.name = 'liu'
console.log(o);

var a = '1' + false;
var b = '1' - true;
var c = true + '1' + null;
console.log(a)
console.log(b)
console.log(c)
console.log(0 === false)
console.log(1 == '1')
console.log(1 === '1') // 类型得一样 一个是

var tmp = 'data';

if (true) {
     console.log(tmp);
}


function f(tmp) {
     console.log(tmp);
     if (false) {
          var tmp = 'hello';
     }
}
f(tmp)


var a;
b;
console.log(a);
console.log(b)

var tmp = new Date();

function f() {

     console.log(tmp);
     if (false) {
          tmp = 'hello';
     }
}
f();

console.log(a);
var a = 1;


var a = 1;

arr = ['a', 'b', 'c'];

function name() {

     for (item of arr) {
          console.log(this[key] = my[key])
     }

}

name();



function A() {
     console.log('A')

}


function B() {
     console.log('B')
}

var b = new B();
B.prototype.then=()=>{
     console.log('then')
}
console.log(b.__proto__ == B.prototype);
console.log(B.prototype.__proto__ == Object.prototype)