
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