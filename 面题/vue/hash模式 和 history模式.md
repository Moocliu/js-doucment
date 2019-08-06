# 面试讲解 hash 模式和 history 模式

hash 跳转 不刷新页面

history 一般都需要服务器端配置 或者是支持 ssr，否则服务器会返回 404 会请求接口

## hash 模式

hash 的原理是使用 window.onhashchange 事件

hash 即浏览器 url 中的# 后面的内容 ，包含# hash 是 url 中的锚点，代表的是网页中的一个位置，单单改变# 后的部分，浏览器只会加载相应的位置内容，不会重新加载页面，

- #### 是用来指导浏览器的工作的，对服务器完全无作用，http ,不包含

- 每一次改变#后的部分，都会在浏览的访问的历史中增加一个记录，使用后退 “按钮”，就可以返回

也就是说 hash 模式通过锚点值改变，根据不同的值，渲染指定的 DOM 位置的不同数据

## history 模式

通过 history.pushState 和 replceState() 这两个应用浏览器的历史记录栈，在当前的已有的 back forward go 的基础之上，它们提供了对历史记录进行修改，

参考文档： https://cloud.tencent.com/developer/article/1414076

https://www.jianshu.com/p/9449d7605279
