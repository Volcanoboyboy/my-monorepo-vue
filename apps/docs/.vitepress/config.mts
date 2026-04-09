import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Zen Repo UI',
  description: 'AI-inspired Vue component library docs for the Zen Repo monorepo.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components/button' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [{ text: 'Overview', link: '/' }],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Modal', link: '/components/modal' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vite: {
    resolve: {
      alias: {
        '@zen-repo/ui': resolve(__dirname, '../../../packages/ui/src/index.ts'),
      },
    },
  },
})
