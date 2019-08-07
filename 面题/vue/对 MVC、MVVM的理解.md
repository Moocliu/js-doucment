#mvvm 的理解？

![](https://box.kancloud.cn/cf1408179b22cd06cb153688d97d4ae0_375x270.png)

mvvm 是 model-view-viewmodel 的缩写 ，model 代表数据模式负责业务逻辑和数据封装，view 代表 ui 组件负责界面和显示， viewModel 监听模型数据的改变和控制视图行为，处理用户的交互，简单的说就是通过“双向数据绑定”把 view 和 model 层连接起来，在 mvvm 的架构下，view 和 model 没有直接联系，而是通过 viewmodel 进行交互，我们只关注业务逻辑，不需要操作 dom

缺点：
不支持低版本的浏览器 最低到 ie9 ，不利于 seo 的优化，首页加载时间比较长 不可以使用浏览器的导航按钮需要实现前进后退





#### MVC

![](https://box.kancloud.cn/74c15299733dc271ccba753f910d7852_378x279.png)

MVC允许在不改变视图的情况下改变视图对用户输入的响应方式，用户对View的操作交给了Controller处理，在Controller中响应View的事件调用Model的接口对数据进行操作，一旦Model发生变化便通知相关视图进行更新。