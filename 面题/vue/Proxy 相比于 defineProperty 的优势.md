# Proxy 相比于 defineProperty 的优势

## Object.defineProperty() 的问题主要有三个：

1.不能监听数组的变化

2.必须遍历对象的每个属性

3.必须深层遍历嵌套的对象

## Proxy 特点：

1. 针对对象是整个对象，而不是对象的某个属性，所以也就不需要对keys进行遍历，这解决了Object.defineProperty() 的必须遍历对象的每个对象

2.支持数组，proxy不需要对数组的方法进行重载，省去了众多hack ，减少代码量和维护成本

3.proxy 的第二个参数可以有13种拦截方法 ，比object。defineProperty()更加丰富



