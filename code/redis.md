## GUI Medis for Windows

https://github.com/hs300/medis/releases/tag/win
http://www.waketu.com/article/59f3bdbe36e8b71f1b1badd2

## ioredis

https://github.com/luin/ioredis


redis-server
  --test-memory
redis-benchmark 基准性能测试
  -c client 并发数 默认50
  -n num 请求数 默认100000
  -q 每秒信息
  -r random 插入随机键

pipeline
事务
  事务表示一组动作，要么全部执行，要么全部不执行。
  Redis提供了简单的事务功能，将一组需要一起执行的命令放到multi和exec两个命令之间。multi命令代表事务开始，exec命令代表事务结束，它们之间的命令是原子顺序执行的。
  如果要停止事务的执行，可以使用discard命令代替exec命令即可。

持久化
  RDB持久化
    当前进程数据生成快照保存到硬盘
    手动触发
    自动触发
  AOF

