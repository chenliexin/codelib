
# ECMA

- European Computer Manufactures Association 欧洲计算机制造联合会
- 研究信息和通讯技术方面的标准并发布有关技术报告
- 非盈利，非官方，由主流厂商组成
- 现名称已不属于首字母缩略字，Ecma国际（Ecma International）

# ECMA-262

- 标准化的脚本程序设计语言，ECMAScript
- JavaScript（网景Netscape，Navigator）和 JScript（微软，IE）是ECMA-262标准的实现和扩展
- TC39（Technical Committee 39），ECMA的第39号技术专家委员会，负责制订ECMAScript标准
  - ES1 1997
  - ES2 1998
  - ES3 1999
  - ES4 未完成，2004年ECMA-357，是ECMAScript的一个扩延，它也被称为E4X（ECMAScript for XML）
  - ES5 2009
  - ES2015/ES6 ...

# 标准的ECMAScript实现

- 必须提供并支持本规范描述的所有类型、值、对象、属性、函数、程序语法和语义
- 应当能解释Unicode3.0或以上，以 UCS-2 或 UTF-16 作为编码格式的 ISO/IEC 10646-1 第3级实现里的字符。如果没有额外指明采用的 ISO/IEC 10646-1 子集，则假定组号为300的 BMP 子集。如果没有额外指明采用的编码格式，则假定编码格式为 UTF-16
  - Unicode（统一码）是一项包括字符集、编码方案等的业界标准，为每种语言中的每个字符设定了统一并且唯一的二进制编码，跨语言、跨平台
  - UTF（Unicode Transformation FormatUnicode转换格式
  - 通用字符集（Universal Character Set，UCS），
- 允许提供超出本规范描述的额外类型、值、对象、属性、函数、程序语法和正则表达式语法

### RegExp

```js
/**
 * new RegExp(pattern);
 * new RegExp(string, attributes);
 * 
 * reg.source;
 * reg.global;     //g
 * reg.ignoreCase; //i
 * reg.multiline;  //m
 * reg.lastIndex;
 *
 * reg.compile(pattern);
 * reg.compile(string, attributes);
 * reg.test(string);
 * reg.exec(string);
 *
 * str.search(pattern);
 * str.match(pattern);
 * str.replace(pattern);
 * str.split(pattern);
 */

//reg.exec()
var str = 'string is 123456';
var reg = /s(.)/g;
while (res = reg.exec(str)) {
    console.log(res);
    //reg.lastIndex
    console.log(reg.lastIndex);
};

/**
 * 元字符
 * \w\W   单词字符[0-9a-Z_]
 * \d\D   数字
 * \s\S   空白字符
 * \b\B   单词边界
 * \n\r\t 换行|回车|制表
 * \uxxxx unicode字符
 * 
 * 零宽断言
 * (?=exp)  正向前瞻
 * (?!exp)  负向前瞻
 * (?<=exp) 正向后瞻js不支持
 * (?<!exp) 负向后瞻js不支持
 *
 * 暂存
 * RegExp.$_
 * RegExp.$1-9
 * RegExp.input
 * RegExp.lastMatch
 * RegExp.lastParen
 * RegExp.leftContext
 * RegExp.rightContext
 *
 * 非捕获 (?:exp)
 */
```


### Array

```js
/**
 * new Array(length);
 * new Array(item, item, ...);
 *
 * arr.length
 * arr.constructor
 * arr.prototype
 *
 * 方法
 * concat(array, array, ...)
 *     扁平化
 * arr.join(string)
 * arr.reverse()
 * arr.sort(function(item, item){})
 * 
 */

//arr.concat() 

```

#### join()

#### reverse()

#### sort()

得到一个使用比较函数排序的数组，比较函数接受两个参数，指代数组任意两个元素。返回值小于零则参数一在前，大于零则参数二在前，等于零则排序无关重要。


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

#### Array.of() [es6]

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


JSON.parse(string)
JSON.stringify(object)



## 未整理





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

仅在创建对象实例（实例化对象）的时候（可用new关键字或者字面量），才把对象（其实就是函数）称为构造函数或构造器。被创建的实例（其实就是对象，嗯，这里可以解释js里面全是对象）都有constructor属性，该属性指向实例化（说成构造更合适）该对象的构造函数或构造器。

那么，对象的constructor属性就是一个函数，函数都有prototype属性（不是函数就没有），这样说的话我们是可以用constructor.prototype来遍历出一条原型链直到改值为null。但是实际上这种方法只能获取到上一级原型，并陷入死循环，原因是拼接后会出现prototype.constructor（一个函数的prototype属性的构造器，就是函数本身）。所以这种拼接方式会存在问题，解决问题的关键在于既要保存constructor.prototype，又要在构成链的时候不出现prototype.constructor。

这里有两种方式，__proto__（es6之前非标准）和Object.getPrototypeOf(obj)，相当于一个不可拆分的constructor.prototype。

*当构造一个对象时，构造函数的原型属性就是这个被构造对象的原型，说白了就是复制了一份给这个对象，这个是和继承不同的。


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




## 内存管理

对象创建时，分配内存直到不再使用时自动释放（垃圾回收）。但不再使用是无法准确判定的，




Object.prototype.__proto__ 对象创建时都有内置属性__proto__用于指向创建它的函数对象的原型对象prototype







闭包（Closure）是词法闭包（Lexical Closure）的简称，是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。



