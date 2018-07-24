### CSS优先级
    important，行内，id，class，tag，通配符，继承，默认
    四位规则：行内，id，class/属性/伪类，tag/伪元素

### CSS中拥有宽高的行内元素
    不可替换元素，内容直接表现
    替换元素，根据标签和属性显示内容

3、webpack脚手架搭建涉及哪些环节
    使用vue-cli脚手架工具搭建vue-webpack项目
4、webpack模块引用的原理
    一切皆模块
    递归构建一个依赖关系图dependency graph
5、webpack会对哪些es6代码进行转换
    babel,高于es5的都会吧，

### es6常用的特性
    let/const，解构赋值，模板字符串，Promise对象，Class，Generator函数

### es6中let、const的区别
    let是常亮，const是变量
    块级作用域
    不可重复声明
    不存在变量提升
    全局变量不是全局对象的属性

8、zepto踩过的坑

### 项目中使用过的设计模式
    工厂模式：三甲医院、我司楼盘
    迭代器模式：医生出诊排班表
    装饰者模式：商品，百度地图打点
    策略模式：表单
    外观模式：兼容性封装
    观察者模式：浏览器事件

### Underscore采用什么设计模式
    立即执行函数的模式，采用了经典的构造器模式
    像jquery，返回一个对象，有一些列属性和方法
    实现链式调用，函数式

11、如何在一个函数内部扩展上下文指定的环境
12、call与apply的区别
    实际上，apply和call的功能是一样的，只是传入的参数列表形式不同。
    apply：最多只能有两个参数——新this对象和一个数组argArray。

13、vue的核心
    Vue.js是一个提供MVVM数据双向绑定的库，专注于UI层面，核心思想是：数据驱动、组件系统。
    数据驱动
        核心是VM，即ViewModel，保证数据和视图的一致性。
    组件系统
        应用类UI可以看作全部是由组件树构成的
    其他
        1 异步批量DOM更新：当大量数据变动时，所有受到影响的watcher会被推送到一个队列中，并且每个watcher只会推进队列一次。这个队列会在进程的下一个 tick异步执行。这个机制可以避免同一个数据多次变动产生的多余DOM操作，也可以保证所有的DOM写操作在一起执行，避免DOM读写切换可能导致的layout。
        2 动画系统：Vue.js提供了简单却强大的动画系统，当一个元素的可见性变化时，用户不仅可以很简单地定义对应的CSS Transition或Animation效果，还可以利用丰富的JavaScript钩子函数进行更底层的动画处理。
        3 可扩展性：除了自定义指令、过滤器和组件，Vue.js还提供了灵活的mixin机制，让用户可以在多个组件中复用共同的特性。

14、vue实现双向绑定的原理
    Vue.js数据观测原理在技术实现上，利用的是ES5 Object.defineProperty和存储器属性: getter和setter（所以只兼容IE9及以上版本），可称为基于依赖收集的观测机制。

15、vue或react实现虚拟Dom的原理
    保证最小化的DOM操作
    用JS表示DOM结构
        DOM很慢，而javascript很快，用javascript对象可以很容易地表示DOM节点。DOM节点包括标签、属性和子节点，通过VElement表示如下。
    比较两棵虚拟DOM树的差异
        在用JS对象表示DOM结构后，当页面状态发生变化而需要操作DOM时，我们可以先通过虚拟DOM计算出对真实DOM的最小修改量，然后再修改真实DOM结构(因为真实DOM的操作代价太大)。
        如何比较两个两棵DOM树
            DOM diff 节点的遍历顺序，深度优先遍历两棵树
        如何记录节点之间的差异
            修改节点属性, 用PROPS表示
            修改节点文本内容, 用TEXT表示
            替换原有节点, 用REPLACE表示
            调整子节点，包括移动、删除等，用REORDER表示
    对真实DOM进行最小化修改

16、如何设计一个公用插件(插件里面涉及多个Ajax调用)

17、setTimeout与setInterval的区别

18、fn()输出结果
var a = 1;
function fn() {
	alert(a);
	var a = 2;
}
fn();
变量提升仅在函数

19、输出结果
setTimeout(function() {console.log(1)}, 0);
while(true) {console.log(2)};
== 无数次2



主要问node.js


### 301、302的区别
    永久和临时的区别
    对用户无感知
    对搜索引擎有区分

