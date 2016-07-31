
## react

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




<script type="text/babel">
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


