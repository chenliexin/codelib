
工作流插件: 命令创建 Sentry 项目, 自动化添加 Sentry 告警人员,



【算法/数据结构】有翻译项目经验。字母异位词，给定两个不同英文单词，如果这两个单词中的每个字母出现次数一样。如何实现
  ==记数使用map，先加后减；字符切割排序对比；
  ==异位程度鉴定
【计算机网络】聊聊浏览器缓存，先介绍下
  ==缓存其实就是本地存储的一种存和取的表现。哪些因素控制存不存、取不取：存储策略 Cache-Control Pragma；过期策略 Cache-Control Expires；协商策略 Last-Modified ETag；协商策略用于重新验证 If-Modified-Since If-Unmodified-Since If-Match If-None-Match
  ==浏览器的本地存储，sw，cors
【计算机网络】浏览器拿到一份html后的解析过程
  ==document.readystate script[async] script[defer] DOMContentLoaded window对象的load；仍可能有其他资源未完全载入，如图片
【前端基础html/css】介绍一下标签语义化的了解，作用
  ==列举语义化标签；主副标题+正文的的html；
  ==html新增表达属性；pattern属性和email验证；还有其他特性
【前端基础html/css】说一说 flex 布局，有了解 Grid 么；响应式实现
  ==新手引导。一个蒙层上报看起来是扣掉了一个矩形位置。来做一些功能引动
  ==滚动条占位问题
1【原生js】ajax用什么api，xhr和fetch的区别
  ==XHR 基于事件机制实现请求成功与失败的回调，Fetch 通过 Promise 来实现回调，调用更加友好。
  ==介绍一下promise的用法。生成器函数generator、async/await之类的
1【原生js】es6的数组array新增了一些方法
  ==filter方法传入一个boolean构造器
  ==参数通常带有一个原数组的引用，这个设计的好处是
【原生js】说说new操作符的用处
  ==原型链，作用域链接，this指向，修改this指向
  ==深拷贝
1【react-redux】翻译富交互的情况下，怎么确保redux的顺序
【react】fiber解决了什么问题？具体原理是；
  ==为什么 Fiber 双向链表的结构可以解决递归慢的问题；
【react】常用的hook有哪些，如何自定义一个hook
【前端工程化】webpack 的摇树对 commonjs 和 es6 module 都生效么，原理是；
  ==cjs和esm的区别。可以相互引用吗。需要注意什么
  ==cjs转esm，babel
【前端安全】飞书高频用户交互。有哪些安全策略
  ==列举https、cors、cookie、csrf/xss、csp、转义、jsonp、iframe
  ==csrf的场景和防御
【场景设计】全文翻译、撤销重做








webpack 中 chunkHash 与 contentHash 区别；
写过 webpack 的 loader 和 plugin 么；
webpack 处理 image 是用哪个 loader，限制成 image 大小的是...；
webpack 将 css 合并成一个；
webpack 的摇树对 commonjs 和 es6 module 都生效么，原理是；
实现一下「模版字符串」功能；
实现一下 Promise.all (Promise 不用写)；
怎么实现响应式布局的；
css flex 的各个属性值；
css 动画 animation 各个时间值含义；
css 如何实现让一个元素旋转并横向移动，如果只用一个 css 属性；
less 与 sass 区别，技术选型时如何取舍；
ES6 symbol 如何使用以及使用场景；
ES6 Proxy 如何使用以及使用场景，说说 Reflect；
generator 有什么应用场景;
async await 如何实现的；
git reset 与 revert 区别，revert 多个 mr 改如何处理；
git 如何撤回 add 后的内容；
http2 与 http1.1 区别，了解 http3 么，说说；
tcp 与 udp 的区别；

