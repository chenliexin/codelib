
函数式编程术语 functional-programing-jargon
编程范式 (paradigm)
  与面向对象编程（Object-oriented programming）和过程式编程（Procedural programming）并列
  强调将计算过程分解成可复用的函数，典型例子就是map方法和reduce方法组合而成 MapReduce 算法。
  只有纯的、没有副作用的函数，才是合格的函数。
  函数式编程的起源，是一门叫做范畴论（Category Theory）的数学分支。
  "范畴就是使用箭头连接的物体。"正式的名称叫做"态射"（morphism）。范畴论认为，同一个范畴的所有成员，就是不同状态的"变形"（transformation）。通过"态射"，一个成员可以变形成另一个成员。
  所有成员是一个集合
  变形关系是函数
  也就是说，范畴论是集合论更上层的抽象，简单的理解就是"集合 + 函数"。
  在函数式编程中，函数就是一个管道（pipe）。这头进去一个值，那头就会出来一个新的值，没有其他作用。
  函数式编程有两个最基本的运算：合成和柯里化。
  "函数的合成"（compose）
    如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数
  柯里化
    就是把一个多参数的函数，转化为单参数函数
  函子
    函数不仅可以用于同一个范畴之中值的转换，还可以用于将一个范畴转成另一个范畴。
    函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。
    比较特殊的是，它的变形关系可以依次作用于每一个值，将当前容器变形成另一个容器。
    一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。
    学习函数式编程，实际上就是学习函子的各种运算。
    of 方法
      函数式编程一般约定，函子有一个of方法，用来生成新的容器。

    ap 函子




Arity参数数量
  一个带有两个参数的函数被称为二元函数或者它的 arity 是2

高阶组件 (HOF)
  Higher-Order Function
  以函数为参数或/和返回值。

偏函数应用 (Partial Application)
  对原始函数预设参数作为一个新的函数。
  偏函数应用通过对复杂的函数填充一部分数据来构成一个简单的函数。柯里化通过偏函数实现。

柯里化 (Currying)
  将一个多元函数转变为一元函数的过程。 每当函数被调用时，它仅仅接收一个参数并且返回带有一个参数的函数，直到传递完所有的参数。

自动柯里化 (Auto Currying)
  lodash，understore 和 ramda 有 curry 函数可以自动完成柯里化。

函数组合 (Function Composition)
  接收多个函数作为参数，从右到左，一个函数的输入为另一个函数的输出。

Continuation
  在一个程序执行的任意时刻，尚未执行的代码称为 Continuation。
  Continuation 在异步编程中很常见

纯函数 (Purity)
  输出仅由输入决定，且不产生副作用。
  不依赖，不修改外部状态

副作用 (Side effects)
  如果函数与外部可变状态进行交互，则它是有副作用的。

幂等性 (Idempotent)
  如果一个函数执行多次皆返回相同的结果，则它是幂等性的。

Point-Free 风格 (Point-Free Style)
  定义函数时，不显式地指出函数所带参数。这种风格通常需要柯里化或者高阶函数。也叫 Tacit programming。

谓词 (Predicate) 、、断言
  根据输入返回 true 或 false

契约 (Contracts)
  契约保证了函数或者表达式在运行时的行为。当违反契约时，将抛出一个错误。

Guarded Functions
  、、

范畴 (Category)

值 (Value)
常量 (Constant)

函子 (Functor)
  一个实现了map 函数的对象
  一致性 (Preserves identity)
  组合性 (Composable)

Pointed Functor
  一个实现了 of 函数的对象。
Lift
  //

引用透明性 (Referential Transparency)
  一个表达式能够被它的值替代而不改变程序的行为成为引用透明。

Equational Reasoning
  //

匿名函数 (Lambda)
  匿名函数被视作一个值,匿名函数通常作为高阶函数的参数

Lambda Calculus
  数学的一个分支，使用函数创造 通过计算模型。。扯远了

惰性求值 (Lazy evaluation)
  按需求值机制，只有当需要计算所得值时才会计算。
  例子中使用了生成器函数实现

独异点 (Monoid)
  一个对象拥有一个函数用来连接相同类型的对象。
  例如数值的相加，数组的连接

Monad
  拥有 of 和 chain 函数的对象。chain 很像 map， 除了用来铺平嵌套数据。
  在有些语言中，of 也称为 return，chain 也称为 flatmap 与 bind。

Comonad
  拥有 extract 与 extend 函数的对象。

Applicative Functor
  一个拥有 ap 函数的对象。

态射 (Morphism)
  一个变形的函数。
  自同态 (Endomorphism)
    输入输出是相同类型的函数。
  同构 (Isomorphism)

Setoid
  拥有 equals 函数的对象。equals 可以用来和其它对象比较。

半群 (Semigroup)
  一个拥有 concat 函数的对象。concat 可以连接相同类型的两个对象。

Foldable
  一个拥有 reduce 函数的对象。reduce 可以把一种类型的对象转化为另一种类型。

Traversable
  、、

类型签名 (Type Signatures)
  通常 js 会在注释中指出参数与返回值的类型。
  如果函数的参数也是函数，那么这个函数需要用括号括起来。

Union type
  连接不同的数据类型。

Product type
  用一种你可能更熟悉的方式把数据类型联合起来

Option
  Option 是一种联合类型，它有两种情况，Some 或者 None。
  在其它的一些地方，Option 也称为 Maybe，Some 也称为 Just，None 也称为 Nothing。

函数式编程库
  mori
  Immutable
  Ramda
  Folktale
  monet.js
  lodash
  Underscore.js
  Lazy.js
  maryamyriameliamurphies.js
  Haskell in ES6
