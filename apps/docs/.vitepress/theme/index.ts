import DefaultTheme from 'vitepress/theme'
import { Button, Input, Modal } from '@zen-repo/ui'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Button', Button)
    app.component('Input', Input)
    app.component('Modal', Modal)
  }
}