

- 查询
  - `db.col.find(query, projection)`
    - query 查询操作符
      - `{key: value}` and
      - `{$or: [{key1: value1}, {key2: value2}]}` or
      - `{key: {$lt: value}}` $lt $lte $gt $gte $ne
    - projection 投影操作符
      - `{key: 1/0}` 两种模式不能混用
      - `{_id: 0}` _id隐藏 默认返回
    - `db.col.find().pretty()`
  - `db.col.findone()`

- 删除
  - `db.col.remove(query, justOne)`
  - `db.col.remove(query, {justOne, writeConcern})` v2.6+
    - justOne ture,1 只删除一个
    - writeConcern 抛出异常的级别
  - remove方法已过时，官方推荐如下
    - `db.col.deleteMany()` `db.col.deleteOne()`
