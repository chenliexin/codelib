

Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
属性名字和方法名字会冲突
svg

vue-cli
    stylus无法使用的问题

axios == ajax


模板语法
    数据绑定：文本、单行表达式、HTML、属性方法
    指令
    修饰符
    过滤器，用于文本格式化
        {{ message | capitalize }}
        <div v-bind:id="rawId | formatId"></div>
    缩写
        v-bind == :
        v-on == @




路由
    vue-router
        router-link
        router-view
        template
        component
        :id
        $route.params.id
        $route.query
        $route.hash
        watch: { '$route' (to, from){} }
        path-to-regexp
        children
        router.push(location)
        router.replace(location)
        router.go(n)
        name
        reditect
        alias
        router.beforeEach((to, from, next => {}))
        beforeRouteEnter
        beforeRouteUpdate
        beforeRouteLeave
        meta
        $route.matched
        transition
        scrollBahavior
        resolve => require(['/foo.vue'], resolve)
        keep-alive



reactivity system 响应式系统
    model只是普通js object，修改它则更新view
    model传给data选项，并被Object.defineProperty遍历转为getter/setter
    使用vue-devtools来打印数据
    组件实例都有watcher，当setter被调用时会通知watcher，进行更新
    model必须在实例化时候存在才能被响应，无法直接外部修改，对this无影响(通过this添加的还是可以响应的)
    不允许添加根级响应属性，外部添加属性可以用Vue.set(vm.someObject, 'b', 2)，或this.$set(this.someObject,'b',2)
    外部合并一些新属性时直接将新属性合并到对象是不会触发更新的，可以通过把对象和新属性合并到空对象，再赋值给对象，this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
    异步更新列队
        如果同一个 watcher 被多次触发，只会一次推入到队列中。列队采用原生的 Promise.then 和 MutationObserver（不兼容时候采用setTimeout(fn, 0)）
        完成DOM更新的钩子Vue.nextTick(callback)，或vm.$nextTick()

过渡效果
    transition组件 animation/transition, Animate.css
        entering/leaving过渡
            *-enter
            *-enter-active
            *-leave
            *-leave-active
        自定义过渡类名enter-class, enter-active-class以此类推
        type设置animation/transition
    javascript钩子 直接操作DOM, Velocity.js 
        v-on:[before-enter/leave, enter/leave, after-enter/leave, enter/leave-cancelled]
        在 enter 和 leave 中，回调函数 done() 是必须的leave: function (el, done) {    done() }
        推荐对于仅使用 JavaScript 过渡的元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响
    可以通过 appear 特性设置节点的在初始渲染的过渡
    当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。即使在技术上没有必要，给在 transition 组件中的多个元素设置 key 是一个更好的实践。
    Vue 提供了 过渡模式
        in-out, out-in
    transition-group 它会以一个真实元素呈现：默认为一个 span。你也可以通过 tag 特性更换为其他元素。内部元素 总是需要 提供唯一的 key 属性值
        *-move 改变位置，排序效果
        Vue 使用了一个叫 FLIP 简单的动画队列，元素不能设置为 display: inline 。作为替代方案，可以设置为 display: inline-block 或者放置于 flex 中
    过渡状态
        状态动画，watch，tween.js

render函数
    Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML，render比 template 更接近编译器。

```js


```