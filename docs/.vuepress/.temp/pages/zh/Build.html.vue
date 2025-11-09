<template><div><blockquote>
<p><strong>注意</strong>：本文档尚未翻译。欢迎贡献！</p>
</blockquote>
<h1 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h1>
<p>你需要获取 libcap、libseccomp、libpthread。</p>
<h1 id="使用-build-c-构建-实验性" tabindex="-1"><a class="header-anchor" href="#使用-build-c-构建-实验性"><span>使用 build.c 构建（实验性）</span></a></h1>
<p>我们很高兴为 ruri 引入一个新的构建系统：build.c
它是一个纯 C 程序，不依赖于任何外部构建系统。
这是计算机科学史上的一大步倒退！！！
太好了 😃
要使用它，只需 <code v-pre>cc build.c</code> 和 <code v-pre>./a.out</code>。
如需帮助，请参阅 <code v-pre>./a.out -h</code>。</p>
<h1 id="使用-autoconf-构建-推荐" tabindex="-1"><a class="header-anchor" href="#使用-autoconf-构建-推荐"><span>使用 autoconf 构建（推荐）</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">git clone https://github.com/Moe-hacker/ruri</span>
<span class="line">cd ruri</span>
<span class="line">aclocal</span>
<span class="line">autoconf</span>
<span class="line">./configure --enable-static</span>
<span class="line">make</span>
<span class="line">sudo cp ruri /usr/bin/ruri</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意：</span></a></h2>
<p>测试脚本中有一部分必须使用 <code v-pre>sudo</code> 运行，<code v-pre>不要</code> 在你的设备上运行 <code v-pre>make test</code>！！！！</p>
<h2 id="构建选项" tabindex="-1"><a class="header-anchor" href="#构建选项"><span>构建选项：</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  --enable-coreonly       仅编译核心</span>
<span class="line">  --disable-libcap        禁用 libcap 支持</span>
<span class="line">  --disable-libseccomp    禁用 libseccomp 支持</span>
<span class="line">  --disable-rurienv       禁用 .rurienv 支持</span>
<span class="line">  --enable-static         启用静态构建</span>
<span class="line">  --enable-debug          启用调试日志</span>
<span class="line">  --enable-dev            启用开发构建</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>--enable-coreonly</code> 将自动启用 <code v-pre>--disable-libseccomp --disable-libcap --disable-rurienv</code></p>
<h1 id="使用-cmake-构建-用于下游" tabindex="-1"><a class="header-anchor" href="#使用-cmake-构建-用于下游"><span>使用 CMake 构建（用于下游）</span></a></h1>
<p>（如果你更喜欢使用 CMake）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">git clone https://github.com/Moe-hacker/ruri</span>
<span class="line">cd ruri</span>
<span class="line">cmake .</span>
<span class="line">make</span>
<span class="line">make install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmake-中的构建选项" tabindex="-1"><a class="header-anchor" href="#cmake-中的构建选项"><span>CMake 中的构建选项：</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  -DBUILD_LIB=on             编译为共享库</span>
<span class="line">  -DDISABLE_LIBCAP=on        禁用 libcap 支持</span>
<span class="line">  -DDISABLE_LIBSECCOMP=on    禁用 libseccomp 支持</span>
<span class="line">  -DDISABLE_RURIENV=on       禁用 .rurienv 支持</span>
<span class="line">  -DENABLE_STATIC=on         启用静态构建</span>
<span class="line">  -DENABLE_DEBUG=on          启用调试日志</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>-DENABLE_DEBUG=on 相当于传统构建选项 --enable-dev 加上 --enable-debug</li>
<li>当同时启用 DISABLE_RURIENV、DISABLE_LIBSECCOMP 和 DISABLE_LIBCAP 时，相当于传统构建过程中的 --enable-coreonly</li>
</ul>
<h2 id="配置完成时-cmake-中的其他目标" tabindex="-1"><a class="header-anchor" href="#配置完成时-cmake-中的其他目标"><span>配置完成时 CMake 中的其他目标：</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  format      运行 clang-format 步骤</span>
<span class="line">  strip       运行 strip 步骤</span>
<span class="line">  tidy        运行 clang-tidy 步骤</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


