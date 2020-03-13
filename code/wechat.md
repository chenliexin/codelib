

# 授权

配置
公众平台 = 


接入
1、填写服务器配置
开发-基本设置
2、验证服务器地址的有效性
3、依据接口文档实现业务逻辑
用户每次向公众号发送消息、或者产生自定义菜单、或产生微信支付订单等情况时，开发者填写的服务器配置URL将得到微信服务器推送过来的消息和事件，开发者可以依据自身业务逻辑进行响应，如回复消息
用户向公众号发送消息时，公众号方收到的消息发送者是一个OpenID，是使用用户微信号加密后的结果，每个用户对每个公众号有一个唯一的OpenID
UnionID机制，同一用户，对同一个微信开放平台帐号下的不同应用，UnionID是相同的。
获取access_token
access_token是公众号的全局唯一接口调用凭据，公众号调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效。
  统一获取和刷新Access_token
  效期通过返回的expire_in来传达，在5分钟内，新老access_token都可用
  主动刷新，还需要提供被动刷新access_token的接口
使用AppID和AppSecret调用本接口来获取access_token。“微信公众平台-开发-基本配置”提前将服务器IP地址添加到IP白名单中。小程序无需配置IP白名单。https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
可用测试号


微信网页授权
“开发 - 接口权限 - 网页服务 - 网页帐号 - 网页授权获取用户基本信息”的配置选项中，修改授权回调域名。请注意，这里填写的是域名（是一个字符串），而不是URL，因此请勿加 http:// 等协议头；
关于网页授权的两种scope的区别说明
  以snsapi_base为scope发起的网页授权，是用来获取进入页面的用户的openid的，并且是静默授权并自动跳转到回调页的。
  以snsapi_userinfo为scope发起的网页授权，是用来获取用户的基本信息的。但这种授权需要用户手动同意
OAuth2.0机制
UnionID机制
网页授权流程分为四步：

1、引导用户进入授权页面同意授权，获取code

2、通过code换取网页授权access_token（与基础支持中的access_token不同）

3、如果需要，开发者可以刷新网页授权access_token，避免过期

4、通过网页授权access_token和openid获取用户基本信息（支持UnionID机制）


# 小程序

app.js   入口
app.json 配置
app.wxss 公用样式


