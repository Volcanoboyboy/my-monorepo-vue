import { defineConfig } from 'vitepress'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My monorepo Components",
  description: "组件库文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      { text: 'Button', link: '/components/button' },
      { text: 'Input', link: '/components/input' },
      { text: 'Modal', link: '/components/modal' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        // 将 @zen-repo/ui 指向 packages/ui 的源码入口
        '@zen-repo/ui': resolve(__dirname, '../../../packages/ui/src'),
      },
    },
  },
})
