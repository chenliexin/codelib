
# let／const
- 块级作用域
- 不允许重复声明
- 不存在变量提升
- 全局变量不是全局对象的属性

## 解构赋值
```js
'usr strict';

//块级作用域 let取代var
//在let和const之间，建议优先使用const
//静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
const a = 'foobar';
const b = `foo${a}bar`;
//优先使用解构赋值 优先使用对象的解构赋值，而不是数组的解构赋值。
//对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
//使用扩展运算符（...）拷贝数组。
const itemsCopy = [...items];
```

# Class

```js
class New {
  // 默认
  // 没显式定义时 默认添加空constructor方法 返回实例对象即this
  constructor() {}
}
// 添加多个方法
Object.assign(New.prototype, {
  fn1() {},
  fn2() {}
})
// 方法不可枚举
Object.keys(Point.prototype)              //=> []
Object.getOwnPropertyNames(New.prototype) //=> ["constructor", "fn1", "fn2"]
```

- 通过new命令实例对象
- name属性等于类名
- 可使用表达式
  - 变量名指代该类
  - 类名只在类内部使用
  - 类名可以为空
  - 可以立即执行
- 不存在变量提升
- 类内部默认严格模式

继承
  extends
  super
    子类必须在constructor方法中调用super方法，因为子类没有this对象，需要继承父类的this对象
  set/get
  static 静态方法


## Set数据结构

类似于数组，但是成员的值都是唯一的，没有重复的值

Set本身是一个构造函数，用来生成Set数据结构 var items = new Set([1,2,3,4,5,5,5,5]);

向Set加入值的时候，不会发生类型转换

.size

.add(value)
  返回本身，不会扁平化数组

.delete(value)
  返回布尔值

.has(value)
  返回布尔值

.clear()
  无返回值

keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器

## WeakSet

WeakSet结构与Set类似，也是不重复的值的集合，WeakSet的成员只能是对象，而不能是其他类型的值。

WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用
  如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的

WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在WeakSet实例之中。

## Map

类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

size：返回成员总数。
set(key, value)：设置key所对应的键值，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。
get(key)：读取key对应的键值，如果找不到key，返回undefined。
has(key)：返回一个布尔值，表示某个键是否在Map数据结构中。
delete(key)：删除某个键，返回true。如果删除失败，返回false。
clear()：清除所有成员，没有返回值

keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器

## WeakMap

WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受原始类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。

## Iterator（遍历器）


数据结构的 Symbol.iterator 属性
“可遍历的”（iterable）



它是一种接口，为各种不同的数据结构（Array，Object，Set，Map）提供统一的访问机制。

一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

每一次调用next方法，都会返回当前成员的信息，具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环。使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。

默认的Iterator接口部署在数据结构的 Symbol.iterator 属性，或者一个数据结构只要具有Symbol.iterator 属性，就可以认为是“可遍历的”（iterable）。也就是说，调用 Symbol.iterator 方法，就会得到当前数据结构的默认遍历器。 Symbol.iterator 本身是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为Symbol的特殊值，所以要放在方括号内

arr[Symbol.iterator]();

一个对象如果要有可被for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历器方
法（原型链上的对象具有该方法也可）

调用默认Iterator接口的场合，解构赋值，扩展运算符，其他场合
  yield*
  Array.from()
  Map(), Set(), WeakMap(), WeakSet()
  Promise.all(), Promise.race()

Symbol.iterator 方法的最简单实现，还是使用下一章要介绍的Generator函数。

## for...of循环

一个数据结构只要部署了 Symbol.iterator 方法，就被视为具有iterator接口，就可以用for...of循环遍历它的成员

数组
Set和Map结构
计算生成的数据结构
  entries() 返回一个遍历器，用来遍历 [键名, 键值] 组成的数组。对于数组，键名就是索引值；对于Set，键名与键值相同。Map结构的iterator接口，默认就是调用entries方法。
  keys() 返回一个遍历器，用来遍历所有的键名。
  values() 返回一个遍历器，用来遍历所有的键值。
类似数组的对象
  字符串
  DOM NodeList对象 document.querySelectorAll("p");
  arguments对象
并不是所有类似数组的对象都具有iterator接口，一个简便的解决方法，就是使用Array.from方法将其转为数组

对于普通的对象，for...of结构不能直接使用，会报错，必须部署了iterator接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名

## Generator 函数

异步编程解决方案

一个函数的内部状态的遍历器（也就是说，Generator函数是一个状态机）。它每调用一次，就进入下一个内部状态。Generator函数可以控制内部状态的变化，依次遍历这些状态。

两个特征
  function命令与函数名之间有一个星号
  函数体内部使用yield语句，定义遍历器的每个成员，即不同的内部状态（yield语句在英语里的意思就是“产出”）

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
};
var hw = helloWorldGenerator();
```

调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

必须调用遍历器对象的next方法，使得指针移向下一个状态。直到遇到下一个yield语句（或return语句）为止。

next方法返回一个对象，它的value属性就是当前yield语句的值，done属性的值false，表示遍历还没有结束。

调用Generator函数，返回一个部署了Iterator接口的遍历器对象，用来操作内部指针。

yield语句不能用在普通函数中

yield语句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。

由于next方法的参数表示上一个yield语句的返回值，所以第一次使用next方法时，不能带有参数。

for...of循环可以自动遍历Generator函数，且此时不再需要调用next方法。

一旦next方法的返回对象的done属性为true，for...f循环就会中止，且不包含该返回对象

Generator函数还有一个特点，它可以在函数体外抛出错误，然后在函数体内捕获。用遍历器的throw方法抛出的，而不是用throw命令抛出的。

### yield*语句

如果yield命令后面跟的是一个遍历器，需要在yield命令后面加上星号，表明它返回的是一个遍历器。

yield*语句等同于在Generator函数内部，部署一个for...of循环。yield*不过是for...of的一种简写形式，完全可以用后者替代前者。

yield* 命令可以很方便地取出嵌套数组的所有成员。

作为对象属性的Generator函数 [Symbol.iterator]

### 应用

异步操作的同步化表达
  Generator函数的暂停执行的效果，意味着可以把异步操作写在yield语句里面，等到调用next方法时再往后执行。
控制流管理
  一般用callback
  也可以用promise
  generator和q库（promise）
部署iterator接口
作为数据结构


## Promise对象

就是一个对象，用来传递异步操作的消息。

var promise = new Promise(function(resolve, reject){ ... });
promise.then(function(){}, function(){});

两个特点
  对象的状态不受外界影响。有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
  一旦状态改变，就不会再变，任何时候都可以得到这个结果。

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve（即从Pending变为Resolved）和reject（即从Pending变为Rejected）。它们是两个函数，由JavaScript引擎提供，不用自己部署。

Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为Resolved时调用，第二个回调函数是Promise对象的状态变为Reject时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

Promise.prototype.catch方法是 .then(null, rejection) 的别名，用于指定发生错误时的回调函数

Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。Promise.all方法的参数不一定是数组，但是必须具有iterator接口，且返回的每个成员都是Promise实例。
  （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
  （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

Promise.race() 同样是将多个Promise实例，包装成一个新的Promise实例。
  只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。

Promise.resolve() 将现有对象转为Promise对象
  如果Promise.resolve方法的参数，不是具有then方法的对象（又称thenable对象），则返回一个新的Promise对象，且它的状态为Resolved。

Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected。Promise.reject方法的参数reason，会被传递给实例的回调函数。


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


Map类型
类
模块
  import取代require
  export取代module.exports

# 对象的扩展

直接写入属性、方法
属性名、方法名表达式
方法的name属性
set get

Object.is()用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
