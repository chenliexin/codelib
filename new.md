
### 柳利民

- 项目经验尚可，对复杂项目、微前端、工程化有经验，对样式和布局、性能优化了解不深
- 思路清晰，但沟通和表达上不够流程
- 对现有业务使用的框架有进一步的了解，包括源码和底层原理




- 熟练使用 qiankun 微前端库

qiankun的底层是什么
沙箱是必须的吗，降级方案是什么
异常捕获
registerMicroApps



- 题目，上下布局
- 缓存
同源策略
事件代理/委托，利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。其优势在于：减少内存、减少事件注册、新增同类型对象无效再次绑定。
设计模式
koa，日志、部署、异常
安全性


数据中台产品：
1. 主导整个系统的前端架构设计、前端工程化流程，引入 qiankun 根据业务拆解项目使子模块产品独立。
  1. qingkun
2. 使用 Vue.js、Vuex、Vue Router 和 ElementUI 开发，参与需求讨论，并制定开发和上线计划。
  1. vue
3. 基于 ElementUI 封装多个业务组件，并基于 Storybook 封装组件库，发布私服共用。
  1. 什么组件，插槽
4. 制定前端开发规范，推动 Eslint、Prettier、commintlint 等规范工具在项目落地。
5. 制定 Git 代码提交流程，负责 code review。
6. 协调前端人员的调动配合与重点、难点攻关工作，并与其他部门协作完成了产品多次私有化交付。
互诺云自助建站系统
1. 基于 Vue.js、Vuex、Vue Router、Vue.Draggable 和 ElementUI 开发，参与需求讨论，并完成超过 80% 的功能。
  1. vue router
2. 确定项目整体流程并协调后端开发制定接口规范与数据。
3. 不断优化前端性能与执行效率，技术选型、难点攻关等。
4. 从零开始构建公司前端体系，包括制定开发规范、风格规范、命名空间、约定配置、设计文档等。

优化


### 赵颖欣

> JavaScript、HTML5、CSS3、Vue、前端工程化、构建工具、公共组件、Hybrid App、webview、微信小程序、nodejs、eggjs、ts

- 埋点上报SDK，采集页面点击、曝光、停留时长等场景，在所有前端项目中使用
  - 自动和手动
  - 上报维度？上报方式？sdk设计
  - 版本更新
  - header、method
  - 很多项目，跨域问题
  - 点击、事件流；srcelement vs target vs currenttarget
  - 停留时间，依赖于app外壳对webview的Onload和卸载，来捕获
- 采用通用手段提升页面性能
  - 哪些手段
  - 常见的指标有哪些
  - 缓存相关
  - 雅虎军规
  - vue相关
    - getter setter
    - watch computed
- 移动端视频播放器，适配各端兼容性问题
  - 实现方式
  - 支持流媒体格式
  - 功能设计
  - video标签
- webpack开发的构建工具包代替fis3
  - 目的是？
  - 如果代替，大面积的代码更改？
- 制定组件开发流程及规范，基于现有的CI/CD工作流，封装了组件开发工具包用于覆盖组件开发、构建、发布全流程
  - 流程规范是怎么样
  - 现有的ci/cd是怎么样
  - 制定项目？
  - 公共仓库
  - 组件开发工具包？
  - vue的插槽
- 封装了组件请求中心，实现了请求去重、请求聚合、请求缓存等
  - 如何实现
  - 缓存相关
  - promise，settimeout，async/await
  - 数据过时
- 组件事件系统的设计与开发，以及组件懒加载的实现
  - 事件系统？
  - 懒加载？
  - dom事件流
- APP离线包方案研究、设计及落地实现，各业务线前端项目可以低成本无痛接入
  - 离线包？
  - 可以增量吗，全量
  - 与原生的对接

- 性能和异常监控

### 题库

- 扫码支付
- 撤销删除
- 引文折叠（dom查找）

### 评价

- 过往项目涉移动端、小程序、node、工程化等
- 表达较为流畅，思路较为清晰，但不够深入
- 基础知识尚有进一步巩固的空间，自主思考稍显欠缺

- 在工程化、移动端、跨平台、性能优化有一定经验
- 业务或项目多基于现有的框架和平台，基础知识有进一步巩固的空间
- 反应能力有待提高，对实际场景题目未能很好组织思路


