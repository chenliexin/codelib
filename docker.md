# docker


ps
images

进入容器
sudo docker exec -it 775c7c9ee1e1 /bin/bash


### Dockerfile

```Dockerfile
# 定制的镜像
FROM node:12

# 指定工作目录。用 WORKDIR 指定的工作目录，会在构建镜像的每一层中都存在。（WORKDIR 指定的工作目录，必须是提前创建好的）。
# docker build 构建镜像过程中的，每一个 RUN 命令都是新建的一层。只有通过 WORKDIR 创建的目录才会一直存在
WORKDIR /usr/src/app

# 复制指令，从上下文目录中复制文件或者目录到容器里指定路径。
# COPY [--chown=<user>:<group>] <源路径1>...  <目标路径>
COPY . .

# 用于执行后面跟着的命令行命令。有以下俩种格式：
# shell 格式：RUN <命令行命令>
# exec 格式：RUN ["可执行文件", "参数1", "参数2"]
RUN npm install

# 仅仅只是声明端口。作用：
# 帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射。
# 在运行时使用随机端口映射时，也就是 docker run -P 时，会自动随机映射 EXPOSE 的端口。
EXPOSE 3000

# 类似于 CMD 指令，但其不会被 docker run 的命令行参数指定的指令所覆盖，而且这些命令行参数会被当作参数送给 ENTRYPOINT 指令指定的程序。
# 但是, 如果运行 docker run 时使用了 --entrypoint 选项，此选项的参数可当作要运行的程序覆盖 ENTRYPOINT 指令指定的程序。
# 优点：在执行 docker run 的时候可以指定 ENTRYPOINT 运行所需的参数。
# 注意：如果 Dockerfile 中如果存在多个 ENTRYPOINT 指令，仅最后一个生效。
# 格式：ENTRYPOINT ["<executeable>","<param1>","<param2>",...]
ENTRYPOINT ["./test.sh"]
```



gitlab-ci中的字段