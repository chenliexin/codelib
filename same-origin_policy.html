
<p>same-origin policy 同源策略（协议、域名、端口）</p>

<p>非同源限制: Cookie, LocalStorage, IndexedDB; iframe; ajax</p>

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


