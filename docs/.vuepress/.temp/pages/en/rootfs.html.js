import comp from "/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/en/rootfs.html.vue"
const data = JSON.parse("{\"path\":\"/en/rootfs.html\",\"title\":\"Kernel Space and User Space\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"en/rootfs.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
