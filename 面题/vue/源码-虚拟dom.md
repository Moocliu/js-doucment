



虚拟DOM就是为了解决这个浏览器性能问题而被设计出来的。例如前面的例子，假如一次操作中有10次更新DOM的动作，虚拟DOM不会立即操作DOM，而是将这10次更新的diff内容保存到本地的一个js对象中，最终将这个js对象一次性attach到DOM树上，通知浏览器去执行绘制工作，这样可以避免大量的无谓的计算量。

### 




参考文档： https://www.jianshu.com/p/616999666920

https://macsalvation.net/2018/08/06/dive-deep-into-vue-part-1-vdom-and-diff/