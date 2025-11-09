<template><div><blockquote>
<p><strong>注意</strong>：本文档尚未翻译。欢迎贡献！</p>
</blockquote>
<h1 id="chroot" tabindex="-1"><a class="header-anchor" href="#chroot"><span>Chroot</span></a></h1>
<p>Chroot 代表“change root”。它被引入 Unix 系统，用于更改正在运行的进程及其子进程的表观根目录。与使用 C:\ 或 D:\ 等驱动器号的 Windows 不同，Linux 有一个单一的根目录 <code v-pre>/</code>，所有东西都挂载在它下面。当一个进程访问一个绝对路径时，它从 <code v-pre>/</code> 开始。</p>
<p>通过 chroot，你可以为一个进程更改根目录，将其视图和访问权限限制在新的根目录下的文件和目录中。这种隔离是 Linux 容器的一个关键特性。</p>
<p>例如，考虑程序 <code v-pre>cat</code>，它链接到几个库：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">linux-vdso.so.1 (0x0000ffffaba1f000)</span>
<span class="line">libc.so.6 => /lib/aarch64-linux-gnu/libc.so.6 (0x0000ffffab7e0000)</span>
<span class="line">/lib/ld-linux-aarch64.so.1 (0x0000ffffab9d0000)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（*vdso 是内核提供的一个虚拟动态共享对象。）</p>
<p>如果你在主机系统上运行 <code v-pre>cat</code>，它会从 <code v-pre>/lib/aarch64-linux-gnu/libc.so.6</code> 和 <code v-pre>/lib/ld-linux-aarch64.so.1</code> 加载库。如果这些库与 <code v-pre>cat</code> 期望的不匹配，它可能无法运行。然而，在 chroot 环境中，<code v-pre>cat</code> 只看到并加载来自新根目录的库，不受主机库的影响。</p>
<p>这就是为什么你可以在具有不同发行版的主机上运行 Debian、Alpine 或 Arch Linux...（等等）容器，甚至可以在 Android 设备上运行 Linux 容器。从本质上讲，chroot 使整个根文件系统就像一个“静态链接”的环境，确保了兼容性和隔离性。</p>
<h1 id="chroot-系统调用" tabindex="-1"><a class="header-anchor" href="#chroot-系统调用"><span>chroot 系统调用</span></a></h1>
<p>chroot() 系统调用将调用进程的根目录更改为指定的路径。它被设计为只能在具有超级用户权限的情况下运行（它真的更安全吗？）。但如今，你也可以在用户命名空间中使用它，这允许非特权用户创建隔离的环境。
使用起来非常简单，就像这样：</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// 包含必要的头文件。</span></span>
<span class="line"><span class="token function">chroot</span><span class="token punctuation">(</span><span class="token string">"/new_root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">chdir</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/bin/bash"</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execv</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


