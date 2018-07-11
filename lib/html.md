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

## TODO


link

```xml
<link rel="dns-prefetch" href="//dns.domain.com">

```

meta

UC手机浏览器字体变大

```xml
<meta name="wap-font-scale" content="no">
```


localStorage

```js
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();
window.addEventListener('storage', handle, false); // chrome测试无效20160801
```

sessionStorage

```js
sessionStorage.setItem(key, value);
sessionStorage.getItem(key);
sessionStorage.removeItem(key);
sessionStorage.clear();
window.addEventListener('storage', handle, false); // chrome测试无效20160801
```


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



code review

