手写在 给定的 n 个数中随机取出 m 个数，要求等概率；
手写一下防抖节流函数；
设计实现一个「星级评分」组件；
说说 http 缓存；
call、apply、bind 三者的区别，如何实现 bind；
...其他一些记不住了，这一面很多手写：）
js 有哪些基本类型，说说 typeof 与 instanceof；
说说 new 操作符；
什么是 event loop；
Promise 的用法？了解 allSettled 方法么，怎么实现？
说说闭包；
ES5 实现继承的方法;
说说跨域；
commonJS 与 ES6 模块化区别；
webpack 了解么？loader、plugin 分别是干嘛的？如何实现一个 loader？
webpack 如何优化打包速度；
说一下 css 盒模型，border-box 和 content-box 区别；
说说 BFC；
移动端响应式布局怎么实现的；
说一说 flex 布局，有了解 Grid 么；
有兼容 retina 屏幕的经历吗？如何在移动端实现 1 px 的线;
说一下 react 组件的生命周期；
react 组件如何做性能优化，说说 pureComponent；
调用 setState 之后发生了什么;
了解 fiber 么？解决了什么问题？具体原理是；
有用过 hooks 么？怎么看待 hooks？它的原理是；
了解过 react 最新的一些动态么？time slice 、suspense、server component 能说说么；
了解最近一些新技术么，webpack5 做了哪些新突破；
为什么 vite、snowpack 可以比 webpack 快那么多？具体原理是；
什么是 CSRF 攻击，怎么预防；
为什么说用 css 实现动画比 js 动画性能好；
什么是 合成层；
http2 与 http1.1 区别；
说一说 http 缓存；
http 状态码；


实现斐波纳切数，递归和非递归的时间复杂度分别是多少；
...还有其他一些基础问题，没记住：）
手写大数相加方法；
实现一个方块的拖拽；
问了一些项目的问题，以及相关技术细节；
从一个 URL 输入到页面渲染，经历了哪些过程，尽可能的详细；
tcp 握手 回收过程，了解泛洪攻击么；
说说 event loop（并出了一道题，写输出顺序）；
SSR 怎么做的，怎么保证同构？server 端的数据都 renderToSting 消费了，为什么还要给到 client 端；
js 的严格模式；
说说 Iterator 的使用；
说一说快速排序的过程；
node 如何捕捉错误，内存泄漏怎么排查；
还有一些基础题目...

二面

依旧是项目问题...
性能优化怎么做的，怎么衡量收益的；
为什么要做 SSR；
E2E 测试怎么做的，怎么保证测试覆盖率和准确性；
如何合理分配 node 服务资源；
这一面对于项目里的技术细节问的很深入，还问了些计算机网络、React相关的问题...

三面

项目...;
hybrid 通信原理；
如何看待小程序，它的技术原理是；
设计一个协同文档的技术流程；
离线包怎么做的，现在公司的 app 提供了哪些特殊能力；
质量保障平台如何做的，项目中单元测试怎么做的，为什么要有 E2E 测试；
就记到这些问题...🤯

四面

希尔排序，堆排，快排；
this 指向问题，说出输出内容；
如何设计一个组件库；
用过 TypeScript 么，了解哪些新特性；
说说 React Fiber...;
为什么 Fiber 双向链表的结构可以解决递归慢的问题；
了解设计模式么，说说单例模式的优缺点;
职业规划；

手写一个版本比较函数；

手写代码比较常见的几道题目：

防抖节流；
手写 Promise 及相关 api 实现；
实现 bind、apply、call；
request cache；
实现模版字符串；
es6 class 转成 es5 ；
实现 Array flat 等相关 API；
实现一个版本比较函数；...


最近博客
手摸手从浅析vue-cli原理到定制前端开发模板
React Hooks + Context打造简易redux(获得掘金技术社区推荐热搜文章)
vuex + keep-alive实现tab标签页面缓存


css
  布局方式，rem
  min-width/max-width 和 min-height/max-height 属性间的覆盖规则？
  绝对定位全是，如何是的这个页面的body具有高度
js
  reduce，用法，第三参数为什么
  0.1 + 0.2 = 0.3，如何规避
  如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。
  异步编程
    setTimeout、Promise、Async/Await 的区别
    Async/Await 如何通过同步的方式实现异步
http header
cookie
viewport
promise

vue
  Object.defineProperty和Proxy的区别
  什么是双向绑定？原理是什么？
  nextTick的原理吗
  你有用过事件总线(EventBus)吗？说说你的理解
  什么是 mixin


浏览器
  如何实现浏览器内多个标签页之间的通信？
babel
websocket
es
  常见模块风格，cjs和esm区别





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

### HTML5
---

> 本地存储
- webStorage
  - localStorage
  - sessionStorage
