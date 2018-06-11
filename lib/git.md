# Git

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


