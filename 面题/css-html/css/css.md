

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



#### 解决img与文本之间的留白

1. 将img图片**display:block**
2. 将div的**line-height**设置得足够小，也可以去掉空白，例如div{line-height:5px;}
3. 将**font-size设为0**，实际上也是改变了line-height；
4. 改变vertical-align，让它不是baseline，比如设置**vertical-align:middle**。





https://juejin.im/post/5b50a05351882519eb6593ff