- indexedDB

### JavaScript

数据类型，有基本类型、基本引用类型、引用类型之分。总体包括： Null 、 Undefined 、 Number 、 String 、 Boolean 、 Symbol （es6）、 Object （ Function 、 Array 、 Date 、 RegExp ）。

相等， == 、 === 、 Object.is(x, y) ， 三者在 (+0, -0)、(NaN, NaN)会出现差异，这两个等式在 Object.is 的结果分别是 false 、 true 。

特殊值：Infinity，NaN

全局方法： decodeURIComponent/encodeURIComponent, isFinite, isNaN, typeOf, instanceOf

### JavaScript Array

属性：length, prototype；方法：isArray, from, of

Mutator 方法会改变数组自身的值：copyWithin, fill, pop, push, reverse, shift, unshift, sort, splice

Accessor 方法不会改变数组的值，只会返回一个新的数组或者返回一个其它的期望值：concat, includes, join, slice, toString, toLoaclString, indexOf, lastIndexOf

Iteration 方法对数组进行遍历，都需要指定一个回调函数作为参数：forEach, map, filter, every, some, find, entries, keys, values, reduce, reduceRight

### JavaScript Date

属性：length, prototype；方法：now, parse, UTC

Getter 方法，Setter 方法：getFullYear, getMonth, getDay, getDate,  getHours, getMinutes, getSeconds, getMilliseconds, getTime

### JavaScript Number/Math

Number 方法：isNaN, isFinite, isInteger, isSafeInteger, parseFloat, parseInt

Math 属性：E, PI

Math 方法：abs, ceil, floor, pow, random, round

### JavaScript String/RegExp

String 方法：charAt, charCodeAt, concat, indexOf, match, replace, search, split, slice, substr, trim

元字符，零宽断言 (?=exp) 正向前瞻、 (?!exp) 负向前瞻，非捕获 (?:exp)，暂存 RegExp.$1-9

RegExp 方法：exec, test, 字符串方法

### JavaScript Object/Funtion

Object 方法：assign, create, defineProperty, defineProperties, entries, keys, values, freeze, isFrozen, is, getPrototypeOf；Object 实例方法：isPrototypeOf, hasOwnProperty

scope 作用域包括 global scope 全局作用域和 local scope 局部作用域。closure 闭包是一种带私有变量的函数。私有变量会一直存在于内存中，因此会有内存泄露隐患。　

scope chain 作用域链，是一种变量解析方式。在目标作用域执行时，创建一个 execution context 运行期上下文(execution context)内部对象，该对象从全局作用域到目标作用域覆盖解析变量，该对象会在目标作用域执行完毕时销毁。

prototype chain 原型链是一种原型指向方式，每个对象都有一个prototype原型对象。这个原型对象又有自己的原型，直到某个对象的原型为 null 为止。通过 Object.getPrototypeOf(obj) 或 `__proto__` （非标准）来获得原型。

constructor 构造器是一种对象内部属性，所有对象都具有该属性，等于该对象的构造函数。

this，是一个指向调用该函数的对象的关键字。apply和call可以改变这种指向，两者的第一个参数为传入的对象（留空则为Global），不能继承原型链，不同之处在于apply第二个参数是数组作为调用函数的参数，而call则是将第一个参数后的参数作为调用函数的参数。

### JavaScript Error

ReferenceError 无效引用；SyntaxError 语法错误；TypeError 变量或参数不是有效类型；RangeError 超出范围；URIError URI 参数无效；EvalError eval() 错误。

## JavaScript
- event

事件的三个阶段， capture 捕获（ie8+）、 target 目标、 the bubbling 冒泡。 DOM 节点是以树状结构存在的，事件捕获就是从根节点到目标节点的过程，事件冒泡就是从目标节点到根节点的过程，这样一个往返构成 DOM 事件流。

事件监听， W3C 标准方法 addEventListener(eventName, fn, useCapture) ；不支持事件捕获的 IE 版本中使用方法 attachEvent(onEventName, fn) 均默认为事件冒泡，移除方法 dispatchEvent 。

