
> loadsh 4.14.1

## Array

```js

//array

    _.chunk(array, [size=1])
    //分块
    
    _.compact(array)
    //正合并
    
    _.concat(array, [values])
    //扁平化合并
    
    _.difference(array, [values])
    _.differenceBy(array, [values], [iteratee=_.identity])
    _.differenceWith(array, [values], [comparator])
    //比较
    
    _.drop(array, [n=1])
    _.dropWhile(array, [predicate=_.identity])
    _.dropRight(array, [n=1])
    _.dropRightWhile(array, [predicate=_.identity])
    //定点截取
    _.take(array, [n=1])
    _.takeWhile(array, [predicate=_.identity])
    _.takeRight(array, [n=1])
    _.takeRightWhile(array, [predicate=_.identity])
    //从头截取
    
    _.fill(array, value, [start=0], [end=array.length])
    //填充

    _.findIndex(array, [predicate=_.identity], [fromIndex=0])
    _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
    //索引

    _.flatten(array)
    _.flattenDeep(array)
    _.flattenDepth(array, [depth=1])
    //扁平化
    
    _.fromPairs(pairs)
    //键值化
    
    _.head(array)
    //出列
    
    _.indexOf(array, value, [fromIndex=0])
    _.lastIndexOf(array, value, [fromIndex=array.length-1])
    //索引

    _.initial(array)
    //出栈删除
    
    _.intersection([arrays])
    _.intersectionBy([arrays], [iteratee=_.identity])
    _.intersectionWith([arrays], [comparator])
    //交集
    
    _.join(array, [separator=','])
    //连接
    
    _.last(array)
    //出栈
    
    _.nth(array, [n=0])
    //取值
    
    _.pull(array, [values])
    _.pullAll(array, values)
    _.pullAllBy(array, values, [iteratee=_.identity])
    _.pullAllWith(array, values, [comparator])
    _.pullAt(array, [indexes])
    _.remove(array, [predicate=_.identity])
    //删除

    _.reverse(array)
    //翻转

    _.slice(array, [start=0], [end=array.length])
    //定点截取

    _.sortedIndex(array, value)
    _.sortedIndexBy(array, value, [iteratee=_.identity])
    _.sortedLastIndex(array, value)
    _.sortedLastIndexBy(array, value, [iteratee=_.identity])
    _.sortedIndexOf(array, value)
    _.sortedLastIndexOf(array, value)
    //索引
    
    _.tail(array)
    //出列删除

    _.union([arrays])
    _.unionBy([arrays], [iteratee=_.identity])
    _.unionWith([arrays], [comparator])
    //扁平化去重
    
    _.uniq(array)
    _.uniqBy(array, [iteratee=_.identity])
    _.uniqWith(array, [comparator])
    _.sortedUniq(array)
    _.sortedUniqBy(array, [iteratee])
    //去重

    _.without(array, [values])
    //除值

    _.xor([arrays])
    _.xorBy([arrays], [iteratee=_.identity])
    _.xorWith([arrays], [comparator])
    //差集

    _.zip([arrays])
    _.zipWith([arrays], [iteratee=_.identity])
    //分组
    _.unzip(array)
    _.unzipWith(array, [iteratee=_.identity])
    //分组复原
    
    _.zipObject([props=[]], [values=[]])
    _.zipObjectDeep([props=[]], [values=[]])
    //键值化

//collection
    
    _.countBy(collection, [iteratee=_.identity])
    //分组长度
    _.groupBy(collection, [iteratee=_.identity])
    //分组

    _.every(collection, [predicate=_.identity])
    //断言

    _.filter(collection, [predicate=_.identity])
    //筛选
    
    _.find(collection, [predicate=_.identity], [fromIndex=0])
    _.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])
    //查找
    
    _.flatMap(collection, [iteratee=_.identity])
    _.flatMapDeep(collection, [iteratee=_.identity])
    _.flatMapDepth(collection, [iteratee=_.identity], [depth=1])
    //遍历扁平化
    
    _.forEach(collection, [iteratee=_.identity])
    _.forEachRight(collection, [iteratee=_.identity])
    //遍历

```
