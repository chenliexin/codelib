

# 授权

配置
公众平台 = 


# 小程序

app.js   入口
app.json 配置
app.wxss 公用样式


        tbow.wechat({
          title: '你是最懂 ' + self.$store.state.page.nickname + ' 的人吗？',
          url: 'http://www.talebase.com/heime/test/?pid=' + self.$store.state.page.id,
          img: self.$store.state.page.avatar,
          desc: '满分要不要约一下'
        });
