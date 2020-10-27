
```js
db.createCollection(name, options);
// name 集合名称
// options 可选，集合参数
// options.capped	true固定集合，必须指定size，当达到最大值时自动覆盖最早文档
// options.autoIndexId true，自动在 _id 字段创建索引。默认为 false。
size	数值	（可选）为固定集合指定一个最大值（以字节计）。
如果 capped 为 true，也需要指定该字段。
max	数值	（可选）指定固定集合中包含文档的最大数量。

db.collection.drop()
如果成功删除选定集合，则 drop() 方法返回 true，否则返回 false。
通过 show collections 命令查看已存在的集合

MongoDB 创建数据库的语法格式如下：
use DATABASE_NAME

所有数据库，可以使用 show dbs 命令
```


```js
db.col.insert(document);
db.col.find(query, projection);
db.col.findOne(query, projection);
db.col.save(document, writeConcern);
db.col.update(query, update, {upsert, multi, writeConcern});
db.col.update(query, update, upsert, multi);
db.col.remove(query, {justOne, writeConcern});
// save() 不指定_id类似insert()，指定_id类似update()
// query 可选，查询操作符
// projection 可选，投影操作符
// document 文档
// update 更新操作符
// upsert 可选，true查询不存在时插入
// multi 可选，true更新全部
// justOne 可选，true删除第一个文档
// writeConcern 可选，抛出异常的级别

// query 查询操作符
// $lt小于 $lte小于或等于 $gt大于 $gte大于或等于 $ne不等于
db.col.find({likes: {$lt: 50}});
// or
db.col.find({$or: [{name: 'my'}, {value: 10}]});
// 正则
db.col.find({title: /^reg/});

db.col.update({name: 'my'}, {$set: {name: 'your'}})
// 清空
db.col.remove({});


// projection 投影操作符
// update 更新操作符

```

