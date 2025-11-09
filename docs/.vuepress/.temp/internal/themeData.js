export const themeData = JSON.parse("{\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Build\",\"link\":\"/Build\"},{\"text\":\"Chroot\",\"link\":\"/chroot\"},{\"text\":\"RootFS\",\"link\":\"/rootfs\"}]},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/zh/\"},{\"text\":\"构建\",\"link\":\"/zh/Build\"},{\"text\":\"chroot\",\"link\":\"/zh/chroot\"},{\"text\":\"rootfs\",\"link\":\"/zh/rootfs\"}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
