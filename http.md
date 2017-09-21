https://segmentfault.com/a/1190000007033157?utm_source=tuicool&utm_medium=referral

### http

输入域名(url)-->DNS映射为IP-->TCP三次握手-->HTTP请求-->HTTP响应-->(浏览器跟踪重定向地址)-->服务器处理请求-->服务器返回一个html响应-->(视情况决定释放TCP连接)-->客户端解析HTML-->获取嵌入在HTML中的对象重新发起http请求


## 同源策略 same-origin policy

同源：域名、端口、协议；限制: cookie, localStorage, indexedDB, iframe, ajax

单向跨域
1.jsonp 只支持get请求
2.服务器代理 在baidu.com下配置一个代理proxy即baidu.com/proxy/将ajax绑定到代理下发送http请求
3.CORS var xhr = createCORSRequest('GET', url);
4.window.name
5.webSocket
双向跨域
降域
1.location.hash
2.postMessage


<p>通讯方法：一级域名相同，二级域名不同</p>
<script>
// Cookie 通过设置document.domain
document.domain = 'example.com';
document.cookie = 'name=value; domain=example.com';
// iframe 默认可以操作
document.getElementById('iframe').contentWindow.document;
window.parent.document.body;
</script>

<p>通讯方法：hash/fragment identifier 片段识别符</p>
<script>
// iframe 通过监听hashchange事件
document.getElementById('iframe').src += '#' + hash;
parent.location.href += '#' + hash;
window.onhashchange = function(){
    console.log(window.location.hash);
};
</script>

<p>通讯方法：window.name（无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它）</p>
<script>
// iframe 不同源子窗口写入window.name，子窗口跳回同源主域后，主窗口可以读取子窗口window.name
window.name = 'somedata'; //子窗口
document.getElementById('iframe').contentWindow.name; //主窗口
</script>

<p>通讯方法：Cross-document messaging 跨文档通信api</p>
<script>
// iframe 主窗口子窗口发送消息，通过message事件监听对方的消息
document.getElementById('iframe').contentWindow.postMessage('somedata', '*');
window.parent.postMessage('somedata', '*');
window.addEventListener('message', function(e){
    console.log(e);
}, false);
// 由于somedata可以为任意数据类型，Cookie, LocalStorage, IndexedDB均可传送
</script>

<p>通讯方法：jsonp</p>
<script>
// ajax 使用jsonp
$.ajax({
    url: 'http://example.com/get.php?',
    success: function(json){
        console.log(json);
    }
});
</script>

<p>通讯方法：WebSocket</p>

<p>通讯方法：Cross-Origin Resource Sharing CORS是跨源资源分享
http://www.ruanyifeng.com/blog/2016/04/cors.html</p>




https
http+加密+认证+完整性保护=https
http:应用层的无状态，超文本传输协议。端口为80
HTTPS：只是http通信接口部分用SSL和TLS协议替代。http直接和TCP通信，而HTTPS使用SSL所以是先和SSL通信，再由SSL和TCP通信。端口为443




状态码

从哪里获取知识
  经常去的网站有哪些

