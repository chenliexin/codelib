

## Array

#### join()

#### reverse()

#### sort()

得到一个使用比较函数排序的数组，比较函数接受两个参数，指代数组任意两个元素。返回值小于零则参数一在前，大于零则参数二在前，等于零则排序无关重要。

#### concat()

返回一个连接所有参数的数组，参数如果是数组则连接其元素，但不递归扁平化数组参数，只连接数组参数第一层元素。

#### slice()

返回一个剪切到的数组，接受两个参数，即起始位置和结束位置。片段从起始位置开始到结束位置前，如果没有结束位置则到数组结尾。负值位置参数则表示倒数第几个，偏离索引的位置返回空数组。

Array.prototyp.slice.call(object)可把类数组对象转化为数组。

#### splice()

得到一个剩余并连接的数组，并返回一个剪切到的数组。前两个参数分别为起始位置和剪切个数，如果不指定剪切个数则剪切至数组结束。后面的参数为需要连接的元素，不扁平化数组参数。

#### push() pop()

#### unshift() shift()

#### toString() toLocalString()

#### forEach()

使用函数遍历数组，函数接受三个参数，分别为数组元素、数组索引、数组本身。无法提前终止遍历，除非抛出foreach.break异常来终止遍历。

#### map()

返回一个使用函数遍历后的数组，函数接受三个参数，分别为数组元素、数组索引、数组本身。

#### filter()

返回一个使用判断函数遍历后的数组，判断函数返回true的元素将被保留。函数接受三个参数，分别为数组元素、数组索引、数组本身。

#### every()

返回一个使用判断函数遍历后的布尔值，如果遍历过程中所有判断函数都返回true，则结果返回true。函数接受三个参数，分别为数组元素、数组索引、数组本身。

#### some()

返回一个使用判断函数遍历后的布尔值，如果遍历过程中有一个判断函数返回true，则结果返回true。函数接受三个参数，分别为数组元素、数组索引、数组本身。

#### reduce() reduceRight()

返回一个使用简化函数遍历后的值，简化函数接受两个参数，参数一是简化函数的返回值或简化函数后面的初始值，参数二是数组元素。如果没有初始值，则第一个元素作为起始值，并从第二个元素开始遍历。

#### indexOf() lastIndexOf()

#### Array.from() [es6]

返回一个由类数组对象或可遍历对象转化的数组，参数一是被转化对象，参数二是处理函数。函数接受三个参数，分别为数组元素、数组索引、数组本身。

#### Array.fo() [es6]

返回一个由一组参数转化的数组。

#### find() findIndex() [es6]

返回一个当处理函数返回值为true的元素/索引，如果处理函数没有返回true，则本函数返回undefined。处理函数接受三个参数，分别为数组元素、数组索引、数组本身。该函数参数二可以指定处理函数的this对象。

#### fill() [es6]

得到一个使用给定值填充一个数组。参数二用于指定起始位置，参数三用于指定结束位置。

#### entries() keys() values() [es6]

返回一个值为键值对/索引/元素的遍历器。

#### includes() [es7]

返回一个布尔值，表示某个数组是否包含给定的值。

#### Array.observe()，Array.unobserve() [es7]

这两个方法用于监听（取消监听）数组的变化，指定回调函数。

:: line

script标签中，defer属性使得浏览器延迟脚本的执行直到文档载入和解析完成，async属性使得浏览器可以尽快执行脚本而不阻塞文档解析。async属性优先于defer属性。


时间线
- 创建Document对象，解析HTML并添加ELement对象和Text节点，document.readystate = 'loading'
- 解析HTML过程中，遇到script（非async、非defer）时下载执行并暂停解析器
- 解析HTML过程中，遇到script（async）时下载但不暂停解析器，并在下载完成后尽快执行
- 解析HTML完成，document.readystate = 'interactive'
- script（defer）在此时按出现顺序执行（仍可能有异步脚本未执行）
- 同步脚本执行完毕，Document对象触发DOMContentLoaded事件（仍可能有异步脚本未执行）
- 异步事件执行完毕（可能还有其他如图片未完全载入），document.readystate = 'complete'，并Window对象触发load事件






闭包（Closure）

闭包是一种函数，带私有变量的函数。*私有变量会一直存在于内存中，因此会有内存泄露隐患。

作用域（Scope）

有全局作用域（Global Scope）和局部作用域（Local Scope）　

作用域链（Scope Chain）

作用域链是一种标识符解析方式，在目标作用域执行时，创建一个运行期上下文(execution context)内部对象，该对象从全局作用域到目标作用域覆盖解析标识符，该对象会在目标作用域执行完毕时销毁。

