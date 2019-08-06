> `keep-alive` 是 `Vue` 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染

```
<keep-alive>
  <component>
    <!-- 该组件将被缓存！ -->
  </component>
</keep-alive>
```





keep-alive新加入了两个属性: include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于include) 。