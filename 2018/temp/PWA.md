## 概述
- Progressive web app，渐进式WEB应用
- Google推出，多巨头联合发力，可能是web应用开发的未来
- 现状
    - Native APP，Web App，Hybrid App各具特点
    - PWA更像是Hybrid App，但更强

## 特性
- 渐进增强
- 响应式用户界面
- 不依赖网络连接：service workers可在离线或者网速极差的环境下工作
- 持续更新：service worker能始终保持更新
- 类原生应用：建立在app shell model上
- 可发现：manifests和service worker让搜索引擎能够找到web应用
- 可安装：允许应用保存到主屏幕
- 可连接性：通过URL分享应用
- 消息推送
- 安全：通过HTTPS来提供服务

## 缺点
- 苹果Safari仍支持
- 国内Android系统，大部分把Google框架移除了
- 推送依赖于GCM，而国内Google是无法访问

## 开发
- Manifest
    - 保存到主屏幕
    - 全屏、屏幕方向
    - 启动界面
    - 追踪来路
- Service Workers
    - 由Cache API和Web Worker两部分构成
        - Web Worker，JavaScript解决单线程的方案
        - Cache API，缓存方案
- Push Notification
    - Push和Notification分别是推送和通知两个API，依赖关系
        - Push，服务端将更新信息传递给Service Worker
        - Notification，Service Worker将更新信息推送给用户
- Promise、fetch
