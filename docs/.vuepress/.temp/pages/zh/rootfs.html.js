import comp from "/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/zh/rootfs.html.vue"
const data = JSON.parse("{\"path\":\"/zh/rootfs.html\",\"title\":\"内核空间和用户空间\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1762617927000,\"contributors\":[{\"name\":\"Aqnya\",\"username\":\"Aqnya\",\"email\":\"siyueba73@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Aqnya\"}],\"changelog\":[{\"hash\":\"0f6b959c90ecf12ae03f5376c41ce98153623c38\",\"time\":1762617927000,\"email\":\"siyueba73@gmail.com\",\"author\":\"Aqnya\",\"message\":\"add i18n support.\"}]},\"filePathRelative\":\"zh/rootfs.md\"}")
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
