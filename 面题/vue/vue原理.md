#

// 侦听数据变化 object.defineProperty

```js
function defineRective(data, key, val) {}
Obejct.defineProperty(data, key, {
  enumerable: true,
  configurable: true,
  get: function() {
    return val;
  },
  set: function() {
    if (val === newVal) {
      return;
    }
    val = newVal;
  }
});
```
