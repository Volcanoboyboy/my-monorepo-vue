import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Modal from './Modal.vue'

describe('Modal', () => {
  it('renders title and description when visible', () => {
    const wrapper = mount(Modal, {
      attachTo: document.body,
      props: {
        visible: true,
        title: 'Delete workspace',
        description: 'This action cannot be undone.',
      },
    })

    expect(document.body.textContent).toContain('Delete workspace')
    expect(document.body.textContent).toContain('This action cannot be undone.')
    wrapper.unmount()
  })

  it('emits close when overlay is clicked', async () => {
    const wrapper = mount(Modal, {
      attachTo: document.body,
      props: {
        visible: true,
      },
    })

    await wrapper.find('.zen-modal-overlay').trigger('click')

    expect(wrapper.emitted('update:visible')?.[0]).toEqual([false])
    expect(wrapper.emitted('close')).toHaveLength(1)
    wrapper.unmount()
  })

  it('emits confirm without closing by default', async () => {
    const wrapper = mount(Modal, {
      attachTo: document.body,
      props: {
        visible: true,
      },
    })

    await wrapper.find('.zen-modal__action--primary').trigger('click')
    await nextTick()

    expect(wrapper.emitted('confirm')).toHaveLength(1)
    expect(wrapper.emitted('update:visible')).toBeUndefined()
    wrapper.unmount()
  })
})
