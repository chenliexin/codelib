
> fis3 2016.05.13

## commands

`release`编译发布

`install`下载组件其依赖，通过`--save`参数保存依赖信息到根目录`component.json`，但目前没有list, remove等指令（下载组件及其依赖在components目录，手动查看和删除）

`init`快速初始化，可通过指定[template](https://github.com/fis-scaffold)来初始化当前目录，不指定则使用`default`作为模板

`server`服务器，官方说需求`java`和`php`环境，但却有参数`--type <php|java|node>`。

`inspect`用来查看文件`match`结果

## syntax

内容嵌入 定位资源 声明依赖

`?__inline`在html中嵌入资源

```xml
<img src="images/logo.gif?__inline">             <!-- 图片base64 -->
<link rel="stylesheet" href="demo.css?__inline"> <!-- 样式 -->
<script src="demo.js?__inline"></script>         <!-- 脚本 -->
<link rel="import" href="demo.html?__inline">    <!-- 文件 -->
```

`__inline()`在js中嵌入资源

```js
var img = __inline('logo.gif'); // 图片base64
__inline('demo.js');            // 脚本
var css = __inline('a.css');    // 文件
```

`?__inline`在css中嵌入资源

```css
/* 样式 */
@import url('demo.css?__inline');
/* 图片base64 */ 
.style {
    background: url(logo.gif?__inline); 
}
```

`fis.match`中使用`release`和`useHash`等属性对html中的script、link、style、video、audio、embed等标签的src或href属性进行定位资源

`__uri(path)`在js中定位资源

```js
var img = __uri('logo.gif'); 
var css = __uri('demo.css');
var js = __uri('demo.js');
```
`url(path)`以及`src=path`在css中定位资源

```css
@import url('demo.css');
.style {
    background: url(logo.gif);
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/body-bg.png');
}
```

`__RESOURCE_MAP__`声明依赖关系，`fis.match`中使用`useMap: true`，构建时依赖关系表会替换`__RESOURCE_MAP__`

```xml
<!--
    @require demo.js
    @require "demo.css"
-->
```

```js
/*
 * @require demo.css
 * @require list.js
 */
```

```css
/*
 * demo.css
 * @require reset.css
 */
```

## config

通过`fis.set(key, value)`和`fis.get(key)`设置读取配置

```js
var DEFAULT_SETTINGS = {
    project: {
        charset: 'utf8',
        md5Length: 7,
        md5Connector: '_',
        files: ['**'],
        ignore: ['node_modules/**', 'output/**', '.git/**', 'fis-conf.js']
    },

    component: {
        skipRoadmapCheck: true,
        protocol: 'github',
        author: 'fis-components'
    },

    modules: {
        hook: 'components',
        packager: 'map'
    },

    options: {}
};
```

`project.files`源码文件过滤器

`project.ignore`非追加排除文件

`project.fileType.text`追加文本文件后缀

`project.fileType.image`追加图片类二进制文件后缀

通过`fis.match(selector, props[, important])`匹配文件分配属性进行处理，`selector`包括`* ** ? {,} !`、正则、分类`::package ::text ::image`、内嵌`*.html:js *.html:css`

```js
fis.match('*.less', {
    release: '/static/$0',           // 设置构建路径，false为不构建
    packTo: '/static/pkg.js',        // 合并
    packOrder: -100,                 // 合并顺序，值越小越在前面
    query: '?=t' + fis.get('d'),     // 文件query，如?t=123124132
    id: 'jquery',                    // 组件id，如var $ = require('jquery');，类似seajs的alias
    moduleId: 'a',                   // 模块id
    url: '/static/new/$0',           // 默认是release的值，url可以与发布路径release不一致
    charset: 'gbk',                  // 默认是utf8，需要使用encoding插件
    useHash: true,                   // md5
    domain: 'http://cdn.baidu.com/', // 域名，可用作cnd等
    rExt: '.css',                    // 构建后缀
    useMap: true,                    // 文件信息是否添加到map.json
    isMod: true,                     // 是否为组件化文件，被标记成组件化的文件会入map.json表。并且会对js文件进行组件化包装
    extras: {                        // 在[静态资源映射表][]中的附加数据，用于扩展[静态资源映射表][]表的功能！不知道在说什么
        isPage: true
    },
    requires: [                      // 依赖id表
        'static/lib/jquery.js'
    ]
    useSameNameRequire: true,        // 同名依赖，模板会依赖同名css、js，不需要显式引用
    useCache: false                  // 编译缓存
})
```

通过`fis.media(mode)`区分多份构建流程

通过`fis.plugin(name[, props[, position]])`调用插件

```js
fis.match('*.less', {
    /*
    * <type>: fis.plugin(<name>);
    * fis-type-name == npm package name
    */
    lint: fis.plugin('js', {}),                     // 启用lint插件进行代码检查
    parser: fis.plugin('sass', {}),                 // 启用 parser 插件对文件进行处理
    preprocessor: fis.plugin('image-set', {}),      // 标准化前处理
    standard: fis.plugin('image-set', {}),          // 自定义标准化，可以自定义 uri、embed、require 等三种能力，可自定义三种语言能力的语法
    postprocessor: fis.plugin('require-async', {}), // 标准化后处理
    optimizer: fis.plugin('clean-css', {}),         // 启用优化处理插件
    /*
     * position 对于目标文件已经设置了某些插件，设置当前插件的插入方式
     * prepend  在已设插件执行之前插入
     * append   在已设插件执行之后插入
    */
    parser: fis.plugin('another', null, 'append')
})
// 打包阶段插件
fis.match('::package', {
    prepackager: fis.plugin('map'),          // 打包预处理插件
    packager: fis.plugin('map'),             // 打包插件
    spriter: fis.plugin('csssprites'),       // 打包后处理csssprite的插件
    postpackager: fis.plugin('plugin-name'), // 打包后处理插件
    deploy: fis.plugin('http-push', {        // 设置项目发布方式
        receiver: 'http://target-host/receiver.php',
        to: '/home/work/www'
    })
});
```
## plugin

[plugin list](http://fis.baidu.com/fis3/plugins.html)，以下内置插件及配置

- `fis-optimizer-clean-css`css压缩
- `fis-optimizer-png-compressor`图片压缩
- `fis-optimizer-uglify-js`js压缩
- fis-spriter-csssprites
- fis3-deploy-local-deliver
- fis3-deploy-http-push
- fis3-hook-components
- fis3-packager-map
