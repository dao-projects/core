# core
Core Library

```
npm login   daoxin@liu.... 



npm run push


ssh root@8.213.134.180
itgr@2022

ssh -o ServerAliveInterval=20 -g -Nf -D 6060 root@8.213.134.180

ssh -D 6060 -N -f -C -q root@8.213.134.180

ssh -qTfnN -D 6060 root@8.213.134.180



# Dynamic Port Forwarding 动态端口转发
ssh -D 6060 -N -f -C -q root@8.213.134.180

复制代码
-D 8080 启动一个 SOCKS 服务并监听本地的 9090 端口
-f 后台运行
-C 压缩请求数据
-q 使用静默模式
-N 不执行远程命令


curl -x socks5://127.0.0.1:6060 https://www.google.com
curl -x socks://127.0.0.1:6060 https://google.com

git config --global http.proxy socks5://127.0.0.1:6060


Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa
    ProxyCommand nc -v -x 127.0.0.1:6060 %h %p



ssh -Nf -R 6060:127.0.0.1:22 8.213.134.180

```