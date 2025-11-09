# 构建

ruri 依赖于 `libcap`、`libseccomp` 和 `libpthread`。在构建之前，请确保已安装这些依赖库。

# 使用 build.c 构建（实验性）

我们很高兴为 ruri 引入一个全新的构建系统：build.c！

它是一个纯 C 程序，完全不依赖任何外部构建工具。

这绝对是计算机科学史上的一大步“倒退”！！！

太棒了 :)

使用方法很简单：只需运行 `cc build.c` 编译，然后执行 `./a.out`。

如需帮助，请查看 `./a.out -h`。

# 使用 autoconf 构建（推荐）

```
git clone https://github.com/Moe-hacker/ruri
cd ruri
aclocal
autoconf
./configure --enable-static
make
sudo cp ruri /usr/bin/ruri
```

## 注意：
测试脚本中部分内容需要 `sudo` 权限运行，**请勿** 在您的设备上执行 `make test`！！！

## 构建选项：
```
  --enable-coreonly       仅编译核心模块
  --disable-libcap        禁用 libcap 支持
  --disable-libseccomp    禁用 libseccomp 支持
  --disable-rurienv       禁用 .rurienv 支持
  --enable-static         启用静态构建
  --enable-debug          启用调试日志
  --enable-dev            启用开发构建
```

**注意**：`--enable-coreonly` 将自动启用 `--disable-libseccomp`、`--disable-libcap` 和 `--disable-rurienv`。

# 使用 CMake 构建（适用于下游项目）
（如果您更喜欢 CMake）

```
git clone https://github.com/Moe-hacker/ruri
cd ruri
cmake .
make
make install
```

## CMake 中的构建选项：
```
  -DBUILD_LIB=on             编译为共享库
  -DDISABLE_LIBCAP=on        禁用 libcap 支持
  -DDISABLE_LIBSECCOMP=on    禁用 libseccomp 支持
  -DDISABLE_RURIENV=on       禁用 .rurienv 支持
  -DENABLE_STATIC=on         启用静态构建
  -DENABLE_DEBUG=on          启用调试日志
```

**注意**：
- `-DENABLE_DEBUG=on` 相当于传统构建选项 `--enable-dev` 加上 `--enable-debug`。
- 当同时启用 `DISABLE_RURIENV`、`DISABLE_LIBSECCOMP` 和 `DISABLE_LIBCAP` 时，相当于传统构建过程中的 `--enable-coreonly`。

## 配置完成后 CMake 中的其他目标：
```
  format      运行 clang-format 步骤
  strip       运行 strip 步骤
  tidy        运行 clang-tidy 步骤
```

---

**注意**：本文档尚未完全翻译。欢迎贡献翻译！  
**提示**：本翻译由 Grok（xAI）大模型提供。