

yum groupinstall "GNOME Desktop" -y

startx




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



Linux

    Swap
 1、以root权限登录SSH，键入如下命令创建512M的swap文件（1024 * 512MB = 524288）。
　　dd if=/dev/zero of=/swapfile1 bs=1024 count=524288
　　2、创建Linux交换文件
　　mkswap /swapfile1
　　3、立即激活 /swapfile1交换文件
　　swapon /swapfile1
　　4、设置系统自激活交换文件。编辑 /etc/fstab文件，并增加如下第二行代码。
　　vi /etc/fstab
　　/swapfile1 swap swap defaults 0 0
　　5、重启系统，使用free -m查看swap大小。


Linux中查看swap的命令
　可以用“cat /proc/swaps”、“swapon -s”、“free”等命令查看Swap分区的情况。

http://www.wdlinux.cn/wdcp/install.html


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