事件监听的回调函数中， W3C 标准将 Event 对象作为参数传入， ie8- 中 Event 对象是 window 的一个属性。Event 对象中 stopPropagation() 用于阻止事件传播， preventDefault() 用于阻止默认行为； ie8- 分别是 cancelBubble = true 和 returnValue = false 。

事件代理/委托，利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。其优势在于：减少内存、减少事件注册、新增同类型对象无效再次绑定。

事件代理分发处理，通过 Event.target ， ie8- 中是 Event.srcElement ，但并不是所有事件类型都支撑冒泡，如 focus ， blur 等。

事件广播/派发，目标节点通过使用 dispatchEvent(evt) 来获得一个合成事件，其返回值取决于 evt 中是否调用了 preventDefault() 。 evt 是通过 Document.createEvent() 或 new Event() 创建的自定义事件。

实现事件模型的思路：定义一个构造函数，定义注册、触发、注销方法。

### use strict

禁止使用全局、with、eval、保留字；不能重名、重复参数；禁止八进制；不允许对arguments赋值。

### JavaScript 内存管理

在创建变量时分配内存，并且在不再使用它们时自动释放，这过程称为垃圾回收。

### MVC MVP MVVM

按照模式出现的`时间顺序`，先是 `MVC` 。 `Model 模型`负责提供数据、 `View 视图`负责界面显示、 `Controller 控制器`负责逻辑处理。

典型的 MVC 流程：用户通过 View 或 直接向 Controller 发出指令， Controller 完成业务逻辑后，要求 Model 改变状态， Model 将新的数据发送到 View ，用户得到响应。 

MVC 的最大特点就是所有通信都是`单向`的，因此，将 MVC 用于前端开发的话会导致两个问题：一是 View 包含了业务逻辑，二是 Controller 会变得非常复杂。

`MVP` 是 MVC 的一个演变模式， `Presenter 表示器`负责界面逻辑处理，从而解决 MVC 的第一个问题。Presenter 串联起 View 与 Model 的通信，且所有通信都是`双向`的。

`MVVM` 与 MVP 基本上相同，而不同之处在于 `ViewModel 视图模型`和 View 之间采用`双向绑定`，从而解决了MVC的第二个问题，目前流行的三大前端框架均采用这种方式。

技术选项的关键在于业务，单纯展示性的 web 应用可以采用 MVC 模式的 nodejs 服务；强视图交互的 web 应用可以采用 MVP 模式来统一管理逻辑；强数据交互的 web 应用则可以采用 MVVM 模式来减少渲染逻辑。

## 设计模式
- 单例模式
- 工厂模式
- 迭代器模式
- 装饰者模式
- 策略模式
- 外观模式
- 代理模式
- 中介者模式
- 观察者模式、订阅/发布模式

## 数据结构
- 数组、列表
- 栈、队列、链表
- 字典、散列、集合

### ECMAScript 6

新增：let/const，解构赋值，模板字符串，原型扩展（字符串、数值、数组、对象、函数），Symbol，Set/Map，Iterator和for...of，Generator函数，Promise对象，Class，Module

### es6 原型扩展

Number 方法：isFinite, isNaN, isInteger；Math 方法：sign, cbrt；Array扩展的各种方法；对象的简洁表示方法、属性名表达式，方法：is, assign，set/get；函数参数默认值，rest参数（...arg），扩展运算符（...），箭头函数。

### es6 Set/Map

Set 它类似于数组，但是成员的值都是唯一的，没有重复的值。操作方法：add, delete, has, clear；遍历方法类似数组。

WeakSet 与Set类似，成员只能是对象，对象都是弱引用，即垃圾回收机制不考虑其的引用，因此WeakSet是不可遍历的。

Map 类似于对象，键值的范围不限于字符串，各种类型的值（包括对象）都可以当作键。操作方法：size, set, get, has, delete, clear。

WeakMap 与Map结构基本类似，只接受对象作为键名（null除外），而且键名所指向的对象，不计入垃圾回收机制。

### es6 Iterator 和 for...of

Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

### es6 Generator函数

调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

必须调用遍历器对象的next方法，使得指针移向下一个状态。直到遇到下一个yield语句（或return语句）为止。

next方法返回一个对象，它的value属性就是当前yield语句的值，done属性的值false，表示遍历还没有结束。

### es6 Promise对象

