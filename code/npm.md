


$ npm -l

Usage: npm <command>

where <command> is one of:

    access       npm access public [<package>]
                 npm access restricted [<package>]
                 npm access grant <read-only|read-write> <scope:team> [<package>]
                 npm access revoke <scope:team> [<package>]
                 npm access ls-packages [<user>|<scope>|<scope:team>]
                 npm access ls-collaborators [<package> [<user>]]
                 npm access edit [<package>]

    adduser      npm adduser [--registry=url] [--scope=@orgname] [--always-auth]

                 aliases: login, add-user

    bin          npm bin [--global]

    bugs         npm bugs [<pkgname>]

                 alias: issues

    cache        npm cache add <tarball file>
                 npm cache add <folder>
                 npm cache add <tarball url>
                 npm cache add <git url>
                 npm cache add <name>@<version>
                 npm cache ls [<path>]
                 npm cache clean [<pkg>[@<version>]]

    completion   source <(npm completion)

    config       npm config set <key> <value>
                 npm config get [<key>]
                 npm config delete <key>
                 npm config list
                 npm config edit
                 npm set <key> <value>
                 npm get [<key>]

                 alias: c

    dedupe       npm dedupe

                 aliases: ddp, find-dupes

    deprecate    npm deprecate <pkg>[@<version>] <message>

    dist-tag     npm dist-tag add <pkg>@<version> [<tag>]
                 npm dist-tag rm <pkg> <tag>
                 npm dist-tag ls [<pkg>]

                 alias: dist-tags

    docs         npm docs <pkgname>
                 npm docs .

                 alias: home

    edit         npm edit <pkg>[@<version>]

    explore      npm explore <pkg> [ -- <cmd>]

    get          npm get <key> <value> (See `npm config`)

    help

    help-search  npm help-search <text>

    init         npm init [--force|-f|--yes|-y]

    install
                 npm install (with no args, in package dir)
                 npm install [<@scope>/]<pkg>
                 npm install [<@scope>/]<pkg>@<tag>
                 npm install [<@scope>/]<pkg>@<version>
                 npm install [<@scope>/]<pkg>@<version range>
                 npm install <folder>
                 npm install <tarball file>
                 npm install <tarball url>
                 npm install <git:// url>
                 npm install <github username>/<github project>

                 aliases: i, isntall
                 common options: [--save|--save-dev|--save-optional] [--save-exact]

    install-test
                 npm install-test [args]
                 Same args as `npm install`

                 alias: it

    link         npm link (in package dir)
                 npm link [<@scope>/]<pkg>[@<version>]

                 alias: ln

    logout       npm logout [--registry=<url>] [--scope=<@scope>]

    ls           npm ls [[<@scope>/]<pkg> ...]

                 aliases: list, la, ll

    outdated     npm outdated [[<@scope>/]<pkg> ...]

    owner        npm owner add <user> [<@scope>/]<pkg>
                 npm owner rm <user> [<@scope>/]<pkg>
                 npm owner ls [<@scope>/]<pkg>

                 alias: author

    pack         npm pack [[<@scope>/]<pkg>...]

    ping         npm ping
                 ping registry

    prefix       npm prefix [-g]

    prune        npm prune [[<@scope>/]<pkg>...] [--production]

    publish      npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>]

                 Publishes '.' if no argument supplied

                 Sets tag `latest` if no --tag specified

    rebuild      npm rebuild [[<@scope>/<name>]...]

                 alias: rb

    repo         npm repo [<pkg>]

    restart      npm restart [-- <args>]

    root         npm root [-g]

    run-script   npm run-script <command> [-- <args>...]

                 alias: run

    search       npm search [--long] [search terms ...]

                 aliases: s, se, find

    set          npm set <key> <value> (See `npm config`)

    shrinkwrap   npm shrinkwrap

    star         npm star [<pkg>...]
                 npm unstar [<pkg>...]

                 alias: unstar

    stars        npm stars [<user>]

    start        npm start [-- <args>]

    stop         npm stop [-- <args>]

    tag          [DEPRECATED] npm tag <name>@<version> [<tag>]
                 See `dist-tag`

    team         npm team create <scope:team>
                 npm team destroy <scope:team>
                 npm team add <scope:team> <user>
                 npm team rm <scope:team> <user>
                 npm team ls <scope>|<scope:team>
                 npm team edit <scope:team>

    test

    uninstall    npm uninstall [<@scope>/]<pkg>[@<version>]... [--save|--save-dev|--save-optional]

                 aliases: un, unlink, remove, rm, r

    unpublish    npm unpublish [<@scope>/]<pkg>[@<version>]

    update       npm update [-g] [<pkg>...]

                 aliases: up, upgrade

    version      npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
                 (run in package dir)
                 'npm -v' or 'npm --version' to print npm version (3.10.8)
                 'npm view <pkg> version' to view a package's published version
                 'npm ls' to inspect current package/dependency versions

    view         npm view [<@scope>/]<pkg>[@<version>] [<field>[.subfield]...]

                 aliases: v, info, show

    whoami       npm whoami [--registry <registry>]
                 (just prints username according to given registry)
```bash
# npm@3.10.8

$ npm -l           # display full usage info
$ npm <cmd> -h     # quick help on <cmd>
$ npm help <term>  # search for help on <term>
$ npm help npm     # involved overview



```


```bash
$ npm adduser

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