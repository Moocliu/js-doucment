### 3.简单介绍一下 vuex 原理 和 其中的模块

#### - 原理：

vuex 是实现了一个单向数据流，在全局拥有了一个 state 存放数据，当组件要更改 state 中的数据时，必须通过 muation 进行， mutation 同时提供了 订阅者模式 供外部插件调用获取 State 数据的更新。而当所有的异步操作或者是批量的同步操作需要走 action ，但是 action 也是无法直接改变 State 的，还是需要通过 mutation 来修改 State 的数据，

## 有哪些属性

5 种 state gtter mutation action module

#### - 各个模块的使用：

#### dispatch:

#### action:

actions 可以理解为通过将 mutations 里面处里数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据。view 层通过 store.dispath 来分发 action。

#### commit:

#### mutations:

一、Action 类似于 mutation，不同在于：
二、Action 提交的是 mutation，而不是直接变更状态。
三、Action 可以包含任意异步操作

#### state:

一、Vuex 就是一个仓库，仓库里面放了很多对象。其中 state 就是数据源存放地，对应于与一般 Vue 对象里面的 data
二、state 里面存放的数据是响应式的，Vue 组件从 store 中读取数据，若是 store 中的数据发生改变，依赖这个数据的组件也会发生更新
三、它通过 mapState 把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

#### getter:

(1) getter 可以对 state 进行计算操作，它就是 store 的计算属性
(2) 虽然在组件内也可以做计算属性，但是 getters 可以在多给件之间复用
(3) 如果一个状态只在一个组件内使用，是可以不用 getters

辅助函数：
mapState:
mapGetter:
mapMutations:
mapActions:

## action 和 mutations 区别

#
