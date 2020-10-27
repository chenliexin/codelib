# shell

Shell俗称壳（用来区别于核），是指“为使用者提供操作界面”的软件（命令解析器）
CLI(command-line interface,命令行界面)和 图形用户界面（Graphical User Interface，简称 GUI，又称图形用户接口）

terminal，终端，用于和shell交互
powershell 是选中复制，右键粘贴
shell提示符 [username@machinename workingDirectory]$ ，如果$是#的话表示是管理员
上下键的历史记录为500条 

## command

date
cal 日历
df 硬盘空间
free 内存空余
ctrl-alt-f1 到 f6 可以进入多个终端。alt-f1 到 f6可以切换。alt-f7可以返回图像桌面

# linux

http://blog.51cto.com/494981/1383655 yum和apt-get
tar -czvf test.tar.gz *

### vi

:w      保存
:w file 另存
:w!     强制保存
:wq     保存，退出
:wq!    强制保存，退出
q:      退出
:q!     强制退出
:e!     重载



:: 工具
:: putty

:: 修改密码
passwd 


:: 编辑
vim
vi
Esc到命令模式, 敲冒号:, 再wq!(3个字符),就保存退出了, [w是保存,q是退出,可单用,!是强制]

wdpc






## 进程

（1） CTRL+Z停止进程并放入后台
    （2） jobs 显示当前暂停的进程
    （3） bg %N 使第N个任务在后台运行（%前有空格）
    （4） fg %N 使第N个任务在前台运行
    默认bg，fg不带%N时表示对最后一个进程操作！


## vmware12

centos 6.8
    http://www.cnblogs.com/xyq/p/4068018.html


yum
    perl
    wget
wget
mount umount
tar

国外源:wget http://nodejs.org/dist/latest-v6.x/node-v6.9.1.tar.gz (不要下载node-v6.9.1-linux.tar.gz,那个不是下面的流程) 
国内淘宝源: wget https://npm.taobao.org/mirrors/node/v6.9.1/node-v6.9.1.tar.gz,其它版本可以在上层路径里面找; 
tar zxvf node-v6.9.1.tar.gz 
cd node-v6.9.1.tar.gz/ 
./configure 
sudo make install 



# nginx

nginx依赖于pcre和zlib
PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库
https://nchc.dl.sourceforge.net/project/pcre/pcre/8.40/pcre-8.40.tar.gz
tar -zxvf pcre-8.39.tar.gz
cd pcre-8.39
./configure
make
make install
zlib是提供数据压缩用的函式库
http://zlib.net/zlib-1.2.11.tar.gz
tar -xvf zlib-1.2.8.tar.gz
cd zlib-1.2.8
./configure
make
make install
http://nginx.org/download/nginx-1.13.1.tar.gz
tar -zxvf nginx-1.11.5.tar.gz
cd nginx-1.11.5

yum -y install openssl openssl-devel

./configure --sbin-path=/usr/local/nginx/sbin/nginx  --conf-path=/usr/local/nginx/conf/nginx.conf --pid-path=/usr/local/nginx/sbin/nginx.pid --with-http_ssl_module --with-pcre=../pcre-8.40 --with-zlib=../zlib-1.2.11
make
make install


ps -ef | grep nginx 就可以看到Nginx进程是否存在了



ssh-keygen -t rsa -C"mail@mail.com"
cat  ~/.ssh/id_rsa.pub


nginx -s stop
nginx -s reload

    server {
        listen       80;
        server_name  www.fdwjp.com;
        location / {
            proxy_pass http://127.0.0.1:9001;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header REMOTE-HOST $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        }
    }
    server {
        listen       80;
        server_name  fdwjp.com;
        location / {
            rewrite (.*) http://www.fdwjp.com$1 permanent;
        }
    }
    