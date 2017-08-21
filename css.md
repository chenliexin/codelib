
less
scss sass
  「事实标准」库——Compass
stylus
  官方开发的样式库 nib
css modules
postcss

# stylus

### catalog

基本语法
选择器
变量、插值

### feature

基本
  可省略所有标点
  可用空格或括号排除歧义
  可用反斜杠
变量
  可用`$`作为标识符
  可直接引用内部变量
  可用`@`直接引用内部属性值
  可用`{}`插值或表达式
  可定义对象
  可定义块，直接换行定义或使用`@block{}`
选择器
  嵌套
  集合：`,` `return`
  父引用：`&`
  首引用：`~/`
  根引用：`/`
  相对引用：`../`
  局部引用：`^[N]`
  范围引用：`^[N..M]`
操作符（权重排序）
  `.`
  `[]`
  `!` `~`按位取反 `+` `-`
  `is defined`
  `**`指数 `*` `/` `%`
  `+` `-`
  `m...n`范围[m,n) `m..n`范围[m,n]
  `<=` `>=` `<` `>`
  `in`inArray
  `==` `is` `!=` `is not` `isnt`
  `is a`示例判断
  `&&` `and` `||` `or`
  `a?b:c`
  `=` `:=` `?=` `+=` `-=` `*=` `/=` `%=`
  `not`
  `if` `else if` `else` `unless`
混入和函数通过相同的方式定义，但是用法不同
  均可使用展开操作符`args...`
混入（返回完整的声明）
  可使用选择器引用
  可使用块引入`{block}/+foo()`
函数（返回值）
  可默认参数
  可使用命名空间`a:25`
  可使用`arguments`

内置函数
  色相/饱和度
  数组
  类型/单位
  数学
  字符串
  色值
  路径
  转化
  选择器

注释
  `//` `/* */` 不输出
  `/*! */` 输出

迭代器
  `for in`

引用
  `@import`
  `@require`

扩展（一个选择器）
  `@extend`

直接样式（用于不可解析的情况）
  `@css{}`

# postcss

PostCSS自身只包括css分析器，css节点树API，source map生成器以及css节点树拼接器。



## css

```css
{
    tab-size: 20px;
    table-layout: fixed; /* auto,fixed */
    text-shadow: 2px 2px 4px #fff;
}
```


## 竖直居中

### ie8+ 外宽高度固定

```xml
<div style="height: 400px; line-height: 400px;">
    <p style="display: inline-block; vertical-align: middle; line-height: 1.5;">content</p>
</div>
```


# BEM命名规范

BEM的意思就是块（block）、元素（element）、修饰符（modifier）
.block{}
.block__element{}
.block--modifier{}
