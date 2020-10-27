

## How to fetch data with React Hooks

```js
import React, { useState, useEffect } from 'react';

useEffect(() => {
  async function fetchData() {
    // await
  }

  fetchData();
}, [props]);
```



跳过 state 更新

- 调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行。（React 使用 Object.is 比较算法 来比较 state。）
  - 需要注意的是，React 可能仍需要在跳过渲染前渲染该组件。
  - 不过由于 React 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心。
- Effect Hook 可以让你在函数组件中执行副作用操作
  - Similar to componentDidMount and componentDidUpdate
  - 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用
  - 可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
  - 两种常见副作用操作：需要清除的和不需要清除的
    - 比如发送网络请求，手动变更 DOM，记录日志，这些都是常见的无需清除的操作。因为我们在执行完这些操作之后，就可以忽略他们了
  - Hook 使用了 JavaScript 的闭包机制
https://juejin.im/post/5c9827745188250ff85afe50
https://github.com/dt-fe/weekly/tree/master

Function Component 是更彻底的状态驱动抽象，甚至没有 Class Component 生命周期的概念，只有一个状态，而 React 负责同步到 DOM。