原型链（prototype chain）

原型链是一种原型指向方式，每个对象都有一个指向它的原型（prototype）对象的内部链接。这个原型对象又有自己的原型，直到某个对象的原型为 null 为止（也就是不再有原型指向）。

构造器（constructor）

构造器是一种对象内部属性。所有对象都具有该属性。由于可被写入（基本类型字面量除外），该属性其实没什么用处。

对象的constructor属性 === 该对象的构造函数

```js
var Constructor = [
    Number,
    Boolean,
    String,
    Object,
    Function,
    Array,
    Date,
    RegExp,
    Error,
    Math, // 对象形式存在的，无需new
    JSON, // 对象形式存在的，无需new
    Global, // 不能直接访问
    Arguments // 仅在函数调用时由JS引擎创建
];
```

仅在创建对象实例（实例化对象）的时候（可用new关键字或者字面量），才把对象（其实就是函数）称为构造函数或构造器。被创建的实例（其实就是对象，嗯，这里可以解释js里面全是对象）都有constructor属性，该属性指向实例化（说成构造更合适）该对象的构造函数或构造器。

那么，对象的constructor属性就是一个函数，函数都有prototype属性（不是函数就没有），这样说的话我们是可以用constructor.prototype来遍历出一条原型链直到改值为null。但是实际上这种方法只能获取到上一级原型，并陷入死循环，原因是拼接后会出现prototype.constructor（一个函数的prototype属性的构造器，就是函数本身）。所以这种拼接方式会存在问题，解决问题的关键在于既要保存constructor.prototype，又要在构成链的时候不出现prototype.constructor。

这里有两种方式，__proto__（es6之前非标准）和Object.getPrototypeOf(obj)，相当于一个不可拆分的constructor.prototype。

*当构造一个对象时，构造函数的原型属性就是这个被构造对象的原型，说白了就是复制了一份给这个对象，这个是和继承不同的。

```js
var a = function(){};
a.prototype.name = 'a';

var b = new a();

console.log(b.constructor.prototype);
console.log(b.__proto__);
console.log(Object.getPrototypeOf(b));

console.log(b.constructor.prototype === b.__proto__);
console.log(b.__proto__ === Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(b) === b.constructor.prototype);

console.log(b.constructor.prototype.constructor.prototype);
console.log(b.__proto__.__proto__);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(b)));

console.log(b.constructor.prototype.constructor.prototype === b.__proto__.__proto__);
console.log(b.__proto__.__proto__ === Object.getPrototypeOf(Object.getPrototypeOf(b)));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(b)) === b.constructor.prototype.constructor.prototype);

function prototype_chain(o){
    var pc = Object.getPrototypeOf(o); 
    console.log(pc);
    if(pc !== null){
        prototype_chain(pc);
    };
}
//prototype_chain(a1);

```

面向对象：抽象、继承、封装、多态

抽象的结果就是类或接口，包括数据抽象、过程抽象。

继承是一种联结类的层次模型，通过派生实现继承，这是类与类之间的关系。

封装隐藏了类的内部实现机制，从而可以在不影响使用者的前提下改变类的内部结构，同时保护了数据。

多态是指允许不同类的对象对同一消息作出响应。包括强制转换、重载、参数等。

this，是一个指向调用该函数的对象的关键字。apply和call可以改变这种指向，两者的第一个参数为传入的对象（留空则为Global），不同之处在于apply第二个参数是数组作为调用函数的参数，而call则是将第一个参数后的参数作为调用函数的参数。

继承的方式：

this（可以实现多继承）

```js
function Parent(){
    this.firstname = 'abc';
}
function Child(){
    this.parent = Parent;
    this.parent();
    delete this.parent();
    this.lastname = 'efg';
};
var mychild = new Child();
console.log(mychild.firstname + '-' + mychild.lastname);
```

call/apply（不能继承原型链）

```js
function Parent(){
    this.firstname = 'abc';
}
function Child(){
    this.lastname = 'efg';
};
var mychild = {};
Parent.apply(mychild);
Child.apply(mychild);
console.log(mychild.firstname + '-' + mychild.lastname);
```

prototype（不能直接实现多继承）

```js
function Parent(){
    this.firstname = 'abc';
}
function Child(){
    this.lastname = 'efg';
};
Child.prototype = new Parent();
var mychild = new Child();
console.log(mychild.firstname + '-' + mychild.lastname);
```

bind

caller返回调用指定函数的函数，arguments.callee属性包含当前正在执行的函数。


postMessage


## 内存管理

对象创建时，分配内存直到不再使用时自动释放（垃圾回收）。但不再使用是无法准确判定的，



