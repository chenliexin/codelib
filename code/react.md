
## react
###组合 vs 继承
React 有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用
    使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中（相当于vue slot）
    如果需要传多个组合，可以直接使用prop来传
    方法可能使你想起别的库中“槽”（slot）的概念，但在 React 中没有“槽”这一概念的限制，你可以将任何东西作为 props 进行传递
    复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们
###react哲学
React 是用 JavaScript 构建快速响应的大型 Web 应用程序的首选方式
React 最棒的部分之一是引导我们思考如何构建一个应用
第一步：将设计好的 UI 划分为组件层级
    划分组件/子组件，并命名
        将组件当作一种函数或者是对象来考虑
        根据单一功能原则来判定组件的范围
        如果划分恰当，UI（或者说组件结构）便会与数据模型
第二步：用 React 创建一个静态版本
    先用已有的数据模型渲染一个不包含交互功能的 UI
        最好将渲染 UI 和添加交互这两个过程分开
            编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码
        然后通过 props 传入所需的数据。完全不应该使用 state 构建静态版本
            state 代表了随时间会产生变化的数据，应当仅在实现交互时使用
        当你的应用比较简单时，使用自上而下的方式更方便
        较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式
    React 单向数据流（也叫单向绑定）的思想使得组件模块化，易于快速开发
        数据模型变化、调用 render() 方法、UI 相应变化，这个过程并不复杂，因此很容易看清楚 UI 是如何被更新的，以及是在哪里被更新的
第三步：确定 UI state 的最小（且完整）表示
    想要使你的 UI 具备交互功能，需要有触发基础数据模型改变的能力。React 通过实现 state 来完成这个任务
    为了正确地构建应用，你首先需要找出应用所需的 state 的最小表示，并根据需要计算出其他所有数据
    通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：
        该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
        该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
        你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。
第四步：确定 state 放置的位置
    找到最近的共同父组件
第五步：添加反向数据流
    react 通过一种比传统的双向绑定略微繁琐的方法来实现反向数据传递
        这种需要显式声明的方法更有助于人们理解程序的运作方式


### 简介

状态机：更新dom，响应事件
近似于mvc中的v
虚拟dom，差异渲染（最小化重绘，避免不必要dom操作）

### jsx

非dom属性：key, ref, dengerouslySetInnerHTML
 class 属性需要写成 className ，for 属性需要写成 htmlFor
样式 驼峰形式

### component


## 生命周期

创建时
    getDefaultProps
实例化
    getInitialState
    componentWillMount
    render
    componentDidMount
存在期
    componentWillReceiveProps(object nextProps)
    shouldComponentUpdate;
    componentWillUpdate(object nextProps, object nextState)
    render
    componentDidUpdate(object prevProps, object prevState)
销毁
    componentWillUnmount

嵌套组件时候，生命周期事件将根据render进行递归遍历





## 数据

单向 父节点->子节点 = 递归向下遍历

组件无法内部修改props，可以内部修改state

*数据源
props
    挂载时设置
    setProps方法（少用） ！== 只能在子组件或组件外调用
        不赞成使用 -> 通过重挂载的方法

    propTypes props的验证方法集
        React.PropTypes
        ** 非必要，但这是一种极好的方式来描述组件

*状态机
state
    只存在于组件内部
    setState方法 = 调用后render也会被调用


## 动画

react 的 transitionGroup 插件配合 css3

css渐变组（css Transition Group）
    在合适时候改变class -> 唯一要做的是通过class写动画样式

react-addons-css-transition-group
    transitionName="example"

    transitionEnterTimeout={5000} 这里是class的存在时长，而不是动画时长，动画时长在-enner-active控制，初状态在-enter
        .example-enter
        .example-enter.example-enter-active
    transitionLeaveTimeout={3000}
        .example-leave
        .example-leave.example-leave-active
    上面两必须出现，否则报错
    transitionAppear={true}
    transitionAppearTimeout={1000}
        .example-appear
        .example-appear.example-appear-active
    上面两要同时出现

    制定类 == 修改默认class
    transitionName={ {
      enter: 'enter',
      enterActive: 'enterActive',
      leave: 'leave',
      leaveActive: 'leaveActive',
      appear: 'appear',
      appearActive: 'appearActive'
    } }

    禁用动画
    transitionEnter={false}
    transitionLeave={false}

    被渲染的组件，默认span
    component="ul" className="animated-list"
    component={Conpanent} *减少一层嵌套，建议使用



# 优化

DOM diff == 最小程度修改dom

shouldComponentUpdate
    return boolean
    初次渲染时不被调用
    参数 newProps newState

静态组件
react-addons-pure-render-mixin
    mixin插件 重写shouldComponentUpdate 返回false
    使用 mixins: [PureRenderMixin]
    和shouldComponentUpdate共用时会报错

不可变数据的辅助插件
    当修改数据时候，之前的数据就会被覆盖掉，如果使用深拷贝的方法则性能开销大，如果只拷贝需要修改的数据则代码逻辑复杂
    react-addons-update 生成一份更新后数据的语法糖
        参数 原始数据 配置对象
            配置对象：$slice, $push, $unshift, $set, $merge, $apply
            {$set: any}
            {$push: array}
            {$unshift: array}
            {$splice: array of arrays}
            {$merge: object}
            {$apply: function}


性能分析
    react-addons-perf
    .start() 开始采集
    .stop() 停止采集，停止后才能输出
    .printWasted() 浪费开销**有用
    .printInclusive() 总开销
    .printExclusive() 独占开销，即每个环节开销

键碎片Keyed Fragments 用于避免卸载组件而造成的额外性能开销，如排序
    react-addons-create-fragment
        var children = createFragment({
            right: this.props.rightChildren,
            left: this.props.leftChildren
        });
        return <div>{children}</div>;
        在保持key的唯一性情况下，对配置进行重排序可以避免直接卸载子组件
        未来写法（v15.2.1）
            <x:frag key="right">{this.props.rightChildren}</x:frag>,
            <x:frag key="left">{this.props.leftChildren}</x:frag>

## 服务端渲染



    





render
    更新props
    更新state
    forceUpdate

?? props 如何更新
?? props/state 可以继承么

    
代码片段
    var




<!-- <script type="text/babel"> -->
JSX 语法 HTML 标签（以 < 开头） 代码块（以 { 开头）

react.js React 的核心库
react-dom.js 提供与 DOM 相关的功能
Browser.js将 JSX 语法转为 JavaScript 语法 




组件 React.createClass this.props
    输出 ReactDOM.render
    第一个字母必须大写
    输出 包含一个顶层标签
    this.props.children 表示组件的所有子节点
        值有三种可能：undefined ; object ； array 。React.Children

    PropTypes属性
        组件.propTypes = this.props
        React.PropTypes
        getDefaultProps 方法可以用来设置组件属性的默认值

组件 = 虚拟 DOM （virtual DOM） -> 插入文档 真实的 DOM ===  DOM diff

ref 属性 从组件获取真实 DOM 的节点
    <input type="text" ref="myTextInput" /> this.refs.myTextInput.focus();

状态机 this.state
    getInitialState 方法用于定义初始状态
    this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件

表单
    event.target.value
数据来源Ajax
    componentDidMount + this.setState
    componentDidMount + Promise

jsx编译 react-tools




