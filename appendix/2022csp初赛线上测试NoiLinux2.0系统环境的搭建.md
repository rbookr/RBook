# 2022csp初赛线上测试NoiLinux2.0系统环境的搭建

作者:Rainboy


## 0. 启因


2022年的csp初赛有些地方需要进行线上测试，需要准备相应的环境。

window下你只需要下载对应的软件就可以了，那么在NoiLinux2.0 或其它Linux发行版下应该如何搭建环境呢？


## 1. 明确需要的硬件与软件


根据 https://www.noi.cn/xw/2022-09-09/773010.shtml

- 电脑（安装了Linux系统)
- 手机一部
- 小音箱一个
- 两个腾讯会议的帐号(重要)，一个用于手机,一个用电脑
- 手机支架一个(放置手机)


## 2. 系统准备


这里以NoiLinux2.0(ubuntu 20.04)为例


[[ctrl]]+[[alt]]+[[t]]打开`terminal`,输入



1. 备份源

```bash
sudo cp /etc/apt/sources.list /etc/apt/sources_bak.list
```

2. 设置源

```bash
sudo cat > /etc/apt/sources.list << EOF
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
EOF
```


2. 更新与安装wget(通过网络下载软件用)


```bash
sudo apt update
sudo apt install wget
# 安装解码器
sudo apt-get install libavcodec58 ffmpeg
```

## 3. 安装腾讯会议 Linux 版


### 3.1 下载方式1: 手动下载


打开网页,https://meeting.tencent.com/download/


选择Linux,下载`X86_64`

**安装:**

默认的下载目录是 `~/下载/TencentMeeting_0300000000_3.9.0.1_x86_64_default.publish.deb`

注意:你下载的文件的名字可能与笔者下载的不一样,例如我下载的腾讯会议的名字叫做:`TencentMeeting_0300000000_3.9.0.1_x86_64_default.publish.deb`


```bash
cd ~/下载/
sudo dpkg -i TencentMeeting_0300000000_3.9.0.1_x86_64_default.publish.deb
```


### 3.2 下载方式2: 命令行下载


```bash
wget https://updatecdn.meeting.qq.com/OTRhY2YwZTUtMzE5Ni00NDQyLTg0MTMtOTBjYzQzNzcxYTQz/TencentMeeting_0300000000_3.9.0.1_x86_64_default.publish.deb
```


**安装**


注意:你下载的文件的名字可能与笔者下载的不一样,例如我下载的腾讯会议的名字叫做:`TencentMeeting_0300000000_3.9.0.1_x86_64_default.publish.deb`

```bash
sudo dpkg -i TencentMeeting_0300000000_3.9.0.1_x86_64_default.publish.deb
```

## 4. 安装OBS


OBS 可以完全通过命令行下载

```bash
sudo apt install obs-studio
```

## 5. 配置 OBS

TODO

## 6. 机位的摆放


TODO
