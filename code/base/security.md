

## 防御

- XSS攻击——防御 CSP 设置 HTTP Header 中的 Content-Security-Policy




- 其他：
- 未知的第三方资源包
  - /mimg.127.net/lib/
  - 
- 本地数据泄露 离线应用会导致很多信息存储在本地，就给攻击者有了可趁之机。


- cdn被劫持或资源被污染
  - 静态资源完整性校验


GET请求与POST请求，要严格遵守规范，不要混用，不要将一些危险的提交使用JSONP完成。callback参数



大范畴

Lodash 是一款非常流行的 npm 库，的安全问题
  原型污染
  直接依赖漏洞 间接依赖漏洞
  npm@6 增加了一项重大更新：npm audit 命令。从上面的 logo 就可以看出，这个版本是主打安全性。npm audit 命令会递归地分析依赖关系树以识别不安全的依赖，如果你在项目中使用了具有已知安全问题的依赖，就收到警告通知。该命令会在你更新或者安装了新的依赖包后自动运行。
  npm 官方专门维护了一个漏洞列表，当开发者或者专业的安全团队发现某个依赖包存在安全问题后就会上报给 npm 官方，然后官方会通知该项目开发者进行修复，修复完成后 npm 会把漏洞详细的描述信息、解决方案发布出来
  https://mp.weixin.qq.com/s?src=11&timestamp=1584066788&ver=2213&signature=rC6eb2kdgndSg0ehWOhu0H0X3IqR8YF-*xqFNagZk*QQ7OmNfO8JH7ghdK4HiUe*kHul8ma53VPBlN56i1c8prnv4PIg8m-YIJ2IsVo2epCFbcmbdI3HGt5QT3H13yic&new=1

不安全的第三方依赖包





iframe 安全
被使用的 iframe 对当前网站某些操作？

sandbox是html5的新属性，主要是提高iframe安全系数。iframe因安全问题而臭名昭著，这主要是因为iframe常被用于嵌入到第三方中，然后执行某些恶意操作。
现在有一场景：我的网站需要 iframe 引用某网站，但是不想被该网站操作DOM、不想加载某些js（广告、弹框等）、当前窗口被强行跳转链接等，我们可以设置 sandbox 属性。如使用多项用空格分隔。

文件上传漏洞
前端会经常遇到文件上传，而对于上传的文件格式必须要做合法性校验，不然攻击者会上传非期望的格式。

在 iframe 添加一个叫 sandbox 的属性，浏览器会对 iframe 内容进行严格的控制，详细了解可以看看相关的 API 接口文档。


## 实际的例子

劫持的例子
sentry上的例子

## 开放性讨论

在移动浏览器上，被注入代码的可能性更大。如果去规避





多个话题
https://yq.aliyun.com/articles/657658
使用postMessage等需要在进行白名单校验

Sonar
发现代码上的bug https://www.jianshu.com/p/67c9016432a0

csrf
https://www.anquanke.com/post/id/161724#h3-11



## 目录

- 常见的前端安全问题
  - XSS，跨站脚本注入
  - CSRF，跨站伪造请求
  - 界面劫持
  - npm安全相关
  - iframe安全
  - CND劫持
  - 本地存储数据泄露
- 防御方法介绍
- 遇到的典型例子
- 一个开放讨论话题

