## HTML5
- Web Worker
  - 多线程处理功能
  - 创建一个不影响前台处理的后台线程
- 新的html标准，新的声明方式，直接doctype html非常简洁
- 更强的语义化，header、footer等
- 新的表单控件，Number，date，range等
- 强大的图像支持，picture、canves等
- 强大的多媒体支持，video、audio等
- 强大的新api：地理位置、拖放、web存储等

## Geolocation
- window.navigator.geolocation
- getCurrentPosition(onSuccess, onError, options)
    - onSuccess(position)
        - position.latitude 纬度
        - position.longitude 经度
        - position.altitude 海拔
        - position.accuracy 精度，单位米
        - position.altitudeAccuracy 海拔精度，单位米
        - position.heading 设备前进方向，正北方顺时针角度
        - position.speed 设备移动速度，单位米/秒
    - onError(error)
        - error.code
            - 1，用户拒绝位置服务
            - 2，获取不到位置信息
            - 3，超时
        - error.message
            - 字符串错误信息
            - FF3.6+不支持
    - options
        - enableHighAccuracy 高精度位置信息，默认，多少情况下没用
        - timeout 超时毫秒数
        - maximun 缓存毫秒数
- watchCurrentPosition(onSuccess, onError, options)
- clearWatch(watchId)

# 拥有宽高的行内元素
- 替换元素，根据标签和属性显示内容
- 不可替换元素，内容直接表现

# Iframe通信
- 父子，父通过iframeElement.contentWindow
- 父子，父通过iframeName.window
- 父子，父通过window.frames[0]
- 子父，子通过parent.window
- 子父，子通过top.window
- 兄弟，通过父做桥接

### 监听DOM变动
- MutationObserver，目前IE11+及其它浏览器最新版本都已支持
- DOM3 Mutation events 事件，已废弃，不建议使用
  - DOMAttrModified
  - DOMAttributeNameChanged
  - DOMCharacterDataModified
  - DOMElementNameChanged
  - DOMNodeInserted
  - DOMNodeInsertedIntoDocument
  - DOMNodeRemoved
  - DOMNodeRemovedFromDocument
  - DOMSubtreeModified

# xmlhttprequest二进制
- 设置responseType属性来改变一个从服务器上返回的响应的数据类型
  - 可用的属性值为空字符串 (默认), "arraybuffer", "blob", "document", 和 "text"


## TODO
link
  rel
    dns-prefetch
      前端优化中与DNS有关的两点：1、减少请求次数，2、提前对DNS预获取。

dpr devicePixelRatio, DPR = 设备像素 / CSS像素
  dppx 每像素有多少个点 == dpr
  pixel
  ppi(Pixel Per Inch)
  dpi
  retina 视网膜屏幕
  设备像素(device independent pixels)
  CSS像素(CSS pixels): 又称为逻辑像素
  “点”（dot）
