import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Ruri',
      description: '「 须臾水面明月出，沧江万顷琉璃寒 」',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '琉璃',
      description: '「 须臾水面明月出，沧江万顷琉璃寒 」',
    },
  },

  theme: defaultTheme({
//   logo: '/images/logo.png',

    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Build', link: '/Build' },
          { text: 'Chroot', link: '/chroot' },
          { text: 'RootFS', link: '/rootfs' },
        ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        navbar: [
          { text: '首页', link: '/zh/' },
          { text: '构建', link: '/zh/Build' },
          { text: 'chroot', link: '/zh/chroot' },
          { text: 'rootfs', link: '/zh/rootfs' },
        ],
      },
    },
  }),

  bundler: webpackBundler(),
})
