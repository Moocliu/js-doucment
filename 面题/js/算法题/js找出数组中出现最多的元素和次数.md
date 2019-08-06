

#### js找出数组中出现最多的元素和次数





#### 去除对象遍历，把比较放到数组遍历种

```js
function findMost (arr) {
  if (!arr.length) return;
  if (arr.length === 1) return 1;
  let res = {};
  let maxName, maxNum = 0
  // 遍历数组
  arr.forEach((item) => {
    res[item] ? res[item] += 1 : res[item] = 1
    if (res[item] > maxNum) {
      maxName = item
      maxNum = res[item]
    }
  })
  return '出现次数最多的元素为:' + maxName + ', 出现次数为:' + maxNum;
}
```


作者：互联网搬砖学徒工链接：https://juejin.im/post/5c889c5c6fb9a04a103024b4来源：掘金著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。