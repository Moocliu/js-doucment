

#### Set` 对象类似于数组，且成员的值都是唯一的



```js
const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
const set = new Set()
arr.forEach(item => set.add(item))
console.log(set) // 1, 2, 3, 4, 5

// 数组快速去重
console.log([...new Set(arr)])
```

#### `Map` 对象是键值对集合，和 `JSON` 对象类似，但是 `key` 不仅可以是字符串还可以是对象



```js
var map = new Map()
var obj = { name: '小缘', age: 14 }

map.set(obj, '小缘喵')
map.get(obj) // 小缘喵

map.has(obj) // true
map.delete(obj) // true
map.has(obj) // false
```