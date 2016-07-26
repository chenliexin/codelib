
## less

npm i -g less 命令行lessc可用
npm i -g less-plugin-clean-css

sublime插件：高亮less，编译less2css（！这里的保存编译仅捕获ctrl+s，暂时无法和chrome打通）

## lessc

@import
    --include-path=PATHS
    --relative-urls

### 语法

变量 @color

作用域 类似js

混合（Mixins） .mix 相当于把一个类当作一个代码块，可以带参数。 多个参数可以使用分号或者逗号分隔，推荐使用分号分隔，数组用逗号


@arguments 变量 包含了所有传递进来的参数

高级参数用法与 @rest 变量 
    ... 不限制参数的数量 .mixin (...)
    .mixin (@a, @rest...)
    // @rest 表示 @a 之后的参数
    // @arguments 表示所有参数

!important关键字
    调用时在混合后面加上!important关键字表示将混合带来的所有属性标记为!important

模式匹配
.mixin (dark, @color) {
    color: darken(@color, 10%);
}
.mixin (light, @color) {
    color: lighten(@color, 10%);
}
.mixin (@_, @color) {
    display: block;
}

@switch: light;

.class {
    .mixin(@switch, #888);
}
第一个 .mixin 没有匹配，因为不满足 dark 条件；
第二个 .mixin 可以被匹配，因为它满足了 light 条件；
第三个 .mixin 也可以被匹配，因为它接受任何参数。

Guards