import comp from "/data/data/com.termux/files/home/ruri.zip/docs/.vuepress/.temp/pages/en/Build.html.vue"
const data = JSON.parse("{\"path\":\"/en/Build.html\",\"title\":\"Build\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"NOTE:\",\"slug\":\"note\",\"link\":\"#note\",\"children\":[]},{\"level\":2,\"title\":\"Build options:\",\"slug\":\"build-options\",\"link\":\"#build-options\",\"children\":[]},{\"level\":2,\"title\":\"Build options in CMake:\",\"slug\":\"build-options-in-cmake\",\"link\":\"#build-options-in-cmake\",\"children\":[]},{\"level\":2,\"title\":\"Other target in CMake while configuration complete:\",\"slug\":\"other-target-in-cmake-while-configuration-complete\",\"link\":\"#other-target-in-cmake-while-configuration-complete\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"en/Build.md\"}")
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
