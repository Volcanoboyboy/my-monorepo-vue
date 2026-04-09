import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
  it('emits model updates on input', async () => {
    const wrapper = mount(Input)

    await wrapper.find('input').setValue('hello')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['hello'])
  })

  it('shows helper or error text', () => {
    const helperWrapper = mount(Input, {
      props: { helper: 'Helper copy' },
    })
    const errorWrapper = mount(Input, {
      props: { error: 'Something went wrong' },
    })

    expect(helperWrapper.text()).toContain('Helper copy')
    expect(errorWrapper.text()).toContain('Something went wrong')
    expect(errorWrapper.classes()).toContain('is-invalid')
  })

  it('clears value when clear button is clicked', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'filled',
        clearable: true,
      },
    })

    await wrapper.find('.zen-input__clear').trigger('click')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })
})
