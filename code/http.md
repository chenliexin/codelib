# http全过程
- 输入url
- dns映射为ip
- tcp三次握手
- http请求
- http响应
- (浏览器跟踪重定向地址)
- 服务器处理请求
- 服务器返回一个html响应
- (视情况决定释放TCP连接)
- 客户端解析html
- 获取嵌入在html中的对象重新发起http请求

# same origin policy
- same origin
  - domain
  - port
  - protocol
- 限制
  - cookie, localStorage, indexedDB, dom
  - ajax
- 跨域
  - jsonp
  - 服务器代理
  - CORS
3.CORS var xhr = createCORSRequest('GET', url);
4.window.name
5.webSocket
双向跨域
降域
1.location.hash
2.postMessage






https
http+加密+认证+完整性保护=https
http:应用层的无状态，超文本传输协议。端口为80
HTTPS：只是http通信接口部分用SSL和TLS协议替代。http直接和TCP通信，而HTTPS使用SSL所以是先和SSL通信，再由SSL和TCP通信。端口为443




状态码

# dns
- dns解析域名的顺序
  - 浏览器缓存
  - 系统缓存
  - 路由器缓存
  - ISP DNS缓存


# 资源
- https://segmentfault.com/a/1190000007033157
