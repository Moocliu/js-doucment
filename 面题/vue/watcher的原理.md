# watcher 的原理

1. 是把自己设置到全局唯一的指定位置（例如 window.target）, 然后读取数据。 因为读取了数据，所以会触发这个数据的 getter.接着，在 getter 中就会从全局唯一的那个位置读取当前正在读取数据的 watcher,并把这个 watcher 收集到 Dep 中去，通过这个方式，watcher 可以主动去订阅任意给一个数据的变化。
