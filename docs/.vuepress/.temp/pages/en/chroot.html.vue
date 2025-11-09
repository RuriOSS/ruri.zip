<template><div><h1 id="chroot" tabindex="-1"><a class="header-anchor" href="#chroot"><span>Chroot</span></a></h1>
<p>Chroot stands for &quot;change root.&quot; It was introduced in Unix systems to change the apparent root directory for a running process and its children. Unlike Windows, which uses drive letters like C:\ or D:, Linux has a single root directory <code v-pre>/</code>, and everything is mounted beneath it. When a process accesses an absolute path, it starts from <code v-pre>/</code>.</p>
<p>With chroot, you can change the root directory for a process, restricting its view and access to only the files and directories under the new root. This isolation is a key feature of Linux containers.</p>
<p>For example, consider the program <code v-pre>cat</code>, which is linked to several libraries:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">linux-vdso.so.1 (0x0000ffffaba1f000)</span>
<span class="line">libc.so.6 => /lib/aarch64-linux-gnu/libc.so.6 (0x0000ffffab7e0000)</span>
<span class="line">/lib/ld-linux-aarch64.so.1 (0x0000ffffab9d0000)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(*vdso is a virtual dynamic shared object provided by the kernel.)</p>
<p>If you run <code v-pre>cat</code> on the host system, it loads libraries from <code v-pre>/lib/aarch64-linux-gnu/libc.so.6</code> and <code v-pre>/lib/ld-linux-aarch64.so.1</code>. If these libraries don't match what <code v-pre>cat</code> expects, it may fail to run. However, in a chroot environment, <code v-pre>cat</code> only sees and loads libraries from the new root directory, unaffected by the host's libraries.</p>
<p>This is why you can run Debian, Alpine, or Arch Linux... (and so on) containers on hosts with different distributions, and even run Linux containers on Android devices. In essence, chroot makes the entire root filesystem act like a &quot;statically linked&quot; environment, ensuring compatibility and isolation.</p>
<h1 id="the-chroot-system-call" tabindex="-1"><a class="header-anchor" href="#the-chroot-system-call"><span>The chroot system call</span></a></h1>
<p>The chroot() system call changes the root directory of the calling process to a specified path. It was designed to run only with superuser privileges(was it really more secure?). But nowadays, you can also use it in user namespaces, which allow unprivileged users to create isolated environments.<br>
It's very simple to use, just like this:</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// Include necessary headers.</span></span>
<span class="line"><span class="token function">chroot</span><span class="token punctuation">(</span><span class="token string">"/new_root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">chdir</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"/bin/bash"</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">execv</span><span class="token punctuation">(</span>argv<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> argv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


