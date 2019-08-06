



####  flex 布局：

有哪些属性：



```css
flex容器有两根轴:水平主轴就是x轴(main axis)和竖直轴也是y轴(cross axis),两轴相关位置标识如下:

flex容器属性:

flex-direction:决定项目的排列方向。

flex-wrap:即一条轴线排不下时如何换行。

flex-flow:是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

justify-content:定义了项目在主轴上的对齐方式。(justify)

align-items:定义项目在交叉轴上如何对齐。

align-content:定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。(换行会产生多轴)
```



### Flex item属性:

- ```css
  - order:定义项目的排列顺序。数值越小，排列越靠前，默认为0。
  
  - flex-grow:定义项目的放大比例,如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
  
  - flex-shrink:定义了项目的缩小比例，默认为1，如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
  
  - flex-basis:定义了在分配多余空间之前，项目占据的主轴空间（main size）。
  
  - flex:是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
  
  - align-self:允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
  ```

  

