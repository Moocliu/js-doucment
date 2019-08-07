

#### 清除浮动的方式：

- 为父元素设置高度
- 为父元素添加`overflow:hidden`
- 伪元素

```css
.fix::after { 
     content:""; 
     display:block; 
     clear:both;
}
```



（水平）居中有哪些实现方式

##### 如何让一个不定宽高的盒子水平垂直居中

> 定位的方式

```
.father {
    position: relative;
}
.son {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
```

> css3属性

```
.father {
    position: relative;
}
.son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

> flex布局

```
.father {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

#### css权重



```css
!important(10000) > 内联样式(1000) > id(100) > class|伪类|属性选择(10) > 标签|伪元素(1) > 通配符(0) > 继承(无)
```





#### 纯css画三角形

```css
border-style: solid;
border-width: 0 100px 100px 100px;
border-color: transparent transparent blue transparent;
```



#### [css布局，实现顶部高固定，左侧导航宽固定，右侧自适应](https://juejin.im/post/5c870e786fb9a049c8504bb5)

```css
 <div class="body">
    <div class="header"></div>
    <div class="section">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div class="footer"></div>
  </div>

1.position定位
整个父元素相对定位，导航高固定，内容区域绝对定位，通过定位属性实现高度自适应。

2. flex 弹性布局
利用 flex flex-direction：column属性，使元素自上往下排列，flex:1占据除规定元素外的所有位置

```

#### ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。

::是伪元素
:是伪类



##### CSS3有哪些新特性

- 实现圆角`border-radius`，阴影`box-shadow`，边框图片`border-image`
- 对文字加特效`text-shadow`，强制文本换行`word-wrap`，线性渐变`linear-gradient`
- 实现旋转`transform:rotate(90deg)`,缩放`scale(0.85,0.90)`,`translate(0px,-30px)`定位,倾斜`skew(-9deg,0deg)`;
- 增加了更多的CSS选择器、多背景、`rgba()`
- 唯一引入的伪元素是`::selection`；
- 实现媒体查询`@media`，多栏布局`flex`
- 过渡`transition` 动画`animation`





**HTML5有哪些新特性,移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分HTML和HTML5**

新增加了图像、位置、存储、多任务等功能。
新增元素：

1. canvas
2. 用于媒介回放的video和audio元素
3. 本地离线存储。localStorage长期存储数据，浏览器关闭后数据不丢失;sessionStorage的数据在浏览器关闭后自动删除
4. 语意化更好的内容元素，比如 article footer header nav section
5. 位置API：Geolocation
6. 表单控件，calendar date time email url search
7. 新的技术：web worker(web worker是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行) web socket
8. 拖放API：drag、drop

**7 常见的浏览器内核有哪些？**

1. Trident( MSHTML )：IE MaxThon TT The World 360 搜狗浏览器   （踹等特）
2. Geckos：Netscape6及以上版本 FireFox Mozilla Suite/SeaMonkey  （改扣死）
3. Presto：Opera7及以上(Opera内核原为：Presto，现为：Blink)  （p锐死头）
4. Webkit：Safari Chrome



**11 cookies，sessionStorage和localStorage的区别？**

共同点：都是保存在浏览器端，且是同源的。

区别：

1. cookies是为了标识用户身份而存储在用户本地终端上的数据，始终在同源http请求中携带，即cookies在浏览器和服务器间来回传递，而sessionstorage和localstorage不会自动把数据发给服务器，仅在本地保存。
2. 存储大小的限制不同。cookie保存的数据很小，不能超过4k，而sessionstorage和localstorage保存的数据大，可达到5M。
3. 数据的有效期不同。cookie在设置的cookie过期时间之前一直有效，即使窗口或者浏览器关闭。sessionstorage仅在浏览器窗口关闭之前有效。localstorage始终有效，窗口和浏览器关闭也一直保存，用作长久数据保存。
4. 作用域不同。cookie在所有的同源窗口都是共享；sessionstorage不在不同的浏览器共享，即使同一页面；localstorage在所有同源窗口都是共享、、



IE盒子模型 和标准模型的区别：

**两者的区别在于content的不同，IE盒模型的content包括border、padding**

https://juejin.im/post/5b50a05351882519eb6593ff

