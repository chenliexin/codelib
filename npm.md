





where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, tag, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami



adduser
    *用于提交包，当源被修改的时候不可用


```bash
$ npm adduser
# config registry "https://registry.npmjs.org"

$ npm config set registry "https://registry.npmjs.org"
$ npm config set registry "https://registry.npm.taobao.org"

$ npm whoami
```







npm home {package}
npm repo {package}

npm outdated

node package manager

npm adduser

npm whoami

npm version patch
npm publish

npm unpublish

## install

```shell
$ npm install <name >
$ npm install <name >@< tag >          // 版本标志 eg: last
$ npm install <name >@< version >      // 版本 eg: 1.8.2
$ npm install <name >@< versionRange > // 版本范围 eg: '>=0.2.0'″
$ npm install <file >                // 本地文件 eg: ./package.tgz
$ npm install <url >                 // 链接
$ npm install -g                    // 全局安装
$ npm install -global               // 全局安装
$ npm install -save                 // 依赖 dependencies
$ npm install -save-dev             // 依赖 devDependencies
$ npm install -save-optional        // 依赖 optionalDependencies
$ npm install -force                // 强制拉取远程资源，即使本地已经安装这个模块
```

<p><strong>npm init</strong></p>
<p>引导你创建一个package.json文件</p>
<script>

{
    // 名字里不要再包含"js"和"node"，因为默认NPM包就是node.js程序，不过你可以通过engines字段来指定。
    // 名字将会被作为url的一部分，所有要符合http url的一般命名规则，不能包含url非法字符，也不能以.和_开头。
    // 名字也将作为require()命令的参数，所以应该尽量简明。
    // 如果包要发布到NPM平台上的话，最好先检查下有没有重名, 并且字母只能全部小写。
    "name": "clx",
    // 取值需要符合node-semver的规则 https://github.com/isaacs/node-semver
    "version": "1.0.1",
    "author": "chenliexin",
    "description": "chenliexin codelib",
    "scripts": {
        "start": "node server.js"
    },
    "dependencies": {
    },
    "repository": {
        "type": "git",
        "url": "https://git.duapp.com/appidvyas20knr0"
    },
    "readme": "README.md",
    "license": "ISC"
}
</script>

<p>http://www.runoob.com/nodejs/nodejs-npm.html
http://realwall.cn/blog/?p=120</p>


http://www.tuicool.com/articles/2aUB7j 版本号规则