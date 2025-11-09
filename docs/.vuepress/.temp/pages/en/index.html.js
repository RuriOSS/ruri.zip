import comp from "/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Ruri - Lightweight, User-friendly Linux-container Implementation\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Ruri - Lightweight, User-friendly Linux-container Implementation\",\"tagline\":\"A zipped📦 Linux container runtime that zips🚀\",\"heroImage\":\"/images/logo.png\",\"heroText\":\"ruri\",\"actions\":[{\"text\":\"Repository\",\"link\":\"https://github.com/RuriOSS/ruri\",\"type\":\"primary\"},{\"text\":\"Full Usage\",\"link\":\"https://github.com/RuriOSS/ruri/blob/main/doc/USAGE.md\",\"type\":\"primary\"}],\"footer\":\"MIT Licensed | Copyright (c) 2022-2025 RuriOSS\"},\"headers\":[{\"level\":2,\"title\":\"Highlights\",\"slug\":\"highlights\",\"link\":\"#highlights\",\"children\":[]},{\"level\":2,\"title\":\"About us:\",\"slug\":\"about-us\",\"link\":\"#about-us\",\"children\":[]},{\"level\":2,\"title\":\"Get ruri\",\"slug\":\"get-ruri\",\"link\":\"#get-ruri\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"en/README.md\"}")
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
