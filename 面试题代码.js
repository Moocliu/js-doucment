// 0.使用object.assgins()修改对象默认值
const shapeConfig = {
     type: 'name',
     firstName: 'liu',
}

function createShare(config) {

     config = Object.assign({
               type: 'name',
               firstName: 'liu',
               lastName: 'bing'
          },
          config
     );
     return config;

}
// console.log(createShare(shapeConfig));


// 类的实现

//1.原型 配合构造函数
function Pint({
     x,
     y
}) {
     this.x = x;
     this.y = y

}
Pint.prototype.toString = function () {
     return `${this.x}-${this.y}`

}
var p = new Pint({
     x: 1,
     y: 2
})
// console.log(p.toString())

// 2. class 实现类
// 类的方法内部如果有this ，它默认是指向类的实例 可以使用bind 或者是使用箭头函数解决
const inst = class Point {
     constructor({
          x,
          y
     }) {
          this.x = y;
          this.y = x;

     };

     print() {
          console.log('test')
     }
}

var t = new inst({
     x: 1,
     y: 2
})
// var _print = t.toString
// console.log(t.toString());
// console.log(_print())

//类型判断

let isType = type => obj => {
     console.log(Object.prototype.toString(obj))
     return Object.prototype.toString.call(obj) === `[object ${type}]`
}


console.log(isType('String')('123'))

console.log(isType('Array')([1, 2, 3]))


//  高阶函数 add求和函数  
// 我们知道打印函数会自动调用toString() 方法

function add(a) {
     function sum(b) { // 使用闭包
          a = a + b; //  累加
          return sum;
     }
     sum.toString = function () { // 重写 toString（）方法
          return a;

     }

     return sum; //  返回一个函数

}
console.log(add(1)(2)(3))


// 模拟一个高阶函数
// 总结 高阶函数是一个可以接受函数作为参数，甚至返回一个函数的函数。
// 它就像一个常规函数一样， 只是多了接收和返回其他函数的附加能力，即参数和输出
const strArray = ['JavaScript', 'PHP', 'JAVA', 'C', 'Python'];

function mapForEach(arr,fn) {
     const newArray = [];
     for(let i = 0;i<arr.length;i++){
          newArray.push(fn(arr[i]))
     }
       return newArray;
}

const lenArray = mapForEach(strArray, function(item){
    return item.length;
})

console.log(lenArray);



// 1.拷贝（浅拷贝 深拷贝）