```js
var promise = new Promise(function(resolve, reject){ ... });
promise.then(function(){}, function(){});
```

### es6 Class

ES6的class可以看作只是一个语法糖，让原型写法更清晰。有一个constructor方法，这就是构造方法。类和模块的内部，默认就是严格模式。

### vuejs

vue 是类似于react的MVVM前端框架，主要特点在于数据的虚拟dom，双向绑定，组件化，规模化。用官方加粗的话就是，渐进式框架。当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。

对比react，基本上一样的。vue更轻量级一点、jsx和templates的区别譬如可以用pug或css作用域，中文文档。

要点：数据和方法、生命周期（created、mounted、updated、destroyed）、模板语法、事件处理（修饰符）、表单（v-model）、组件（prop，slot，once）、过渡动画（enter, enter-active, leave-active, leave-to），混合（mixins），插件

路由（vue-router）、状态管理（vuex）、ssr 服务端渲染/同构（Nuxt.js）

### node

- 特点：异步I/O、非阻塞、事件、回调、单线程、跨平台
  - 单线程
    - 优点：不用处理状态同步、没有死锁、没有上下文切换开销
    - 缺点：无法利用cpu多核、健壮性、不适合大量计算
    - 解决：使用子进程、pm2模块实现负载均衡

- 核心
  - assert断言、console控制台
  - Buffer缓冲器、stream流、querystring查询字符串、string_decode编码
  - child_process子进程、cluster集群、process进程
  - dns域名服务器、http、https、net网络、url网址
  - Error异常、V8引擎
  - events事件
  - fs文件、module模块、os系统、path路径、Zlib压缩
  - global全局、timer计算器、util工具

### koa

koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。

和 Express 的区别：不是大集成的全家桶而是中间件框架；更宽松没有路由等；优雅的中间件写法无论之前的生成器函数还是现在的await/async都能避免回调。

如Thickjs、eggjs（阿里）都是基于koa。

### webpack

模块打包器，递归构建一个依赖关系图，打包成少量的bundle。高度可配置，核心概念：入口、输出、loader、插件。

其他概念：模块路径解析、解析配置、别名、热替换、dev-server，合并配置文件webpack-merge，缓存。

和gulp，gulp是构建工具、自动化、提高效率用；webpack是打包工具、模块解析、代码编译方案。两个不是同一范畴的，不具备太大的可比性，而且可以同时使用，不冲突。

### 模块化

CommonJS 同步加载，如nodejs

AMD 异步模块定义 define(['dep1','dep2'],function(dep1,dep2){...})，如require.js和curl.js。

CMD 通用模块定义 define(function(require,exports,module){...})，如seajs，更贴近 CommonJS Modules/1.1 和 Node Modules 规范。

SeaJS对模块的态度是懒执行, 而RequireJS对模块的态度是预执行

### babel

babel是一个编译器，一般包括三步：解析parsing, 转换transforming, 生成generation

.babelrc 文件可用于配置，也可以在package.json中通过babel属性使用

babel-cli 命令行工具，包含两个命令：babel、babel-node

babel-register 引用钩子（require hook）。使用 require("babel-register"); 所有 .es6, .es, .jsx and .js都被转换

babel-core 核心库； babel-polyfill 垫片。

plugins 有各种插件，还有重要的presets（babel-preset-env replaces es2015, es2016, es2017, latest）

### git

基本的有：clone、add、push、state、pull、meger、branch、checkout等等；但是用的是可视化工具sourceTree。分支命名规则是master、preduction、pre-production、test、dev、feature、git工作流。

这里可以挂钩pm2，打补丁，回滚什么的就别说了。这里可能会涉及到github，以及权限问题，说一下ssh key。


### 前端优化

请求、资源、缓存

## 前端安全
- XSS
  - cross-site scripting跨域脚本攻击，javascript代码注入
  - 防御：过滤，避免运行用户代码，cookis用httpOnly等
- CSRF/XSRF
  - Cross-site request forgery 跨站请求伪造
  - 防御：检查来路同域、做token等
- 其他：界面劫持、http劫持等

## 资源
- 公众号
- SegmentFault.com
- stackOverflow
- infoQ
- 各ued博客、博客园、csdn
- tuicool的周刊



