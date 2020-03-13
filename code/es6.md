# let/const
- 块级作用域
- 不允许重复声明
- 不存在变量提升
- 全局变量不是全局对象的属性

# 解构赋值

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
- 继承 extends
  - 子类必须在constructor方法中调用super方法，因为子类没有this对象，需要继承父类的this对象
  - static 静态方法


# Set/WeakSet
- 类似于数组，但是成员的值都是唯一的，没有重复的值
- 常用方法：size、add、delete、has、clear
- WeakSet结构与Set类似，成员只能是对象
  - WeakSet中的对象都是弱引用
  - WeakSet是不可遍历的

# Map/WeakMap
- 类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值（包括对象）都可以当作键
- 常用方法：size、set、get、has、delete、clear
- WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受原始类型的值作为键名

# Iterator遍历器
- 它是一种接口，为各种不同的数据结构（Array，Object，Set，Map）提供统一的访问机制

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

# 箭头函数
与一般的函数不同，箭头函数与包裹它的代码共享相同的this对象，如果箭头函数在其他函数的内部，它也将共享该函数的arguments变量。


## ES6 module

此前，js没module体系，大程序无法拆分成互相依赖的小文件
  社区方案：commonjs用于服务端，amd，umd等用于客户端
  es6 module 将成为浏览器和服务器通用的模块解决方案

es6模块要成为

import
export

```js
let fn1 = () => {};
let fn2 = () => {};
export {
  fn1,
  fn2 as newNameForFn2,
  fn2 as newNameCanExportFn2Again
}
```


## decorator

装饰器，改变类行为，是代码编译时发生的，而不是在运行时。

修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。类是不会提升的

