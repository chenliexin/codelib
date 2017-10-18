

### HTTP, HTTPS
---

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
    - window.name，利用window.name在加载不同页面的时候不会改变。
    - webSocket，需要后端配合。
  - 双向跨域
    - 降域，通过修改document.domain为共有部分。缺点：降域后无法回退；ajax不起作用；会被同时攻击。
    - location.hash，通过修改hash和监听hashchange事件。缺点：数据暴露；数据格式单一。
    - postMessage，通过iframe.contentWindow.postMessage方法和监听message事件。

> http请求和响应
- 请求：请求行，请求头，空行，请求包体（post）
- 响应：状态行，响应头，响应包体

> get和post
- 参数位置，参数大小（get为2048字符）
- 历史记录，缓存，书签
- 数据类型（get只能为ascii）

> http状态码
  - 1信息：100继续、101切换协议
  - 2成功：201已创建、202已接受、206部分内容
  - 3重定向：301永久、302临时
  - 4客户端错误：400语法错误、401未授权、403拒绝、404不存在
  - 5服务端错误：500内部错误、501不支持请求、502网关、503服务维护、505http版本

> http和https
- https = http + 加密 + 认证 + 完整性保护
- http，无状态，端口为80。
- https，是http通信接口部分改用ssl和tls协议。http直接和tcp通信，https使用通过ssl和tcp通信，端口为443。

### HTML5
---

> 本地存储
- webStorage
  - localStorage
  - sessionStorage
- indexedDB

### MVC MVP MVVM

按照模式出现的时间，先是 MVC 。 Model 模型负责提供数据、 View 视图负责界面显示、 Controller 控制器负责逻辑处理。

典型的 MVC 流程：用户通过 View 或 直接向 Controller 发出指令， Controller 完成业务逻辑后，要求 Model 改变状态， Model 将新的数据发送到 View ，用户得到响应。 

MVC 的最大特点就是所有通信都是单向的，因此，将 MVC 用于前端开发的话会导致两个问题：一是 View 包含了业务逻辑，二是 Controller 会变得非常复杂。

MVP 是 MVC 的一个演变模式， Presenter 表示器负责界面逻辑处理，从而解决 MVC 的第一个问题。Presenter 串联起 View 与 Model 的通信，且所有通信都是双向的。

MVVM 与 MVP 基本上相同，而不同之处在于 ViewModel 视图模型和 View 之间采用双向绑定，从而解决了MVC的第二个问题，目前流行的三大前端框架均采用这种方式。

技术选项的关键在于业务，单纯展示性的 web 应用可以采用 MVC 模式的 nodejs 服务；强视图交互的 web 应用可以采用 MVP 模式来统一管理逻辑；强数据交互的 web 应用则可以采用 MVVM 模式来减少渲染逻辑。

### TODO
---
- cookis
