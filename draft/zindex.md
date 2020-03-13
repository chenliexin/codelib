#flux
http://www.ruanyifeng.com/blog/2016/01/flux.html
Flux 是一种架构思想，专门解决软件的结构问题。它跟MVC 架构是同一类东西
Flux存在多种实现（至少15种） https://github.com/voronianski/flux-comparison
Facebook官方实现
    Flux将一个应用分成四个部分。
        View： 视图层
        Action（动作）：视图层发出的消息（比如mouseClick）
        Dispatcher（派发器）：用来接收Actions、执行回调函数
        Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面
    Flux 的最大特点，就是数据的"单向流动"。
        view -> action -> dispatcher -> store


#Elm
是一门专注于Web前端的纯函数式语言。
    你可能没听说过它，但一定听说过Redux，而Redux的核心reducer就是受到了Elm的启发。
    vuex：我们有受到 Elm 启发的状态管理库

#vue-devtools
https://github.com/vuejs/vue-devtools
时光旅行调试 https://raw.githubusercontent.com/vuejs/vue-devtools/master/media/demo.gif

#vuex
我们有受到 Elm 启发的状态管理库
vuex 甚至集成到 vue-devtools，无需配置即可进行时光旅行调试。time-travel 调试、状态快照导入导出
专为 Vue.js 应用程序开发的状态管理模式
    采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
单向数据流的简洁性很容易被破坏：
    多个视图依赖于同一状态。
    来自不同视图的行为需要变更同一状态。
以一个全局单例模式管理
    组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！
    通过定义和隔离状态管理中的各种概念并强制遵守一定的规则
    这就是 Vuex 背后的基本思想，借鉴了 Flux、Redux 和 The Elm Architecture
Vuex课程 https://scrimba.com/g/gvuex
https://vuex.vuejs.org/vuex.png
Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在
从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：子组件能通过 this.$store 访问到
mapState 辅助函数帮助我们生成计算属性
```js
import { mapState } from 'vuex'
export default {
    computed: {
        localComputed () { },
        ...mapState({
            count: state => state.count,// 箭头函数可使代码更简练
            countAlias: 'count',// 传字符串参数 'count' 等同于 `state => state.count`
            countPlusLocalState (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                return state.count + this.localCount
            }
        }),
        ...mapState([
            'count' //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
        ])
    }
}
```
Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）
    Getter 接受 state 作为其第一个参数
    Getter 也可以接受其他 getter 作为第二个参数
    你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
    mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性.如mapState
改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation
    每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)回调函数就是我们实际进行状态更改的地方
    接受 state 作为第一个参数
    你不能直接调用一个 mutation handler。需要以相应的 type 调用 store.commit 方法 store.commit('increment')
    你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    一条重要的原则就是要记住 mutation 必须是同步函数。——实质上任何在回调函数中进行的状态的改变都是不可追踪的
    使用 mapMutations 辅助函数将组件中的 methods 映射
最好提前在你的 store 中初始化好所有所需属性。当需要在对象上添加新属性时，你应该
    使用 Vue.set(obj, 'newProp', 123), 或者
    以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写：
        state.obj = { ...state.obj, newProp: 123 }
使用常量替代 Mutation 事件类型
Action 类似于 mutation，不同在于：
    1 Action 提交的是 mutation，而不是直接变更状态。
    2 Action 可以包含任意异步操作。
    Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
    参数解构 来简化代码 
    Action 通过 store.dispatch 方法触发：
    Actions 支持同样的载荷方式和对象方式进行分发：
    使用 mapActions 辅助函数将组件的 methods 映射
    store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise。最后，如果我们利用 async / await
为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块
    ==由单一状态树又回到原来的结构？
    对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象
    对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
    对于模块内部的 getter，根节点状态会作为第三个参数暴露出来
    命名空间
        默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间
        可以通过添加 namespaced: true 的方式使其成为带命名空间的模块 getters['account/isAdmin']
        在带命名空间的模块内访问全局内容（Global Assets）
            如果你希望使用全局 state 和 getter，rootState 和 rootGetter 会作为第三和第四参数传入 getter，也会通过 context 对象的属性传入 action
            若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可
            若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中
            带命名空间的绑定函数 你可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文
            你可以通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
    在 store 创建之后，你可以使用 store.registerModule 方法注册模块
开启严格模式，仅需在创建 store 的时候传入 strict: true
    在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
双向绑定的计算属性
    computed.message.set/get



#chrome
chrome 页面截图

https://scrimba.com/

es6 https://babeljs.io/docs/learn-es2015/

https://lison16.github.io/iview-admin-doc/#/
https://github.com/lampo1024/DncZeus


# 2018.8.14
- js中的堆栈
  - 什么是堆、栈
    - 不是数据结构上的说法，是内存空间上的说法
      - 内存空间，是内存为用户程序分配的空间。有物理内存和虚拟内存
        - 物理内存就是内存的实际大小，虚拟内存就是程序运行的内存大小，可能大于物理内存，部分存于物理内存，部分存于其他介质如硬盘
        - 在JS中，每一个数据都需要一个内存空间。内存空间又被分为两种，栈内存(stock)与堆内存(heap)
    - 栈存放基本类型，按值访问，大小固定，系统分配，速度快
    - 堆存放引用类型，无序访问，大小不定，程序定义，速度慢
  - js的自动垃圾回收机制
    - 清除标记
    - 定时进行回收
    - 减少使用全局变量，因为回收机制难以判断
  - https://juejin.im/entry/589c29a9b123db16a3c18adf