### iframe的父子交互
    交互内容：dom操作，变量共享和方法调用，cookies和storage等
    交互方式：父子，子父，兄弟
    非跨域情况下
        父子，父通过iframeElement.contentWindow
        父子，父通过iframeName.window
        父子，父通过window.frames[0]
        子父，子通过parent.window
        子父，子通过top.window
        兄弟，通过父做桥接
    跨域情况下
        降域，通过修改document.domain为共有部分
        location.hash，通过修改hash和监听hashchange事件
        postMessage，通过iframe.contentWindow.postMessage方法和监听message事件

### 异步模式除了async和promise，还有其他方式吗
    Generator生成器函数

### 200和304的请求头有什么不同
    304只需要返回响应头，并不需要返回整个文件

### AMD，cmd怎么对模块进行管理的
    对于依赖的模块，AMD 是提前执行，CMD 是延迟执行
    CMD 推崇依赖就近，AMD 推崇依赖前置

postcss的作用
postcss能否解决样式值存在小数点而导致的问题
postcss加深了解
    css后处理器，Autoprefixer，css 

### 对插入dom有没办法监听
    MutationObserver，目前IE11+及其它浏览器最新版本都已支持
    在这之前 DOM3 提供了 Mutation events 事件
        DOMAttrModified
        DOMAttributeNameChanged
        DOMCharacterDataModified
        DOMElementNameChanged
        DOMNodeInserted
        DOMNodeInsertedIntoDocument
        DOMNodeRemoved
        DOMNodeRemovedFromDocument
        DOMSubtreeModified
        可以监听到属性、文本内容、节点插入删除、子节点变化等事件。可是该事件 W3C 已废弃，虽然一些浏览器仍然支持，但不建议使用。

### xmlhttprequest，用二进制的方式是怎样的
    设置一个XMLHttpRequest对象的responseType属性来改变一个从服务器上返回的响应的数据类型
    可用的属性值为空字符串 (默认), "arraybuffer", "blob", "document", 和 "text"

12.Vue如何发起emit事件
    vm.$emit( event, arg ) //触发当前实例上的事件
    vm.$on( event, fn );//监听event事件后运行 fn；

14.webpack如何提高打包速度
    分出开发和线上的两套配置
    有些模块是可以以模块化来引入的，就是说可以只引入其中的一部分，比如说lodash
    配置 resolve，alias
    设置 test & include & exclude
    配置devtool可以支持使用sourceMap，但有些是耗时严重的
    使用noParse ，有时不需要解析某些模块的依赖（这些模块并没有依赖，或者并根本就没有模块化），我们可以直接加上这个参数，直接跳过这种解析
    Happypack 的处理思路是：将原有的 webpack 对 loader 的执行过程，从单一进程的形式扩展多进程模式，从而加速代码构建

15.网络攻击
    XSS
    CSRF/XSRF

17.webpack有哪些新特性
    mode 属性
    webpack4删除了CommonsChunkPlugin插件，它使用内置API optimization.splitChunks 和 optimization.runtimeChunk ，这意味着webpack会默认为你生成共享的代码块。

18.router的装载器是怎样的

19.vuex有哪些东西

20.vue异步加载的模块，加载完后，如何通知其他模块它已经加载完成
    在生命周期里面触发emit

21.自定义事件的监听有什么性能方面的问题
    如果我们为大量按钮添加匿名函数事件处理程序，首先这些匿名函数都是对象是占用空间的，其次这些添加事件处理程序的操作也会延迟整个页面的交互就绪时间。
    DOM3 级还定义了“自定义事件”。自定义事件不是由DOM 原生触发的，它的目的是让开发人员创建自己的事件。要创建新的自定义事件，可以调用createEvent(“CustomEvent”)。返回的对象有一个名为initCustomEvent()的方法，接收如下4 个参数：
        type（字符串）：触发的事件类型，例如”keydown”。
        bubbles
        cancelable
        detail（对象）：任意值，保存在event 对象的detail 属性中。

22.webpack如何将单文件处理的最小
    去除不必要的插件
    提取第三方库
    代码压缩，代码分割
    去掉开发环境下的配置
        sourceMap
        注释
    提取样式到css文件
    压缩图片
    异步加载的模块


### es6的三个点的使用方式
    扩展运算符
        解构赋值和解构参数
        复制数组
        合并数组



函数式
underscore和lodash
