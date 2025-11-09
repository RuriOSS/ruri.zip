<template><div><h2 id="highlights" tabindex="-1"><a class="header-anchor" href="#highlights"><span>Highlights</span></a></h2>
<ul>
<li>
<p><strong>Powerful Features</strong></p>
<ul>
<li>Supports chroot, unshare with pivot_root, capability control, cgroups, no_new_privs, environment/user/workdir setup, seccomp, and more.</li>
<li>Built-in binfmt_misc &amp; QEMU for easy multi-arch containers.</li>
<li>Rootless mode (requires user namespaces).</li>
<li>Flexible mount options: mount images/partitions, set mountpoints as read-only or rw.</li>
<li>Config file support.</li>
</ul>
</li>
<li>
<p><strong>Ultra-lightweight &amp; Zero Dependencies</strong></p>
<ul>
<li>Only optional <code v-pre>uidmap</code> needed for rootless mode; all other features are built-in.</li>
<li>Statically linked binaries for many architectures.</li>
<li>Very small binary size (even &lt;200k with upx), yet over 30 options.</li>
</ul>
</li>
<li>
<p><strong>Flexible &amp; Cross-platform</strong></p>
<ul>
<li>Runs on rooted Android, IoT, amd64, s390x, and more, just needs root.</li>
</ul>
</li>
<li>
<p><strong>Secure by Design</strong></p>
<ul>
<li>Rootless containers, security options, and read-only filesystem support.</li>
</ul>
</li>
<li>
<p><strong>Simple for Beginners</strong></p>
<ul>
<li>Can replace <code v-pre>chroot</code> directly; easy to use without learning every option.</li>
</ul>
<p align="center">
<img src="https://github.com/Moe-hacker/ruri/raw/main/logo/rurifetch.png" alt="" style="width:75%;align: center;">
</p>
</li>
</ul>
<h2 id="about-us" tabindex="-1"><a class="header-anchor" href="#about-us"><span>About us:</span></a></h2>
<p> Not &quot;Why not docker&quot;, but &quot;When cannot docker&quot;.<br>
 ruri is pronounced as <code v-pre>luli</code>, or you can call it <code v-pre>[瑠璃/琉璃]</code> <s>(るり)</s> in Chinese or Japanese as well.<br>
 ruri is acronym to Lightweight, User-friendly Linux-container Implementation.<br>
 ruri is a powerful container implementation that runs on almost any Linux device, even with incomplete kernel configurations or minimal storage space.</p>
<h2 id="get-ruri" tabindex="-1"><a class="header-anchor" href="#get-ruri"><span>Get ruri</span></a></h2>
<p>You can get ruri binary (statically linked) for arm64, armv7, armhf, riscv64, i386, loong64, s390x, ppc64le and x86_64 devices in <a href="https://github.com/Moe-hacker/ruri/releases/" target="_blank" rel="noopener noreferrer">Release</a>.
Or you can run the following command to download ruri automatically</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">.</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://get.ruri.zip/ruri<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This will automatically download ruri binary to <code v-pre>./ruri</code>.</p>
<h1 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage"><span>Example Usage</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"># Run chroot container</span>
<span class="line">  sudo ruri /tmp/alpine</span>
<span class="line"></span>
<span class="line"># Very simple as you can see.</span>
<span class="line"></span>
<span class="line"># About the capabilities</span>
<span class="line"># Run privileged chroot container</span>
<span class="line">  sudo ruri -p /tmp/alpine</span>
<span class="line"></span>
<span class="line"># If you want to run privileged chroot container,</span>
<span class="line"># but you don't want to give the container cap_sys_chroot privileges</span>
<span class="line">  sudo ruri -p -d cap_sys_chroot /tmp/alpine</span>
<span class="line"></span>
<span class="line"># If you want to run chroot container with common privileges,</span>
<span class="line"># but you want cap_sys_admin to be kept</span>
<span class="line">  sudo ruri -k cap_sys_admin /tmp/alpine</span>
<span class="line"></span>
<span class="line"># About unshare</span>
<span class="line"># Unshare container's capability options are same with chroot.</span>
<span class="line"># Run unshare container</span>
<span class="line">  sudo ruri -u /tmp/alpine</span>
<span class="line"></span>
<span class="line"># Finally, umount the container</span>
<span class="line">  sudo ruri -U /tmp/alpine</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="build-manually" tabindex="-1"><a class="header-anchor" href="#build-manually"><span>Build Manually</span></a></h1>
<p>Ruri provides statically linked binary, but if you want to build it yourself, see <RouteLink to="/Build.html">Build</RouteLink>.</p>
</div></template>


