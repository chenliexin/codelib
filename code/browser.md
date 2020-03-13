  
# 渲染引擎
- 渲染过程4步：解析出`DOM`和`CSSOM`，合成渲染树`render tree`，布局`layout`渲染树转为布局流`flow`，绘制`paint`到屏幕
  - 渲染过程非严格按顺序执行
  - 布局和绘制，阻塞且耗费时间和资源
  - 重布局`reflow`和重绘`repaint`
    - 批量更新DOM和CSSOM
    - 动画使用absolute或fixed定位
    - 使用虚拟DOM`virtual DOM`
    - 使用`window.requestAnimationFrame()`
    - 使用`documentFragment`操作DOM
- 渲染引擎分类：chrome-`blink`，safari-`webkit`，firefox-`gecko`，ie-`trident`，edge-`edgeHTML`

# JS引擎
- 一般解释过程
  - 代码进行词法分析`lexical analysis`分解成词元`token`
  - 词元进行语法分析`parsing`生成抽象语法树`AST abstract syntax tree`
  - 抽象语法树转换为字节码`bytecode`
  - 字节码编译为机器码
- 即时编译`JIT just in time`字节码只在运行时编译，并使用內联缓存`inline caching`
  - JIT编译器`turbofan`
- v8引擎使用直接生成机器码，速度快但占内存
  - 最近推出字节码解释器`ignition`
- 单线程，通过事件循环`event loop`实现异步
  - 事件循环重复执行3步
    - 同步任务放入主进程
    - 异步任务放入任务队列
    - 直到主进程空闲时查看任务队列
  - 作用域链的实现
    - 函数运行时生成活动对象`AO active object`
    - 分析参数、变量、函数添加的AO
