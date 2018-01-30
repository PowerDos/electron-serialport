# 基于electron的桌面串口工具
## 说明
> 文件中我上传了编译好的node_modules，所以文件可能会比较大，如果下载后不能使用，请参照[https://github.com/PowerDos/serialport_electron_start](https://github.com/PowerDos/serialport_electron_start) 进行编译

## 启动
> 因为这边暂时还未完善完，准备采用双package的方式进行开发，最外层的package.json，用做打包编译，里层的package作为应用本身的依赖启动之类的。

> 测试环境 Windows 10 64位

> 暂时启动用于需要先进入app目录下再开启应用

```shell
$ cd app
$ npm start
```

## 效果
![](https://i.imgur.com/2QXn7kk.png)