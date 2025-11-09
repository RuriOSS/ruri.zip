<template><div><blockquote>
<p><strong>注意</strong>：本文档尚未翻译。欢迎贡献！</p>
</blockquote>
<h2 id="亮点" tabindex="-1"><a class="header-anchor" href="#亮点"><span>亮点</span></a></h2>
<ul>
<li>
<p><strong>强大的功能</strong></p>
<ul>
<li>支持 chroot、带 pivot_root 的 unshare、能力控制、cgroups、no_new_privs、环境/用户/工作目录设置、seccomp 等。</li>
<li>内置 binfmt_misc 和 QEMU，可轻松实现多架构容器。</li>
<li>无根模式（需要用户命名空间）。</li>
<li>灵活的挂载选项：挂载镜像/分区，将挂载点设置为只读或读写。</li>
<li>支持配置文件。</li>
</ul>
</li>
<li>
<p><strong>超轻量级和零依赖</strong></p>
<ul>
<li>无根模式仅需要可选的 <code v-pre>uidmap</code>；所有其他功能都是内置的。</li>
<li>适用于多种架构的静态链接二进制文件。</li>
<li>非常小的二进制文件大小（使用 upx 甚至小于 200k），但有超过 30 个选项。</li>
</ul>
</li>
<li>
<p><strong>灵活和跨平台</strong></p>
<ul>
<li>可在有根的 Android、物联网、amd64、s390x 等设备上运行，只需要 root 权限。</li>
</ul>
</li>
<li>
<p><strong>安全设计</strong></p>
<ul>
<li>无根容器、安全选项和只读文件系统支持。</li>
</ul>
</li>
<li>
<p><strong>对初学者简单</strong></p>
<ul>
<li>可以直接替代 <code v-pre>chroot</code>；无需学习每个选项即可轻松使用。</li>
</ul>
<p align="center">
<img src="https://github.com/Moe-hacker/ruri/raw/main/logo/rurifetch.png" alt="" style="width:75%;align: center;">
</p>
</li>
</ul>
<h2 id="关于我们" tabindex="-1"><a class="header-anchor" href="#关于我们"><span>关于我们：</span></a></h2>
<p> 不是“为什么不用 docker”，而是“什么时候不能用 docker”。
 ruri 的发音是 <code v-pre>luli</code>，你也可以用中文或日文称之为 <code v-pre>[瑠璃/琉璃]</code> <s>(るり)</s>。
 ruri 是轻量级、用户友好的 Linux 容器实现的缩写。
 ruri 是一个强大的容器实现，几乎可以在任何 Linux 设备上运行，即使内核配置不完整或存储空间极小。</p>
<h2 id="获取-ruri" tabindex="-1"><a class="header-anchor" href="#获取-ruri"><span>获取 ruri</span></a></h2>
<p>你可以在 <a href="https://github.com/Moe-hacker/ruri/releases/" target="_blank" rel="noopener noreferrer">Release</a> 中获取适用于 arm64、armv7、armhf、riscv64、i386、loong64、s390x、ppc64le 和 x86_64 设备的 ruri 二进制文件（静态链接）。
或者你可以运行以下命令自动下载 ruri</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">.</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://get.ruri.zip/ruri<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这将自动将 ruri 二进制文件下载到 <code v-pre>./ruri</code>。</p>
<h1 id="示例用法" tabindex="-1"><a class="header-anchor" href="#示例用法"><span>示例用法</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"># 运行 chroot 容器</span>
<span class="line">  sudo ruri /tmp/alpine</span>
<span class="line"></span>
<span class="line"># 如你所见，非常简单。</span>
<span class="line"></span>
<span class="line"># 关于能力</span>
<span class="line"># 运行特权 chroot 容器</span>
<span class="line">  sudo ruri -p /tmp/alpine</span>
<span class="line"></span>
<span class="line"># 如果你想运行特权 chroot 容器，</span>
<span class="line"># 但你不想给容器 cap_sys_chroot 权限</span>
<span class="line">  sudo ruri -p -d cap_sys_chroot /tmp/alpine</span>
<span class="line"></span>
<span class="line"># 如果你想运行具有通用权限的 chroot 容器，</span>
<span class="line"># 但你想保留 cap_sys_admin</span>
<span class="line">  sudo ruri -k cap_sys_admin /tmp/alpine</span>
<span class="line"></span>
<span class="line"># 关于 unshare</span>
<span class="line"># Unshare 容器的能力选项与 chroot 相同。</span>
<span class="line"># 运行 unshare 容器</span>
<span class="line">  sudo ruri -u /tmp/alpine</span>
<span class="line"></span>
<span class="line"># 最后，卸载容器</span>
<span class="line">  sudo ruri -U /tmp/alpine</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="手动构建" tabindex="-1"><a class="header-anchor" href="#手动构建"><span>手动构建</span></a></h1>
<p>Ruri 提供了静态链接的二进制文件，但如果你想自己构建，请参阅 <RouteLink to="/Build.html">构建</RouteLink>。</p>
</div></template>


