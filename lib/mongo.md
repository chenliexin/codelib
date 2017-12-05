
# mongodb

https://www.mongodb.com/download-center#community

http://www.cnblogs.com/huangxincheng/archive/2012/02/18/2356595.html

### 查询操作符

1、 >, >=, <, <=, !=, =。 ===》 "$gt", "$gte", "$lt", "$lte", "$ne", "没有特殊关键字"
2、And，OR，In，NotIn ===》 "无关键字“, "$or"用数组, "$in"，"$nin" 
3、正则
4、大招 $where:function(){return this.index}

update修饰符
$inc也就是increase
$set修改器

常见的聚合操作跟sql server一样，有：count，distinct，group，mapReduce。

排序、分页
索引

http://blog.csdn.net/jiayp004/article/details/47127139


### 管理工具

- RoboMongo https://robomongo.org/ 跨平台应用
- RockMongo http://rockmongo.com/ php网页版


./mongod.exe --dbpath 'd:\mongo\db'

./mongod.exe --logpath "d:\mongo\dbConf\mongodb.log" --logappend --dbpath "d:\mongo\db" --install

```js
/**
 * 创建数据库服务器并开发名为databaseName的数据库
 * @param host ip
 * @param port 端口
 * @param databaseName
 * @return  打开失败返回-1 ，成功返回database
 */
function openDatabase(host,port,databaseName){
    //创建数据库所在的服务器
    var server = new mongo.Server(host, port, {auto_reconnect: true});
    var db = new mongo.Db(databaseName, server, {safe: true});
    db.open(function (err, db) {
        if (err) {
            console.log('打开数据库失败');
            return -1;
        }
        else {
            console.log('打开数据库成功');

        }

    });
    return db;
}
/**
 * 连接数据集合
 * @param db 数据库
 * @param collectionName 数据集合名称
 * @return 成功返回collection，失败返回-1
 */
function openCollection(db,collectionName){
    db.collection(collectionName,{safe:true},function(errcollection,collection){
        if(!errcollection){
            console.log('连接数据集合成功');
            return collection;

        }else{
            console.log('连接数集合失败');
            return -1;
        }
    });


}
/**
 * 插入数据
 * @param collection
 * @param tmp 要插入的数据
 * @return 成功返回collection，失败返回-1
 */
function insertCollection(collection,tmp){
    //var tmp = {username:'hello',password:1};
    collection.insert(tmp,{safe:true},function(err, result){
        if(err){
            console.log('传入数据集合失败'+tmp);
            return -1;
        }else {
            console.log('插入数据集合成功'+result);

        }
    });
    return collection;
}
/**
 * 查询数据集合 没有条件
 * @param collection
 * @return 成功返回查询到的数据集合内容，失败返回-1
 */
function findCollectionNoCondition(collection){
    collection.find().toArray(function(errfind,cols){
        if(!errfind){
            console.log('查询数据集合成功'+JSON.stringify(cols));
            return JSON.stringify(cols);
        }else {
            console.log('查询数据集合失败');
            return -1;
        }
    });
}
/**
 * 查询数据集合 有条件
 * @param collection
 * @return 成功返回查询到的数据集合内容，失败返回-1
 */
function findCollectionHasCondition(collection,tmp){
    collection.find(tmp).toArray(function(errfind,cols){
        if(!errfind){
            console.log('查询数据集合成功'+JSON.stringify(cols));
            return JSON.stringify(cols);
        }else {
            console.log('查询数据集合失败');
            return -1;
        }
    });
}
/**
 * 删除数据集合
 * @param collection
 * @param tmp
 * @return 成功返回数据集合，失败返回-1
 */
function removeCollection(collection,tmp){
    //var tmp = {username:'hello',password:1};
    collection.remove(tmp,{safe:true},function(err, count){
        if(err){
            console.log('删除数据集合失败'+tmp);
            return -1;
        }else {
            console.log('删除数据集合成功'+count);
            return collection;
        }
    });
}



db.d1.find().forEach(function(obj) { 
    obj.id = new NumberInt(obj.id);
    db.d1.save(obj);
});
```
