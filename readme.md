# Algorithm Book For Noier && Acmer


---------------------
<div align="center" style="display:flex;gap:10px; justify-content:center;margin-top:20px;">
    <img src="/public/rbook_big_logo.png" alt="" />
</div>

<div align="center" style="display:flex;gap:10px; justify-content:center;margin-top:20px;">
  <a href="https://github.com/rbookr/Rbook">
    <img src="https://img.shields.io/github/stars/rbookr/RBook?style=for-the-badge&color=green" alt="">
  </a>
  <a href="https://github.com/rbookr/Rbook/issues">
    <img src="https://img.shields.io/github/issues/rbookr/RBook?style=for-the-badge&color=green" alt="" />
  </a>
  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge&color=green" alt="" />
  </a>
</div>



## 说明

这里是新的RBook,正在建设中,你可以先访问[老版本的rbook](http://rbook_old.roj.ac.cn/)

如果你觉得本项目不错,督促作者尽快更新,请点击[这里](https://github.com/rbookr/Rbook),点击右上角**Star**,收藏本项目.

如果你想要提问,请点击这里[RBook issues](https://github.com/rbookr/RBook/issues)


如果你打不本网站,尝试下面的其它镜像

- https://rbook.roj.ac.cn 主站
- https://rbook1.roj.ac.cn github pages
- https://rbook2.roj.ac.cn netlify

你也可以访问作者作品的导航网站: http://roj.ac.cn


目录的标题带有 📺  标记表示,我有录制对应的视频教程.请在下面[视频教程](#视频教程)这一节里查找对应的视频

## 视频教程

- [阿里云盘,分享] (https://www.aliyundrive.com/s/CQQrNCeiRBy) 提取码rainboy
- BT下载: TODO


## 作者的其它的仓库

 - [RainboyNoip/algorithms: 我写的算法与工具，可以在写题目中使用](https://github.com/RainboyNoip/algorithms)

## how to build

```bash
git clone https://github.com/rbookr/vitepress ~/vitepress
cd ~/vitepress && pnpm install && pnpm build
# clone this repo
git clone https://github.com/rbookr/RBook ~/RBook
cd ~/Rbook && pnpm install
pnpm link ~/vitepress

# dev -> http://localhost:3000
pnpm dev

# build and serve
# -> http://localhost:5000
pnpm build
pnpm serve

```

## support markdown syntax

use markdown-it and some plugins to extend md syntax;

if you want to kown what md syntax this book support , please read [this](./markdown_syntax.txt)

## plugins of using

- [mermaid](https://github.com/mermaid-js/mermaid)


## vue components

- global
  - [gallery](./docs/gallery.txt)

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).

[![CC BY-NC-SA 4.0](https://camo.githubusercontent.com/7af524e82af24d98f89dde7c9c9a3849af52e420a66da140b7c7ae92bf7512d5/68747470733a2f2f6c6963656e7365627574746f6e732e6e65742f6c2f62792d6e632d73612f342e302f38387833312e706e67)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
