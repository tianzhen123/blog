## mac 操作 mysql数据库

### 命令行启动

```bash
sudo /usr/local/mysql/support-files/mysql.server start
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server restart
```

> 如果期间出现错误, 更多的是权限问题, 把 `/usr/local/mysql/data` 设置为读写

```bash
sudo chmod -R 777 /usr/local/mysql/data
```

> 如果忘记了密码

1.关闭mysql, 可强制关闭进程

```undefined
sudo pkill -9 mysql
```

2.本地启动

```bash
sudo /usr/local/mysql/support-files/mysql.server start --skip-grant-tables
```

3.修改`mysql.user`表里面的`password`字段

```bash
> update mysql.user set password='' where host='localhost';
> flush privileges;
```

4.退出重启, 即可在本地免密登录, 之后按自己需求设置相应的用户密码

