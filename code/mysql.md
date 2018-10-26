# mysql

- 基础
  - https://www.w3cschool.cn/mysql/
  - https://blog.csdn.net/qq_35246620/article/details/70823903


多线程
tcp/ip，ODBC，JDBC
GPL协议
全局事务
GIS

ps -ef | grep mysqld，查看进程
用户设置在mysql数据库user表
  INSERT INTO user (host, user, password, select_priv, insert_priv, update_priv) VALUES ('localhost', 'guest', PASSWORD('guest123'), 'Y', 'Y', 'Y');
  *_priv 权限字段
  PASSWORD() 函数来对密码进行加密
  在 MySQL5.7 中 user 表的 password 已换成了authentication_string
  执行 FLUSH PRIVILEGES 语句。 这个命令执行后会重新载入授权表
command+r执行当前行query
command+alt+r执行全部行query
esc召唤补全提示
mysqladmin -u root -p create W3CSCHOOL，使用mysqladmin建库
三大类数据，数值，时间，字符
NOT NULL， 在操作数据库时如果输入该字段的数据为NULL ，就会报错
AUTO_INCREMENT定义列为自增的属性，一般用于主键，数值会自动加1
PRIMARY KEY关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔
MySQL命令终止符为分号 (;) 
create table，drop table
使用 INSERT INTO SQL语句来插入数据
你可以通过OFFSET指定SELECT语句开始查询的数据偏移量。默认情况下偏移量为0。
你可以使用 LIMIT 属性来设定返回的记录数。
执行完SELECT语句后，释放游标内存是一个很好的习惯
UPDATE table_name SET field1=new-value1
LIKE 通常与 % 一同使用，类似于一个元字符的搜索
可以设定多个字段来排序。你可以使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升排列
GROUP BY 语句根据一个或多个列对结果集进行分组。在分组的列上我们可以使用 COUNT, SUM, AVG,等函数。
？join
ERE name REGEXP '^st' 使用正则
？事务
当我们需要修改数据表名或者修改数据表字段时，就需要使用到MySQL ALTER命令
索引也会有它的缺点：虽然索引大大提高了查询速度，同时却会降低更新表的速度


查看进程
  ps -ef | grep mysqld
用户设置
  mysql数据库user表
