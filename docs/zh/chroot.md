# Chroot

Chroot 代表“change root”（更改根目录）。它被引入 Unix 系统，用于更改正在运行的进程及其子进程的表观根目录。与 Windows 使用 C:\ 或 D:\ 等驱动器号不同，Linux 只有一个单一的根目录 `/`，所有文件系统都挂载在其下方。当进程访问绝对路径时，它总是从 `/` 开始。

通过 chroot，你可以为进程更改根目录，将其视图和访问权限限制在新根目录下的文件和目录中。这种隔离是 Linux 容器的一个关键特性。

例如 `cat` 程序，它链接到几个库：
```
linux-vdso.so.1 (0x0000ffffaba1f000)
libc.so.6 => /lib/aarch64-linux-gnu/libc.so.6 (0x0000ffffab7e0000)
/lib/ld-linux-aarch64.so.1 (0x0000ffffab9d0000)
```
（*vdso 是内核提供的一个虚拟动态共享对象。）

如果你在主机系统上运行 `cat`，它会从 `/lib/aarch64-linux-gnu/libc.so.6` 和 `/lib/ld-linux-aarch64.so.1` 加载这些库。如果这些库与 `cat` 期望的版本不匹配，它可能无法正常运行。然而，在 chroot 环境中，`cat` 只能看到并加载新根目录下的库，完全不受主机库的影响。

这就是为什么你可以在具有不同发行版的主机上运行 Debian、Alpine 或 Arch Linux 等容器，甚至在 Android 设备上运行 Linux 容器。从本质上讲，chroot 使整个根文件系统像一个“静态链接”的环境，从而确保兼容性和隔离性。

# chroot 系统调用

chroot() 系统调用将调用进程的根目录更改为指定的路径。它被设计为仅在具有超级用户权限的情况下运行（这真的更安全吗？）。但如今，你也可以在用户命名空间中使用它，这允许非特权用户创建隔离环境。

使用起来非常简单，例如：
```c
// 包含必要的头文件。
chroot("/new_root");
chdir("/");
char *argv[] = {"/bin/bash", NULL};
execv(argv[0], argv);
```

---

**注意**：本文档尚未完全翻译。欢迎贡献翻译！  
**提示**：本翻译由 Grok（xAI）大模型提供。