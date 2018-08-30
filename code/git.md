# 回滚
- git的回滚，revert，reset
  - reset 重置提交
    - 默认参数 -soft,所有commit的修改都会退回到git缓冲区
    - 参数--hard，所有commit的修改直接丢弃
  - revert 回滚，撤销一次提交并把本次撤销操作作为一次新的提交
    - 不影响其他提交
  - 版本穿梭，恢复到已经删除的操作
    - git reflog 查id，git reset --hard id

## TODO

- 补丁
- 标签
- 工作流
merge commit
遴选
cherry-pick


## rollback

```sh
$ git reset --hard <commitID>
$ git push -f origin <branch>
```

## tag

git tag -d <tagname>
git push origin :refs/tags/<tagname>


# git

```bash
git config --global user.name 'chenliexin'
git config --global user.email 'chenliexin@yeah.net'
git init
git clone
git add --all
git commit -m 'message'
git status
git log
git reflog
git reset -hard HEAD^
git reset -hard HEAD^^^^^^
git reset -hard 'index'
```

reset
$ git reset -hard HEAD^ //HEAD^^^ and so on
$ git reset -hard <index> //index lookup from $ git reflog

undo unremove
$ git checkout -- <path> //important --, without -- create branch

Github 

create SSH-Key
$ ssh-keygen -t rsa -C "chenliexin@yeah.net"
//id_rsa and id_rsa.pub will be create in user-main-dir

setting -> SSH Keys
add shh key with title and id_rsa.pub

[case 1] empty repository
$ git remote add origin <SSH-URL|HTTPS-URL>
$ git push -u origin master

[case 2] clone repository
$ git clone <SSH-URL|HTTPS-URL>

[case 3] pull
$ git pull

branch
$ git checkout -b dev
$ git branch
$ git merge <branch-name>
$ git merge -no-ff -m //unuse 'Fast forward'
$ git branch -d <branch-name> //delete branch
$ git stash //hide branch

remote
$ git push origin master
$ git pull

git checkout -b dev origin/dev


# SSH
- SSH，网络协议，用于计算机间加密登录，有多种实现，如openSSH
- 大多数git服务使用SSH授权
  - 生成，`ssh-keygen -t rsa -C "chenliexin@yeah.net"`
  - 默认生成在用户目录下`~/.ssh`
  - 默认文件id_dsa或id_rsa，.pub后缀是公钥，另一个密钥

# git
- 优点
  - 强大的分支功能和合并功能
  - 轻量且快速
  - 分布式
  - 数据完整性
  - 暂存区
  - 免费且开源
- 版本控制发展
  - 本地版本控制，基于本地数据库
  - 集中式版本控制
  - 分布式版本控制
- 来源于linux内核社区，诞生于2005年
- git核心
  - 直接记录快照，而非差异比较
    - 快照使用blob 对象来保存
  - 近乎所有操作都是本地执行
  - 保证完整性
    - 所有数据在存储前都计算校验和，然后以校验和来引用
    - 计算校验和的机制叫做 SHA-1 散列（hash，哈希）
      - 由 40 个十六进制字符组成
      - 基于 Git 中文件的内容或目录结构计算出来
      - Git 数据库中保存的信息都是以文件内容的哈希值来索引，而不是文件名
  - 一般只添加数据
  - 三种状态，已提交（committed）、已修改（modified）和已暂存（staged）
- 配置 git config
  - 配置文件
    - /etc/gitconfig，系统级，--system
    - ~/.gitconfig或~/.config/git/config，项目级，--global
    - 当前仓库.git/config，项目级，--local
  - 用户信息
    - ！！安装完第一件事，配置用户名和邮箱 user.name user.email
    - 每次提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改
  - 配置信息 git config --list
  - 别名 alias
- 帮助 git help
  - git help -a/-g 全部
  - git help config 获取config的帮助
- 你工作目录下的每一个文件都不外乎这两种状态：已跟踪或未跟踪
- 忽略文件 .gitignore
  - 一开始就设置忽略文件配置
  - 格式
    - #开头为注释
    - 使用标准的glob模式匹配
      - 所谓的 glob 模式是指 shell 所使用的简化了的正则表达式
        - 可用*，?，[]
        - 可用**匹配任意中间目录
    - /开头防止递归
    - /结尾制定目录
    - ！取反
  - 参考 https://github.com/github/gitignore
- 常用指令
  - config
  - help
  - init
  - add
  - commit
  - clone
  - status
  - diff
    - 当前做的哪些更新还没有暂存？ 有哪些更新已经暂存起来准备好了下次提交？
    - 其实就是sourcetree或者ide里面的diff一样
  - rm
  - mv
    - ？？和直接改名字的区别是啥
  - log
  - remote
  - fetch
  - tag
  - show
  - branch
  - checkout
  - merge

- 撤销操作
  - 更正提交：提交后发现有文件未添加或提交信息写错
    - commit --amend
    - sourcetree，提交-提交选项-更正上一次提交
  - 取消暂存
    - reset HEAD {file}
    - sourcetree，直接操作，可以做到块级
  - 取消修改
    - checkout -- {file}
    - sourcetree，直接操作，可以做到块级
- 远程仓库
  - ？3？多个远程仓库怎么搞
  - 查看，添加，重命名，删除
    - remote，remote -v，remote add {name} {url}，remote rename，remote rm
    - sourcetree，设置中查看和添加
  - 抓取，拉取，推送
    - fetch {remote}，pull，push {remote} {branch}
- 标签
  - 两种主要类型的标签：轻量标签（lightweight）与附注标签（annotated）
    - 轻量标签本质上是将提交校验和存储到一个文件中 - 没有保存任何其他信息。 
      - 不建议使用
    - 附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；
      - 其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；
      - ？？并且可以使用 GNU Privacy Guard （GPG）签名与验证。
      - tag -a {tag} -m {message}
  - 共享标签
    - 默认情况下，git push 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样 - 你可以运行 git push origin [tagname]
    - 如果想要一次性推送很多标签，也可以使用带有 --tags 选项的 git push 命令
- 分支
  - 合并
    - 整合分支最容易的方法是 merge 命令。 它会把两个分支的最新快照（C3 和 C4）以及二者最近的共同祖先（C2）进行三方合并，合并的结果是生成一个新的快照（并提交）
    - rebase，变基，找到这两个分支的最近共同祖先 C2，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件，然后将当前分支指向目标基底 C3, 最后以此将之前另存为临时文件的修改依序应用
    - 变基使得提交历史更加整洁，尽管实际的开发工作是并行的，但它们看上去就像是串行的一样
    - 指向的快照始终是一样的，只不过提交历史不同罢了。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起
    - 变基的风险，要用它得遵守一条准则：不要对在你的仓库外有副本的分支执行变基。
- 协议
  - Git 可以使用四种主要的协议来传输资料：本地协议（Local），HTTP 协议，SSH（Secure Shell）协议及 Git 协议
  - 
仓库（repository）、跟踪（track）、暂存（stage）或提交（commit)、推送（push）拉取（pull）
版本控制系统（VCS）
  集中化版本控制系统（Centralized Version Control Systems，简称 CVCS）
  分布式版本控制系统（Distributed Version Control System，简称 DVCS）
已提交（committed）、已修改（modified）和已暂存（staged）
终端（Terminal）；命令窗口（Command Prompt）
