vue

许可证license类型
状态码
缓存
apply、call
CommonJS模块

# 未整理



一个事件函数的四部分
  取得事件对象的访问权，建议用事件委派／广播的方式获得，而不是直接绑定
  业务代码
  取消事件的传播
    W3C标准方法stopPropagation()
    IE属性cancelBubble=true
  如有需要，阻止默认操作，
    W3C标准方法preventDefault()
    IE方法returnValue=false

事件
设计模式
web Worker和postMessage
XMLHttpRequest
缓存



gzip
gzip能在压缩的基础上再进行压缩50%以上！！！
 gzip不压缩图片，因为压缩之后会更大- -，所以一般到是压缩css和js
 koa-compress
  因为node读取的是生成目录中的文件，所以要先用webpack等其他工具进行压缩成gzip
ETag
  If-None-Match
  一个可以与Web资源关联的记号（token）
  响应码为“304”的http响应
