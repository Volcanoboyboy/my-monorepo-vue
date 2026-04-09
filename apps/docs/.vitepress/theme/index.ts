import DefaultTheme from 'vitepress/theme'
import { Button, Input, Modal } from '@zen-repo/ui'
import ModalPreview from '../../components/ModalPreview.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Button', Button)
    app.component('Input', Input)
    app.component('Modal', Modal)
    app.component('ModalPreview', ModalPreview)
  },
}
