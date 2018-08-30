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

- 撤销操作
  - 更正提交：提交后发现有文件未添加或提交信息写错
    - commit --amend
    - sourcetree，提交-提交选项-更正上一次提交
  - 取消暂存
    - reset HEAD {file}
    - sourcetree，直接操作
  - 取消修改
    - checkout -- {file}
    - sourcetree，直接操作

仓库（repository）、跟踪（track）、暂存（stage）或提交（commit)、推送（push）拉取（pull）
版本控制系统（VCS）
  集中化版本控制系统（Centralized Version Control Systems，简称 CVCS）
  分布式版本控制系统（Distributed Version Control System，简称 DVCS）
已提交（committed）、已修改（modified）和已暂存（staged）
终端（Terminal）；命令窗口（Command Prompt）
