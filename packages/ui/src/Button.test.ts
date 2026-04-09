import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renders slot content', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Send prompt' },
    })

    expect(wrapper.text()).toContain('Send prompt')
  })

  it('emits click event when active', async () => {
    const wrapper = mount(Button)

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
    })

    await wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('applies visual classes from props', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary',
        size: 'lg',
        block: true,
      },
    })

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(['zen-button--secondary', 'zen-button--lg', 'is-block'])
    )
  })
})
