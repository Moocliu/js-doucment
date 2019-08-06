#### diff 算法实现

以前写过两篇文章讨论这个算法的实现，没想到过的太久，忘记了。（文章地址： https://github.com/jkchao/blog/issues/3 ， https://github.com/jkchao/blog/issues/4） 。
也好，称此机会总结下

##### diff 的实现主要通过两个方法，patchVnode 与 updateChildren 。

```js
patchVnode 有两个参数，分别是老节点 oldVnode, 新节点 vnode 。主要分五种情况：
if (oldVnode === vnode)，他们的引用一致，可以认为没有变化。
if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text)，文本节点的比较，需要修改，则会调用Node.textContent = vnode.text。
if( oldCh && ch && oldCh !== ch ), 两个节点都有子节点，而且它们不一样，这样我们会调用 updateChildren 函数比较子节点，这是diff的核心，后边会讲到。
if (ch)，只有新的节点有子节点，调用createEle(vnode)，vnode.el已经引用了老的dom节点，createEle函数会在老dom节点上添加子节点。
if (oldCh)，新节点没有子节点，老节点有子节点，直接删除老节点。
```



##### updateChildren 是关键，这个过程可以概括如下：

```js
oldCh 和 newCh 各有两个头尾的变量 StartIdx 和 EndIdx ，它们的2个变量相互比较，一共有4种比较方式。如果 4 种比较都没匹配，如果设置了key，就会用key进行比较，在比较的过程中，变量会往中间靠，一旦 StartIdx > EndIdx 表明 oldCh 和 newCh 至少有一个已经遍历完了，就会结束比较。


```





作者：三毛
链接：https://jkchao.cn/article/5a784fc46c89ce0ff8dbfa36#header-8
来源：https://jkchao.cn