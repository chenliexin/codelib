# JavaScript

- history
    - 1995 Netscape LiveScript => JavaScirpt
    - 1996 IE3 JScript
    - 1997 ECMA TC39 => ECMA-262
- achievement
    - ECMAScript
        - 2009 ES5, IE9/FF4
    - DOM
        - W3C
        - DOM level
            - DOM1
                - DOM Core
                - DOM HTML
            - DOM2
                - DOM Views ??
                - DOM Events
                - DOM Style
                - DOM Traversal and Range
            - DOM3
                - DOM Load and Save
                - DOM Validation ??
                - DOM Core
        - IE9 DOM1/2/3
    - BOM

- data types
    - primitive value
        - Undefined, Null, Boolean, Number, String, Symbol
    - Objects，一组无序键值对
    - typeof操作符
        - undefined、boolean、number、string
        - object，有可能是Null
        - function
    - Number
        - IEEE754
        - MIN_VALUE/MAX_VALUE
        - Infinity／-Infinity, IsFinite()
        - NaN, IsNaN()
        - Number()
            - true => 1, false =>0, null =>0, undefined => NaN
            - String.trim(); '' => 0, 'Number' => Number, 'Not Number' => NaN
        - ParseInt(), ParseFloat()
            - arguments[0].toString().trim() => Number/NaN
            - arguments[1] = cardinal number
    - String
        - toString()
            - arguments[0] = cardinal number
            - undefined/null cannot read prototype 'toString'
        - String()
            - try toString()
            - undefined => 'nudefined', null => 'null'
    - Object
        - constructor
        - hasOwnProperty(propertyName), propertyIsEnumerable(propertyName)
        - isPrototypeOf(object)
        - valueOf(), toString(), toLocalString()

- 流程语句
- 函数

===
闭包
匿名函数
元编程
unicode
Netscape和Mozilla
DHTML