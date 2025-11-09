export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Build.html", { loader: () => import(/* webpackChunkName: "Build.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/Build.html.js"), meta: {"title":"Build"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Ruri - Lightweight, User-friendly Linux-container Implementation"} }],
  ["/chroot.html", { loader: () => import(/* webpackChunkName: "chroot.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/chroot.html.js"), meta: {"title":"Chroot"} }],
  ["/rootfs.html", { loader: () => import(/* webpackChunkName: "rootfs.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/rootfs.html.js"), meta: {"title":"Kernel Space and User Space"} }],
  ["/zh/Build.html", { loader: () => import(/* webpackChunkName: "zh_Build.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/zh/Build.html.js"), meta: {"title":"构建"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"Ruri - 轻量级、用户友好的 Linux 容器实现"} }],
  ["/zh/chroot.html", { loader: () => import(/* webpackChunkName: "zh_chroot.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/zh/chroot.html.js"), meta: {"title":"Chroot"} }],
  ["/zh/rootfs.html", { loader: () => import(/* webpackChunkName: "zh_rootfs.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/zh/rootfs.html.js"), meta: {"title":"内核空间和用户空间"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
