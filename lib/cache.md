
### 分类

- 数据库缓存
- 代理服务器缓存
- cdn缓存
- 浏览器缓存

### 浏览器缓存

- 响应后：存储策略
- 请求前：过期策略、协商策略

按照发生的时间顺序分别为存储策略, 过期策略, 协商策略, 其中存储策略在收到响应后应用, 过期策略, 协商策略在发送请求前应用
请求304协议

- storage policy
  - `Cache-Control`
    - `public`
      - response
      - client
      - proxy server
    - `private`
      - responce
      - client
    - `no-store`
      - request/response
    - `no-cache`
  - `Pragma:no-cache`
    - Cache-Control:no-cache
    - http/1.0

### abc

- [浏览器缓存机制剖析](http://web.jobbole.com/91084/)

用户行为与缓存
  地址栏输入
  链接跳转
  链接新开窗口
  刷新
  强制刷新

强缓存, 协商缓存 和 启发式缓存
