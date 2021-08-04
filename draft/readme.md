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



ES 模块

webmail技术升级
升级路线：一次性全面升级还是渐进式的
1、打包体系
2、框架、es
3、模块管理
4、更新迭代方式
5、单测、覆盖率测试等
6、调试环境，本地调试、冗余代码

framease，通讯录设置里面做，微前端，@整合
开发流程的优化，后续探讨
interface的ts话
svn，git，git changelog的patch文件，生成补丁，@链路
react，es

年后，方案过审

业内的对比。

自己今年
  邮件第一年、负责和webmail，及其相关的业务，国际化
  广告后台，plus
  项目的推进
  有些落地尝试，sw

  React Hooks
  单测
  客户端化，桌面化
  往飞冰的例子靠拢，统一底层后的物料化
  无头浏览器

明年
  webmail升级
  vip业务
  基础工具和服务
  项目

  微软开源，学习，测试代码覆盖。@调研
  从ui中抽离helper函数

Q4
ES 模块

- 如果单纯使用storage的话，域名变化后，数据难以找回
  - 找一个网站同步数据
  - 定期把数据同步到本地 == 选用这种放方式会比较好

- 完整的列表
- 更新机制
- 资源缓存

有多种类型的子应用
  - 原生应用
  - 基于mvvm框架
  - 无界面（如把ics功能单独出来、或我pwa做成一个可接入的应用使其工作）

在webmail中
  - 现有框架和功能集
  - 【add】容器
    - 有一份接入配置清单
      - 应用名 = 用于framease管理
      - 应用类型
      - 接入资源清单

后台项目整合，最简便的方式便是通过一个以openid


https://www.html.cn/create-react-app/docs/adding-typescript/




globalThis
标准方法用来获取全局 this,浏览器 window，Web Workers 和浏览器，nodejs中的 global 

BigInt
Math 只能安全的表示-(2^53-1)至 2^53-1 范的值 即Number.MIN_SAFE_INTEGER 至Number.MAX_SAFE_INTEGER
  - 超出无法计算
  - 超出值比较为true
第7个原始类型，可安全地进行大数整型计算
```js
const aBigInt = BigInt(aNumber);
aBigInt === 111n;

typeof aBigInt === 'bigint' // true
typeof 111n // "bigint"

// 只要在数字末尾加上 n，就可以正确计算大数了
9007199254740992n + 1n
```

Dynamic import
```js
import('/modules/my-module.js')
.then(module => {
  // Do something with the module.
})
.catch(err => {
  // load error;
})

let module = await import('/modules/my-module.js');
```

String.prototype.matchAll
返回RegExpStringIterator，可用于例如for of

Promise.allSettled
Promise.allSettled跟Promise.all类似, 其参数接受一个Promise的数组, 返回一个新的Promise, 唯一的不同在于, 它不会进行短路, 也就是说当Promise全部处理完成后,我们可以拿到每个Promise的状态, 而不管是否处理成功。

空位合并操作符（Nullish coalescing Operator）
如果表达式在??的左侧运算符求值为 undefined 或 null，就返回其右侧默认值
```js
let c = a ?? b;
// 等价于let c = a !== undefined && a !== null ? a : b;
```

可选链操作符（Optional Chaining）
```js
let nestedProp = obj?.first?.second;
//等价于
let nestedProp = obj && obj.first && obj.first.second;
```

