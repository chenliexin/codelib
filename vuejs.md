

## 应用

### 添加实例属性

公用数据、工具等，不污染全局，在原型上定义使得所有实例可以用到

```js
Vue.prototype.$appName = 'My App'

new Vue({
  beforeCreate: function () {
    console.log(this.$appName)
  }
})
```

$开头是一个公用命名约定

