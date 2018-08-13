# 选择器权重
- important，行内，id，class，tag，通配符，继承，默认
- 四位规则：行内，id，class/属性/伪类，tag/伪元素

## flex
- 容器
    - display
        - flex
        - inline-flex
    - flex-flow 排列方式
        - flex-direction 排列方向
            - row 水平
            - row-reverse 水平反向
            - column 竖直
            - column-reverse 竖直反向
        - flex-wrap
            - nowrap 单行
            - wrap 多行
            - wrap-reverse 多行反向
    - justify-content/align-content 水平位置、竖直位置
        - center 居中
        - flex-start 开端
        - flex-end 末端
        - space-between 两端靠边
        - space-around 平分
    - align-items 元素位置相对关系
        - center 居中
        - flex-start 开端
        - flex-end 末端
        - baseline 基线，和flex-start等效
        - stretch 拉伸？
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