- 有移动端开发经验，在工程化、性能优化、数据埋点设计等有相关经验
- 表达流畅，思路较为清晰，在nodejs、前端工具等有一定程度的参与
- 部分基础知识有进一步巩固的空间，react技术栈相关经验少

建议进一步考察，建议考察点：公用模块的设计、主动推进项目、学习能力


html
meta viewport，及缩放等
反斜杠\n在html能否正常渲染，能控制这类型元字符相关的css
同浏览器下的多个标签通讯

css
常见布局
css 命名规范，项目对这方面考虑
文档流、脱离文档流、复杂交互页面鼓励多用何种布局
css优化措施

js
原型链，原型链的最终指向是
DOM 事件流，【题】下拉框实现中的dom事件
promise.all原理
content-type application/x-www-form-urlencoded multipart/form-data 上传文件
【题】从后端拿到银行卡数据是一个字符串，页面上展示是4个字符一组中间空格隔开
【题】react项目兼容ie9

基本面
同源策略

node
用node起一个https服务，你需要哪些资源
buffer和stream
koa的中间件执行顺序和原理

css，权重计算，flex容器布局
原型链和原型
Object.defineProperty
http请求过程到页面渲染完
浏览器缓存

swiper性能
封装axios post上传

vue最佳实践，虚拟DOM，DOM更新策略，vue-router导航守卫
webpack中的ts，打包原理

git回滚

SSR

html
输入url到页面渲染完

css
【隐藏元素的几种方法】
分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景
display: none - 不占空间，不能点击，会引起回流，子元素不影响
visibility: hidden - 占据空间，不能点击，引起重绘，子元素可设置 visible 进行显示
opacity: 0 - 占据空间，可以点击，引起重绘，子元素不影响
【height，max-height，min-height】
max-width 会覆盖 width，即使 width 是行内样式或者设置了 !important。
min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候；

基础库有多少项目用，

js
【】setTimeout、Promise、Async/Await 的区别
setTimeout: setTimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行；

Promise: Promise 本身是同步的立即执行函数，当在 executor 中执行 resolve 或者 reject 的时候，此时是异步操作，会先执行 then/catch 等，当主栈完成时，才会去调用 resolve/reject 方法中存放的方法。

async: async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
【】什么是 CSP？
【简述浏览器与 Node 的事件循环】
浏览器
宏任务：script 中的代码、setTimeout、setInterval、I/O、UI render；
微任务：promise（async/await）、Object.observe、MutationObserver；
Node
宏任务：setTimeout、setInterval、setImmediate、script（整体代码）、I/O 操作等；
微任务：process.nextTick（与普通微任务有区别，在微任务队列执行之前执行）、new Promise().then(回调) 等
区别
node 环境下的 setTimeout 定时器会依次一起执行，浏览器是一个一个分开的；
浏览器环境下微任务的执行是每个宏任务执行之后，而 node 中微任务会在各个阶段执行，一个阶段结束立刻执行 microTask；
【】事件委托以及优缺点?
答： 优点：
1.减少事件注册，节省内存。比如，
2.在table上代理所有td的click事件。
3.在ul上代理所有li的click事件。
4.简化了dom节点更新时，相应事件的更新。比如
5.不用在新添加的li上绑定click事件。
6.当删除某个li时，不用移解绑上面的click事件。 缺点：
1.事件委托基于冒泡，对于不冒泡的事件不支持。
2.层级过多，冒泡过程中，可能会被某层阻止掉。
3.理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。
4.把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。
【】常见的继承有几种方法?
答：
1.原型链继承
2.构造函数继承（经典继承）
3.组合方式继承（构造函数 + 原型链）
4.es6方法继承
【】扫码支付
  10个二维码
  超时如何设计

【题】撤销删除的实现
【】React组件间的通信有哪些？
【】csp
【】react
setState如何实现，同步和异步setState
常用hook，自定义封装hook。自定hook其实就是把useXXX方法执行以后，把方法体里的内容平铺到组件内部，我觉得这种说法对于理解自定义hook很友好

React的事件机制、
合成事件、1.在react中使用jsx语法绑定的事件并不是原生事件
几乎所有的事件代理(delegate)到document
React 事件机制分为事件注册，和事件分发，两个部分
