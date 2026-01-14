---
home: true
title: Ruri - Lightweight, User-friendly Linux-container Implementation
tagline: A zipped 📦 Linux container runtime that zips 🚀
heroImage: /images/logo.png
heroText: ruri

actions:
  - text: Repository
    link: https://github.com/RuriOSS/ruri
    type: primary
  - text: Full Usage
    link: https://github.com/RuriOSS/ruri/blob/main/doc/USAGE.md
    type: primary
  


footer: MIT Licensed | Copyright (c) 2022-2026 RuriOSS
---

## Highlights

- **Powerful Features**
  - Supports chroot, unshare with pivot_root, capability control, cgroups, no_new_privs, environment/user/workdir setup, seccomp, and more.
  - Built-in binfmt_misc & QEMU for easy multi-arch containers.
  - Rootless mode (requires user namespaces).
  - Flexible mount options: mount images/partitions, set mountpoints as read-only or rw.
  - Config file support.

- **Ultra-lightweight & Zero Dependencies**
  - Only optional `uidmap` needed for rootless mode; all other features are built-in.
  - Statically linked binaries for many architectures.
  - Very small binary size (even <200k with upx), yet over 30 options.

- **Flexible & Cross-platform**
  - Runs on rooted Android, IoT, amd64, s390x, and more architectures/platforms, just needs root.

- **Secure by Design**
  - Rootless containers, security options, and read-only filesystem support.

- **Simple for Beginners**
  - Can replace `chroot` directly; easy to use without learning every option.

  <p align="center">
  <img src="https://github.com/Moe-hacker/ruri/raw/main/logo/rurifetch.png" alt="" style="width:75%;align: center;">
  </p>

## About us:
&emsp;Not "Why not docker", but "When cannot docker".    
&emsp;ruri is pronounced as `luli`, or you can call it `[瑠璃/琉璃]` ~~(るり)~~ in Chinese or Japanese as well.    
&emsp;ruri is acronym to Lightweight, User-friendly Linux-container Implementation.    
&emsp;ruri is a powerful container implementation that runs on almost any Linux device, even with incomplete kernel configurations or minimal storage space.    

## Get ruri

You can get ruri binary (statically linked) for arm64, armv7, armhf, riscv64, i386, loong64, s390x, ppc64le and x86_64 devices in [Release](https://github.com/Moe-hacker/ruri/releases/).
Or you can run the following command to download ruri automatically

```sh
. <(curl -sL https://get.ruri.zip/ruri)
```

This will automatically download ruri binary to `./ruri`.

# Example Usage

```
# Run chroot container
  sudo ruri /tmp/alpine

# Very simple as you can see.

# About the capabilities
# Run privileged chroot container
  sudo ruri -p /tmp/alpine

# If you want to run privileged chroot container,
# but you don't want to give the container cap_sys_chroot privileges
  sudo ruri -p -d cap_sys_chroot /tmp/alpine

# If you want to run chroot container with common privileges,
# but you want cap_sys_admin to be kept
  sudo ruri -k cap_sys_admin /tmp/alpine

# About unshare
# Unshare container's capability options are same with chroot.
# Run unshare container
  sudo ruri -u /tmp/alpine

# Finally, umount the container
  sudo ruri -U /tmp/alpine
```

# Build Manually

Ruri provides statically linked binary, but if you want to build it yourself, see [Build](/Build.html).
