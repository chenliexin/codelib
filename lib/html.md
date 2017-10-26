## link

```xml
<link rel="dns-prefetch" href="//dns.domain.com">

```

## meta

UC手机浏览器字体变大

```xml
<meta name="wap-font-scale" content="no">
```


## localStorage

```js
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();
window.addEventListener('storage', handle, false); // chrome测试无效20160801
```

## sessionStorage

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

