## 严格模式 'use strict'







## 全局属性

- Infinity
- NaN
- undefined
- null

## 全局方法

- eval()
- isFinite()
- isNaN()
- parseFloat()
- parseInt()
- decodeURI()
- decodeURIComponent()
- encodeURI()
- encodeURIComponent()

## 数字和日期

- Number
- Math
- Date

### Number












## Object

```js
Object.length;
Object.prototype;
Object.assign(target, ...sources);
Object.freeze(obj);
Object.prototype.hasOwnProperty(prop);
```



Object.prototype.__proto__ 对象创建时都有内置属性__proto__用于指向创建它的函数对象的原型对象prototype







闭包（Closure）是词法闭包（Lexical Closure）的简称，是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。









## 词法

### 字符集

`unicode转义序列` 前缀加4个十六进制数（unicode内码），可用于字符串直接量、正则直接量、标识符。任何信息最终都会转化为 `二进制编码` ，unicode 是首选的编码方式

```js
'é';       // "é"
'\u00e9';  // "é"
'e\u0301'; // "é"

'é' === '\u00e9';       // true
'é' === 'e\u0301';      // false
'\u00e9' === 'e\u0301'; // false
```

### 注释

### 直接量

### 标识符 保留字

## 数据

### 数据类型

`原始类型 primitive type` 即 undefined、null、boolean、number 和 string， `引用类型 reference type` 原始类型以为的数据

通过 `typeof` 运算共有六种返回值

```js
typeof undefined; // undefined
typeof null; // undefined
typeof true; // boolean
typeof 1; // number
typeof Infinity; // number
typeof Number.MIN_VALUE; // number
typeof NaN; // number
typeof ''; // string
typeof []; // object
typeof {}; // object
```

`内置对象`

```js
typeof String
"function"
typeof String()
"string"
typeof new String()
"object"
typeof new Math()
VM602:1 Uncaught TypeError: Math is not a constructor(…)(anonymous function) @ VM602:1InjectedScript._evaluateOn @ VM68:145InjectedScript._evaluateAndWrap @ VM68:137InjectedScript.evaluate @ VM68:118
typeof Math()
VM603:1 Uncaught TypeError: Math is not a function(…)(anonymous function) @ VM603:1InjectedScript._evaluateOn @ VM68:145InjectedScript._evaluateAndWrap @ VM68:137InjectedScript.evaluate @ VM68:118
typeof Math
"object"
typeof Date
"function"
typeof Date()
"string"
typeof new Date()
"object"
typeof new Array()
"object"
typeof Array()
"object"
typeof Array
"function"
typeof RegExp
"function"
typeof RegExp()
"object"
typeof new RegExp()
"object"
typeof new Error()
"object"
typeof Error()
"object"
typeof Error
"function"
```


### number

不区分整数和浮点数，所有数字均用浮点数表示。采用 `IEEE 745` 标准定义 `64位浮点数` 表示数字，但实际操作是基于 `32位整数` ，例如数组索引。`IEEE 745` 是一种二进制表示法，可以精确表示分数1/2、1/1024，但无法精确表示0.1这样的简单数字。

`十六进制` 以 `0x` 或 `0X` 为前缀， `八进制` 以 `0` 为前缀。

`指数计数法` 在实数后跟字母 `e` 或 `E` ，再跟一个正负整型的指数。



```js
typeof Number;       // "function"
typeof Number();     // "number"
typeof new Number(); // "object"

Number();        // 0
Number('1');     // 1
Number('a');     // NaN
new Number();    // Number {[[PrimitiveValue]]: 0}
new Number('1'); // Number {[[PrimitiveValue]]: 1}
new Number('a'); // Number {[[PrimitiveValue]]: NaN}

Number.EPSILON;
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;
Number.MIN_VALUE;
Number.MAX_VALUE;
Number.NaN;
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;


Math
```

算术运算在溢出（overflow）、下溢（underflow）、被零整除时不会报错。

```js
Number.MAX_VALUE + Number.MAX_VALUE; // Infinity 溢出
Number.MAX_VALUE + 1;                // 1.7976931348623157e+308 没有溢出因为数值已经失真
Number.MIN_VALUE * .5;               // 0 下溢
1/0;                                 // Infinity
0/0;                                 // NaN
Infinity/Infinity;                   // NaN
```




```js
NaN === NaN
false
Infinity === Infinity
true
isNaN(1)
false
isNaN(NaN)
true
isFinite(Infinity)
false
isFinite(1)
true
0===-0
true
-Infinity===Infinity
false
```


### date


### 严格模式

- 禁止使用八进制直接量



