<template><div><h1 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>Build</span></a></h1>
<p>You need to get libcap, libseccomp, libpthread.</p>
<h1 id="build-using-build-c-experimental" tabindex="-1"><a class="header-anchor" href="#build-using-build-c-experimental"><span>Build using build.c(experimental)</span></a></h1>
<p>We are very happy to introduce a new build system for ruri: build.c<br>
It's a pure C program that does not depend on any external build system.<br>
IT IS A BIG STEP BACKWARDS THE HISTORY OF COMPUTER SCIENCE!!!<br>
That's great 😃<br>
To use it, just <code v-pre>cc build.c</code> and <code v-pre>./a.out</code>.<br>
for help, see <code v-pre>./a.out -h</code>.</p>
<h1 id="build-using-autoconf-recommended" tabindex="-1"><a class="header-anchor" href="#build-using-autoconf-recommended"><span>Build using autoconf(recommended)</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">git clone https://github.com/Moe-hacker/ruri</span>
<span class="line">cd ruri</span>
<span class="line">aclocal</span>
<span class="line">autoconf</span>
<span class="line">./configure --enable-static</span>
<span class="line">make</span>
<span class="line">sudo cp ruri /usr/bin/ruri</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>NOTE:</span></a></h2>
<p>The test script has a part that must be run with <code v-pre>sudo</code>, <code v-pre>DO NOT</code> run <code v-pre>make test</code> on your devices!!!!</p>
<h2 id="build-options" tabindex="-1"><a class="header-anchor" href="#build-options"><span>Build options:</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  --enable-coreonly       Compile core only</span>
<span class="line">  --disable-libcap        Disable libcap support</span>
<span class="line">  --disable-libseccomp    Disable libseccomp support</span>
<span class="line">  --disable-rurienv       Disable .rurienv support</span>
<span class="line">  --enable-static         Enable static build</span>
<span class="line">  --enable-debug          Enable debug log</span>
<span class="line">  --enable-dev            Enable dev build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: <code v-pre>--enable-coreonly</code> will auto enable <code v-pre>--disable-libseccomp --disable-libcap --disable-rurienv</code></p>
<h1 id="build-using-cmake-for-downstream" tabindex="-1"><a class="header-anchor" href="#build-using-cmake-for-downstream"><span>Build using CMake(for downstream)</span></a></h1>
<p>(if you'd prefer to use CMake)</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">git clone https://github.com/Moe-hacker/ruri</span>
<span class="line">cd ruri</span>
<span class="line">cmake .</span>
<span class="line">make</span>
<span class="line">make install</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-options-in-cmake" tabindex="-1"><a class="header-anchor" href="#build-options-in-cmake"><span>Build options in CMake:</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  -DBUILD_LIB=on             Compile to shared library</span>
<span class="line">  -DDISABLE_LIBCAP=on        Disable libcap support</span>
<span class="line">  -DDISABLE_LIBSECCOMP=on    Disable libseccomp support</span>
<span class="line">  -DDISABLE_RURIENV=on       Disable .rurienv support</span>
<span class="line">  -DENABLE_STATIC=on         Enable static build</span>
<span class="line">  -DENABLE_DEBUG=on          Enable debug log</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note:</p>
<ul>
<li>-DENABLE_DEBUG=on is equivalent to the traditional build options --enable-dev plus --enable-debug</li>
<li>When DISABLE_RURIENV and DISABLE_LIBSECCOMP and DISABLE_LIBCAP are enabled at the same time, it is equivalent to --enable-coreonly in the traditional build process</li>
</ul>
<h2 id="other-target-in-cmake-while-configuration-complete" tabindex="-1"><a class="header-anchor" href="#other-target-in-cmake-while-configuration-complete"><span>Other target in CMake while configuration complete:</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  format      Run clang-format steps</span>
<span class="line">  strip       Run strip steps</span>
<span class="line">  tidy        Run clang-tidy steps</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


