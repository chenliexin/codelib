# json
- javascrpit object notation，js对象标记
- 特点：纯文本，跨平台，多语言支撑，轻量级，可读性强

# jsonp
- json with padding
- 原理
  > 利用script标签不受同源策略限制的特点，响应json数据的调用方式
- 缺点
  - 仅支持get
  - 难以处理请求错误和异常
    - 通过timeout来弥补
  - 安全性
    - callback
- 防御攻击
  - 限制referer
  - 部署一次性token
  - 标准格式 Content-Type: application/json
  - 标准编码 charset: utf-8
  - 过滤callback和限制其长度
  - 在返回开头写入/**/

# json 和 jsonp
- json是一种数据格式，是正式协议
- jsonp是json的调用方式，是一种非正式协议
