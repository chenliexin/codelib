### HTTP, HTTPS
> http请求过程
- 输入url
- dns解析域名为ip
  - 浏览器缓存，系统缓存，路由器缓存，isp dns缓存
- tcp三次握手
  - client>server，发起一个tcp连接，同步报文
  - server>client，应答报文，表示已创建连接
  - client>server，应答报文，表示收到已连接
  - 四次挥手
- http请求
- http响应
  - [浏览器跟踪重定向地址]
  - 服务器处理请求
  - 服务器返回一个html响应
- 释放或保持tcp连接
  - header中connection
    - close，服务器主动关闭tcp连接，客户端被动关闭。
    - keep-alive，保持tcp连接
- 客户端解析html
  - 创建document对象
  - 解析html开始
    - document.readystate='loading'
  - 解析html过程中
    - 添加element对象和text节点
    - 遇到script，下载执行，解析暂停
    - 遇到script[async]，下载异步执行
    - 遇到script[defer]，下载延迟执行
  - 解析html完成
    - document.readystate='interactive'
  - 延迟脚本执行
    - 执行完毕时，触发document对象的DOMContentLoaded方法
    - 执行完毕时，仍可能有异步脚本未执行
  - 异步脚本执行
    - 执行完毕时，document.readystate='complete'
    - 执行完毕时，触发window对象的load事件
    - 执行完毕时，仍可能有其他资源未完全载入，如图片

> 同源策略
- 同源条件：协议、域名、端口
- 受限行为：cookie、web storage、dom、ajax
- 跨域方法
  - 单向跨域
    - jsonp
    - 服务器代理
    - cors，通过createCORSRequest方法。需要后端通过Access-Controll-Allow-Origin配合。
  - 双向跨域
    - 降域，通过修改document.domain为共有部分。缺点：降域后无法回退
    - location.hash，通过修改hash和监听hashchange事件。缺点：数据暴露；数据格式单一。
    - postMessage，通过iframe.contentWindow.postMessage方法和监听message事件。

> get和post
- 参数位置，参数大小（get为2048字符）
- 历史记录，缓存，书签
- 数据类型（get只能为ascii）
- 速度
  - post两步，先发http头，再发数据
  - get，只需发tcp报文

> http状态码
- 1信息：100继续、101切换协议
- 2成功：201已创建、202已接受、206部分内容
- 3重定向：301永久、302临时、304缓存
- 4客户端错误：400语法错误、401未授权、403拒绝、404不存在
- 5服务端错误：500内部错误、501不支持请求、502网关、503服务维护、505http版本

> http和https
- http
  - 直接和tcp通信
  - 端口为80
- https
  - http、加密、认证、完整性保护
  - https使用通过ssl和tcp通信
  - 端口为443
- http/2
  - 基于SPDY协议，Google基于TCP的应用层协议
  - 采用二进制格式而非文本格式
  - 使用报头压缩
  - 多路复用，而非有序并阻塞

> 缓存分类
- 数据库缓存
- 代理服务器缓存
- cdn缓存
- 浏览器缓存

> 浏览器缓存
- 按照发生的时间顺序分别为存储策略, 过期策略, 协商策略, 其中存储策略在收到响应后应用, 过期策略, 协商策略在发送请求前应用
  - 存储策略 Cache-Control Pragma
  - 过期策略 Cache-Control Expires
  - 协商策略 Last-Modified ETag
  - 协商策略用于重新验证 If-Modified-Since If-Unmodified-Since If-Match If-None-Match
- Cache-Control
  - public 资源将被客户端和代理服务器缓存
  - private 资源仅被客户端缓存, 代理服务器不缓存
  - no-store 请求和响应都不缓存 
  - no-cache 相当于max-age:0,must-revalidate即资源被缓存, 但是缓存立刻过期, 同时下次访问时强制验证资源有效性
  - max-age 缓存资源, 但是在指定时间(单位为秒)后缓存过期
  - s-maxage 同上, 依赖public设置, 覆盖max-age, 且只在代理服务器上有效.
- Pragma http1.0字段, 通常设置为Pragma:no-cache, 作用同Cache-Control:no-cache
- Expires 即到期时间, 以服务器时间为参考系, 其优先级比 Cache-Control:max-age 低
- ETag
  - 实体标签, 服务端资源标识符token
  - 服务端返回200时带有ETag
  - 客户端再次请求时候带有If-None-Match
  - 服务端根据If-None-Match返回200或304
  - 优先级比Last-Modified高
- Last-Modified
  - 服务端返回200时带有Last-Modified
  - 客户端再次请求时候带有If-Modified-Since
  - 服务端根据If-Modified-Since返回200或304

- 强缓存
- 协商缓存
