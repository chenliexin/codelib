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






## https

http+加密+认证+完整性保护=https
http:应用层的无状态，超文本传输协议。端口为80
HTTPS：只是http通信接口部分用SSL和TLS协议替代。http直接和TCP通信，而HTTPS使用SSL所以是先和SSL通信，再由SSL和TCP通信。端口为443

SSL Secure Sockets Layer 安全套接层
HTTP 明文通信
IETF 1999年把 SSL 标准化，名称改为 TLS Transport Layer Security 传输层安全协议
SSL/TLS 同一个东西的不同阶段

HTTPS http+SSL/TLS

HTTP 2.0

TCP 协议是 HTTP 协议的基石——HTTP 协议需要依靠 TCP 协议来传输数据。(另一种是UDP )

在网络分层模型中，TCP 被称为“传输层协议”，而 HTTP 被称为“应用层协议”。
HTTP 对 TCP 连接的使用，分为两种方式：俗称“短连接”和“长连接”（“长连接”又称“持久连接”，洋文叫做“Keep-Alive”或“Persistent Connection”）

对称加密使用【相同的】密钥，非对称加密使用【不同的】密钥，“非对称加密”的实现，通常需要涉及到“复杂数学问题”。所以，“非对称加密”的性能通常要差很多（相对于“对称加密”而言）。

CA是Certificate Authority的缩写，也叫“证书授权中心”。



状态码

# dns
- dns解析域名的顺序
  - 浏览器缓存
  - 系统缓存
  - 路由器缓存
  - ISP DNS缓存


# 资源
- https://segmentfault.com/a/1190000007033157