- 浏览器关于线程和进程
  - 进程是操作系统分配资源的最小单位，线程是程序执行的最小单位。
  - 一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线；
  - 进程之间相互独立，但同一进程下的各个线程之间共享程序的内存空间(包括代码段、数据集、堆等)及一些进程级的资源(如打开文件和信号)。
  - 调度和切换：线程上下文切换比进程上下文切换要快得多。
  - 浏览器的多进程一般指不同的tab
    - 进程奔溃时候不影响其他，且隔离后具有数据安全性
  - 浏览器的多线程是指，渲染引擎、js引擎、定时器、事件、xhr等都是独立线程
    - 渲染引擎和js引擎互斥
    - 事件循环
- 实现继承
  - 继承是面向对象编程的概念之一
  - 形成父类/超类和子类的关系
  - 多重继承
  - 静态继承、动态继承
    - 多用合成mixin，少用继承
- 实现事件类
- js控制dom
- 算法，时间，复杂度
- qps
- 强缓存和协商缓存
- 虚拟dom的实现，数据绑定的原理
  - 虚拟dom
    - dom操作属于低开发效率和低运行效率的做法
      - 使用js来虚拟dom使之可编程，提高开发效率
      - 最小化dom操作，确保执行效率
    - 虚拟dom==js节点树，节点包含标签、属性、子节点
    - https://foio.github.io/virtual-dom/
- 代码执行顺序
  - 同步代码
  - async以及第一次await为同步代码，之后的await在异步队列里
  - promise的实例代码为同步，then和catch在异步队列里
  - 异步代码
    - promise
    - await
    - setTimeout
    - setImmediate

Command+Shift+. 可以显示隐藏文件、文件夹，再按一次，恢复隐藏；
finder下使用Command+Shift+G 可以前往任何文件夹，包括隐藏文件夹。

- 专业课
  - 大学英语
  - 高等数学
  - 线性代数
  - 概率论与数理统计
  - 程序设计语言
  - 数据结构
  - 离散数学
  - 现代操作系统
  - 编译原理和技术
  - 软件工程概论
  - 统一建模语言
  - 软件体系结构
  - 软件需求
  - 软件项目管理
  - 算法分析
  - 面向对象程序设计
  - 数据库原理与实现技术
  - 计算机安全


- new
- git合并merge、rebase
- webpack插件 
- w3c标准，语义化

# 2018.8.7

应用层
表示层
会话层
传输层
网络层
数据链路层
    帧frame
        数据组合成数据块
    数据链路无误差
物理层
    比特流
    介质
    物理线路传输误差

网络层还有几个比较重要的协议，ARP(Address Resolution Protocol地址解析协议)、ICMP(Internet Control Message Protocol报文控制协议)、IGMP(Internet Group Management Protocol组管理协议)

# 2018.7.31

一个事件函数的四部分
  取得事件对象的访问权，建议用事件委派／广播的方式获得，而不是直接绑定
  业务代码
  取消事件的传播
    W3C标准方法stopPropagation()
    IE属性cancelBubble=true
  如有需要，阻止默认操作，
    W3C标准方法preventDefault()
    IE方法returnValue=false

事件
设计模式
web Worker和postMessage
XMLHttpRequest
缓存

gzip
gzip能在压缩的基础上再进行压缩50%以上！！！
 gzip不压缩图片，因为压缩之后会更大- -，所以一般到是压缩css和js
 koa-compress
  因为node读取的是生成目录中的文件，所以要先用webpack等其他工具进行压缩成gzip
ETag
  If-None-Match
  一个可以与Web资源关联的记号（token）
  响应码为“304”的http响应

# 2018.8.27

衡量算法的重要指标
  时间复杂度，运行时长
  空间复杂度，内存占用

基本操作执行次数，T(n)，时间规模函数
渐进时间复杂度（asymptotic time complectiy）
  若存在函数f（n），使得当n趋近于无穷大时，T（n）/ f（n）的极限值为不等于零的常数，则称 f（n）是T（n）的同数量级函数。
  记作 T（n）= O（f（n）），称O（f（n））为算法的渐进时间复杂度，简称时间复杂度。
  渐进时间复杂度用大写O来表示，所以也被称为大O表示法。
  `时间复杂度就是吧时间规模函数简化成一个数量级表达式`，简化方式如下
    如果运行时间是常数量级，用常数1表示。
    只保留时间函数中的最高阶项
    如果最高阶项存在，则省去最高阶项前面的系数。

O（1）< O（logn）< O（n）< O（n^2）
O（nlogn）, O（n^3）, O（m*n），O（2^n），O（n！）
数据结构的时间复杂度
常见算法的时间复杂度
