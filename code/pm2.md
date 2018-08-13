

## 修改ecosystem后发布不成功，不停重启，并有如下报错

> Cluster mode "ENOENT: no such file or directory, uv_cwd" issue. Doesn't appear to relate to symlinks.

```
DId you check PM2's its own Working Directory (pwd)?
PM2 daemon's working directory should not be in removable directory.

So, How to check PM2's working directory?
It's easy. Try this methods.

1. Type ps ax | grep PM2 on your console and hit Enter.
2. You'll find your PM2 daemon process row, first column is pid which is Number. remember/note it.
3. Type ls -l /proc/PM2_PID/cwd
4. Check working directory is removable (will be removed) directory.

If PM2 running in removable directory. Kill PM2 daemon (pm2 kill) and start pm2 daemon on another directory (e.g. cd ~ && pm2)
```


## 在莫名的情况下，deploy的时候会勾不到git pull

```
"pre-deploy": "git pull",
```