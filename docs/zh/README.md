---
home: true
title: Ruri - 轻量级、用户友好的 Linux 容器实现
tagline: 一个压缩的📦 Linux 容器实现，速度飞快🚀
heroImage: /images/logo.png
heroText: ruri

actions:
  - text: 仓库
    link: https://github.com/RuriOSS/ruri
    type: primary
  - text: 完整用法
    link: https://github.com/RuriOSS/ruri/blob/main/doc/USAGE.md
    type: primary
  


footer: MIT 许可 | 版权所有 (c) 2022-2025 RuriOSS
---

## 亮点

- **功能强劲，爽！**
  - 支持 chroot、带 pivot_root 的 unshare、能力控制、cgroups、no_new_privs、环境/用户/工作目录设置、seccomp 等。
  - 内置 binfmt_misc & QEMU，支持轻松实现多架构容器。
  - 非root模式 (需要user space支持)。
  - 灵活的挂载选项：支持挂载镜像/分区，同时可将挂载点设置为只读或读写。
  - 使用k2v格式进行配置

- **超轻量和零依赖**
  - 在无root模式下仅依赖 `uidmap` ；其他所有功能均为内置。
  - 提供多种架构的静态链接二进制文件。
  - 在二进制文件体积极小的同时拥有超过 30 个参数可选（使用 upx 压缩本体后甚至小于 200k）。

- **跨平台**
  - 可在 Android、IoT、amd64、s390x 等平台上运行。（需 root 权限）

- **设计安全**
  - 支持无root容器、安全选项以及只读文件系统。

- **用法简单**
  - 直接替代 `chroot`；无需掌握所有选项即可轻松上手。

  <p align="center">
  <img src="https://github.com/Moe-hacker/ruri/raw/main/logo/rurifetch.png" alt="" style="width:75%; text-align: center;">
  </p>

## 关于我们：
&emsp;不要问“为什么不用 Docker”，而是“什么时候不能用 Docker”。    
&emsp;ruri 的发音是 `luli`，你也可以用中文或日文称之为 `[瑠璃/琉璃]` ~~(るり)~~。    
&emsp;ruri 是 Lightweight, User-friendly Linux-container Implementation 的缩写。    
&emsp;ruri 是一个强大的容器实现，几乎可在任何 Linux 设备上运行，即便内核配置不完整或存储空间有限。    

## 获取 ruri

你可以在 [Release](https://github.com/Moe-hacker/ruri/releases/) 中下载适用于 arm64、armv7、armhf、riscv64、i386、loong64、s390x、ppc64le 或 x86_64 等架构的 ruri 可执行文件（static build）。
你也可以选择运行以下命令获取 ruri：

```sh
. <(curl -sL https://get.ruri.zip/ruri)
```

这将自动下载ruri至 `./ruri`。

# 示例用法

```
# 运行 chroot 容器
  sudo ruri /tmp/alpine

# 如你所见，操作极其简单。

# 关于能力
# 运行特权 chroot 容器
  sudo ruri -p /tmp/alpine

# 如果你想运行特权 chroot 容器，
# 但不想授予容器 cap_sys_chroot 权限
  sudo ruri -p -d cap_sys_chroot /tmp/alpine

# 如果你想运行具有默认权限的 chroot 容器，
# 但希望保留 cap_sys_admin 权限
  sudo ruri -k cap_sys_admin /tmp/alpine

# 关于 unshare
# unshare 容器的能力选项与 chroot 相同。
# 运行 unshare 容器
  sudo ruri -u /tmp/alpine

# 卸载容器
  sudo ruri -U /tmp/alpine
```

# 手动构建

Ruri 提供静态链接的二进制文件，但若想自行构建，请参阅 [Build](/zh/Build.html)。

---

**注意**：本文档尚未完全翻译。欢迎贡献翻译！  
**提示**：本翻译由 Grok（xAI）大模型提供。