# 选择器权重
- important，行内，id，class，tag，通配符，继承，默认
- 四位规则：行内，id，class/属性/伪类，tag/伪元素

# flex
- 容器
  - display：flex，inline-flex
  - flex-flow排列方式
    - flex-direction方向：row水平，row-reverse水平反向，column竖直，columu-reverse竖直反向
    - flex-wrap换行：nowrap单行，wrap多行，wrap-reverse多行反向
  - justify-content水平位置/align-content竖直位置：center居中，flex-start开端，flex-end末端，space-between两端靠边，space-around平分
  - align-items元素位置相对关系：center居中，flex-start开端，flex-end末端，baseline基线和flex-start等效，stretch拉伸？
- 元素
  - flex
    - flex-grow 扩展比率，即对剩余空间的利用
    - flex-shrink 收缩比率，即对缺失空间的补偿
    - flex-basis 伸缩基准值
    - flex: 1 => flex: 1 1 0%
  - order

## animate
- animate
  - name keyframesID
  - duration
  - timing-function
    - ease/ease-in/ease-out/ease-in-out
    - linear
    - step-start/step-end/steps(n, start|end)
    - cubic-bezier(x1, y1, x2, y2)
  - iteration-count infinite/n
  - direction normal/reverse/alternate/alternate-reverse
  - play-state running/paused
  - delay
  - fill-mode none/forwards/backwards/both
- keyframes
  - from/to
  - n%

## TODO
stylus
  官方开发的样式库 nib
css modules
postcss
BEM命名规范
  BEM的意思就是块（block）、元素（element）、修饰符（modifier）
  .block{}
  .block__element{}
  .block--modifier{}
